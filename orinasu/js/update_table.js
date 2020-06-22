'use strict';

function update_table(event){

  console.log('----- in update_table -----');

  var id=event.target.id;
  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;
  var label=event.target.label;
  var col=event.target.col;

  console.log('id:'+id);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('table_name:'+table_name);
  console.log('col is:');
  console.log(col);
  console.log('label is:');
  console.log(label);

  var update_val=new Array();

  update_val=get_input_value({
    parent_tag_str:parent_tag_str,
    table_name:table_name,
    label:label,
    params:update_val
  });

      var query_label=new Array();

      var where_key;

      if(table_name=='calendar'){
        where_key='date';
      }else{
        where_key='id';
      }

      for(var i=0;i<col.length;i++){
        if(col[i]=='id') continue;
        query_label.push(col[i]);
      }

      var query='update '+table_name+' set ';

      for(var i=0;i<query_label.length;i++){

        query+=query_label[i]+'='+update_val[i];

        if(i!=query_label.length-1){
          query+=',';
        }else{
          query+=' where '+where_key+'='+id+';';
        }

      }

      console.log('query:'+query);

      $.when(
        ajax_stmt_exec(table_name,query,'assoc'),
      ).done(function(results){

        if(table_name=='members'){
          $.when(
            ajax_get_col(table_name+'_join'),
            ajax_get_col(table_name),
            ajax_get_col('riyou_keitai'),
            ajax_select_from_table('riyou_keitai'),
            ajax_get_col("youbi"),
            ajax_select_from_table("youbi"),
      
          ).done(function(label,col,riyou_col,riyou_row,youbi_col,youbi_row){

            var riyou=new Array();

            riyou=getArrayFromRows({
              array:riyou,
              cols:riyou_col,
              rows:riyou_row
            });

            var youbi=new Array();

            youbi=getArrayFromRows({
              array:youbi,
              cols:youbi_col,
              rows:youbi_row
            });
  
            create_members_input_form({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              riyou:riyou,
              youbi:youbi,
            });
    
            create_table({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              riyou:riyou,
              row:results
            });
    
          });
    
        }else if(table_name=='products'){

          $.when(
            ajax_get_col(table_name+'_join'),
            ajax_get_col(table_name),

            ajax_get_col('category'),
            ajax_select_from_table('category'),

            ajax_get_col('tax'),
            ajax_select_from_table('tax'),

            ajax_get_col('round_type'),
            ajax_select_from_table('round_type'),

          ).done(function(label,col,category_cols,category_rows,tax_cols,tax_rows,round_cols,round_rows){

            var mode='insert';

            var category=new Array();
            
            category=getArrayFromRows({
              array:category,
              rows:category_rows,
              cols:category_cols
            });
  
            var tax=new Array();
            
            tax=getArrayFromRows({
              array:tax,
              rows:tax_rows,
              cols:tax_cols
            });
  
            var round=new Array();
  
            round=getArrayFromRows({
              array:round,
              rows:round_rows,
              cols:round_cols
            });
  
            create_products_input_form({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              category:category,
              tax:tax,
              round:round,
              mode:mode,
            })

            select_from_table(parent_tag_str,table_name);

          });

        }else if(table_name=='calendar'){

          $.when(    
            ajax_get_col(table_name+'_join'),
            ajax_get_col(table_name),

            ajax_get_col('youbi'),
            ajax_select_from_table('youbi'),

        
          ).done(function(label,col,youbi_col,youbi_row){

            var ymd=document.getElementById(table_name+1).value;
            console.log('ymd:'+ymd);
            var tmp=new Array();
            tmp=ymd.split('-');

            var year=parseInt(tmp[0]);
            var month=parseInt(remove_zero(tmp[1]))-1;

            var youbi=new Array();
            
            youbi=getArrayFromRows({
              array:youbi,
              cols:youbi_col,
              rows:youbi_row
            });

            create_calendar({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              youbi:youbi,
              year:year,
              month:month
            });
    
            create_table({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              row:results
            });

            
          });

        }

        var status=document.getElementById(parent_tag_str+'_status');
        status.innerText='修正が完了しました。';
  
        $('#'+parent_tag_str+'_status').show(1000,function(){
          $('#'+parent_tag_str+'_status').hide(1500);
        });
  

      });

}