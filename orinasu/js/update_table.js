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

  // var message=childNodeClear(parent_tag_str+'_message');

  // var message=document.getElementById(parent_tag_str+'_message');

  // while(message.firstChild){
  //   message.removeChild(message.firstChild);
  // }

  // var bikou;

  // for(var i=0;i<label.length;i++){
  //   if(label[i]=='id') continue;
    
  //   // 文字列の取得
  //   if(
  //       (label[i]=='姓')||
  //       (label[i]=='名')||
  //       (label[i]=='商品名')||
  //       (label[i]=='販売日')||
  //       (label[i]=='顧客名')||
  //       (label[i]=='販売場所')||
  //       (label[i]=='備考')
  //     ){
  //     var str=document.getElementById(parent_tag_str+i).value;
 
  //     // injectionは認めない
  //     str=reject_str(str);

  //     if(str==1){
  //       return false;
  //     }

  //      // 空欄のとき,ただし、名と備考は空欄でよい。
  //     if(str==''&&((label[i]!='名')||(label[i]!='備考')||(label[i]!='顧客名'))){
  //     // if(str==''&&((label[i]!='名')||(label[i]!='備考'))){
  //       var p=document.createElement('p');
  //         p.classList.add('message');
  //         p.innerText=label[i]+'を入力してください。'
  //         message.appendChild(p);

  //        return false;
  //     }
  //       update_val.push('"'+str+'"');

  //     }
  //     // else if(label[i]=='備考'){

  //     //   if(table_name=='members'){
  //     //     bikou=document.form_members_insert.bikou.value;
  //     //   }else if(table_name='products'){
  //     //     bikou=document.form_products_insert.bikou.value;
  //     //   }

  //     //   bikou=reject_str(bikou);
  //     //   console.log('bikou:'+bikou);
      
  //     //   if(bikou===1){
  //     //     return false;
  //     //   }
      
  //     //   update_val.push('"'+bikou+'"');
  //     // }
  //     // 数値の取得
  //     else{
  //       update_val.push(document.getElementById(parent_tag_str+i).value);
  //     }

  // }

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

          ).done(function(label,col,riyou_col,riyou_row){

            var riyou=new Array();

            riyou=getArrayFromRows({
              array:riyou,
              cols:riyou_col,
              rows:riyou_row
            });
    
            create_members_input_form({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              riyou:riyou
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

          // create_products_input_form(parent_tag_str,table_name);
          // select_from_table(parent_tag_str,table_name);
        }else if(table_name=='calendar'){

          $.when(    
            ajax_get_col(table_name+'_join'),
            ajax_get_col(table_name),

            ajax_get_col('youbi'),
            ajax_select_from_table('youbi'),

        
          ).done(function(label,col,youbi_col,youbi_row){

            var youbi=new Array();
            
            youbi=getArrayFromRows({
              array:youbi,
              cols:youbi_col,
              rows:youbi_row
            });

            create_calendar_input_form({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              youbi:youbi
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

      });

}