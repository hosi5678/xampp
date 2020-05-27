'use strict';

function update_table(
  event
  // {
  //     parent_tag_str,
  //     table_name,
  //     label,
  //     col,
  //     id,
  // }
){


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

  var message=document.getElementById(parent_tag_str+'_message');

  while(message.firstChild){
    message.removeChild(message.firstChild);
  }

  var bikou;

  for(var i=0;i<label.length;i++){
    if(label[i]=='id') continue;
    
    // 文字列の取得
    if(
        (label[i]=='姓')||
        (label[i]=='名')||
        (label[i]=='商品名')||
        (label[i]=='販売日')||
        (label[i]=='備考')
      ){
      var str=document.getElementById(parent_tag_str+i).value;
 
      // injectionは認めない
      str=reject_str(str);

      if(str==1){
        return false;
      }

       // 空欄のとき,ただし、名と備考は空欄でよい。
      if(str==''&&((label[i]!='名')||(label[i]!='備考')||(label[i]!='顧客名'))){
      // if(str==''&&((label[i]!='名')||(label[i]!='備考'))){
        var p=document.createElement('p');
          p.classList.add('message');
          p.innerText=label[i]+'を入力してください。'
          message.appendChild(p);

         return false;
      }
        update_val.push('"'+str+'"');

      }
      // else if(label[i]=='備考'){

      //   if(table_name=='members'){
      //     bikou=document.form_members_insert.bikou.value;
      //   }else if(table_name='products'){
      //     bikou=document.form_products_insert.bikou.value;
      //   }

      //   bikou=reject_str(bikou);
      //   console.log('bikou:'+bikou);
      
      //   if(bikou===1){
      //     return false;
      //   }
      
      //   update_val.push('"'+bikou+'"');
      // }
      // 数値の取得
      else{
        update_val.push(document.getElementById(parent_tag_str+i).value);
      }

  }

      var query_label=new Array();

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
          query+=' where id='+id+';';
        }

      }

      // console.log('query:'+query);

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
              riyou:riyou});
    
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
          create_products_input_form(parent_tag_str,table_name);
          select_from_table(parent_tag_str,table_name);
        }
      });

}