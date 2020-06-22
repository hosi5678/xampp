'use strict';

function delete_table(event){


  // console.log('----- in delete table -----');

  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;
  var id=event.target.id;

  // var tds=$(this).closest('tr').children();
  // console.log('id:'+id);

  var query='delete from '+table_name+' where id='+id+';';

  // console.log('id:'+id);
  // console.log('query:'+query);

  $.when(
      ajax_stmt_exec(table_name,query,'assoc'),
    ).done(function(row){

      var parent_tag=childNodeClear(parent_tag_str+'_params');
  
      var title=document.getElementById(parent_tag_str+'_title');

      var p=document.createElement('p');

      p.classList.add('delete-done');
      p.innerText='削除しました。';

      title.appendChild(p);

      var a=document.createElement('a');

      a.innerText='戻る';
      a.classList.add('a-cancel');

      a.addEventListener('click',function(event){

        if(table_name=='members'){

          $.when(
            ajax_get_col(table_name+'_join'),
            ajax_get_col(table_name),
            ajax_get_col('riyou_keitai'),
            ajax_select_from_table('riyou_keitai'),
            ajax_get_col('youbi'),
            ajax_select_from_table('youbi'),

            ajax_stmt_exec(table_name,query),

          ).done(function(label,col,riyou_col,riyou_row,youbi_col,youbi_row,results){
    
              var riyou=new Array();

              riyou=getArrayFromRows({
                array:riyou,
                cols:riyou_col,
                rows:riyou_row,
              });

              var youbi=new Array();

              youbi=getArrayFromRows({
                array:youbi,
                cols:youbi_col,
                rows:youbi_row,
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

            ajax_stmt_exec(table_name,query),

          ).done(function(label,col,category_col,category_row,tax_col,tax_row,round_col,round_row,results){

            var category=new Array();

            category=getArrayFromRows({
              array:category,
              cols:category_col,
              rows:category_row
            });

            var tax=new Array();

            tax=getArrayFromRows({
              array:tax,
              cols:tax_col,
              rows:tax_row
            });

            var round=new Array();

            round=getArrayFromRows({
              array:round,
              cols:round_col,
              rows:round_row
            });

            create_products_input_form({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              category:category,
              tax:tax,
              round:round,
            });

            create_table({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              row:results
            });


          });
        }else if(table_name=='calendar'){

          $.when(
            ajax_get_col(table_name+'_join'),
            ajax_get_col(table_name),

            ajax_get_col('youbi'),
            ajax_select_from_table('youbi'),
  
          ).done(function(label,col,youbi_cols,youbi_rows){

            var mode='insert';
            var youbi=new Array();
          
            youbi=getArrayFromRows({
              array:youbi,
              rows:youbi_rows,
              cols:youbi_cols
            });

            var curr=new Date();
            var currYear=curr.getFullYear();
            var currMonth=curr.getMonth();
          
            create_calendar({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              year:currYear,
              month:currMonth,
              youbi:youbi,
              label:label,
              col:col
            });

        });

      }
        
      });

      title.appendChild(a);

  });

}