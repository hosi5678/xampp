function insert_table(event){

  var col=event.target.col;
  var prev=event.target.prev;
  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;
  var label=event.target.label;

  console.log('-----in insert table-----');
  console.log('table name:'+table_name);
  console.log('prev:'+prev);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('col:'+col); // 10
  console.log('label is:');
  console.log(label);

  var params=new Array();

  var query_columns=new Array();

  for(var i=0;i<col.length;i++){
    if(col[i]=='id') continue;
      query_columns.push(col[i]);
  }

  console.log('query_columns:'+query_columns);
  console.log('query columns length:'+query_columns.length);

  var message=document.getElementById(parent_tag_str+'_message');

  while(message.firstChild){
    message.removeChild(message.firstChild);
  }

  var str;

  for(var i=0;i<label.length;i++){

    if((label[i]=='id')||(label[i]=='備考')) continue;

    if(
          (label[i]=='姓')||
          (label[i]=='名')||
          (label[i]=='商品名')||
          (label[i]=='顧客名')||
          (label[i]=='販売場所')||
          (label[i]=='販売日')
       
       ){

        str=document.getElementById(parent_tag_str+i).value;

      // 悪意がある場合
      str=reject_str(str);

      if(str===1){
        return false;
      }

      // 名前が空欄のとき
      if(str==''){
        var p=document.createElement('p');
        p.classList.add('message');
        p.innerText=label[i]+'を入力してください。'
        message.appendChild(p);

        return false;
      }

      params.push('"'+str+'"');

    }else{
      var str=document.getElementById(parent_tag_str+i).value;
      params.push(str);
    }

  }

  var bikou;

  if(table_name=='members'){
    bikou=document.form_members_insert.bikou.value;
  }else if(table_name='products'){
    bikou=document.form_products_insert.bikou.value;
  }

  bikou=reject_str(bikou);

  console.log(bikou);

  if(bikou===1){
    return false;
  }

  params.push('"'+bikou+'"');

  console.log('params are:');
  console.log(params);

  var query='insert into '+table_name+'(';
  
  for(var i=0;i<query_columns.length;i++){
      query+=query_columns[i];
        if(i!=query_columns.length-1) query+=',';
  }

  query+=') values(';

  for(var i=0;i<query_columns.length;i++){
    query+=params[i];
       if(i!=query_columns.length-1) query+=',';
  }

  query+=');';

  console.log('query:'+query);

  $.when(
    ajax_get_label(table_name),
    ajax_get_col(table_name),
    ajax_stmt_exec(table_name,query,'assoc')

  ).done(function(label,col,row){

    if(table_name=='members'){
      create_members_input_form(parent_tag_str,table_name);
    }else if(table_name=='products'){
      create_products_input_form(parent_tag_str,table_name);
    }

     create_table(parent_tag_str,table_name,label,col,row,"select")

  });

}