function insert_table({parent_tag_str,table_name,label,col,riyou}){

  // var col=event.target.col;
  // var prev=event.target.prev;
  // var table_name=event.target.table_name;
  // var parent_tag_str=event.target.parent_tag_str;
  // var label=event.target.label;
  // var riyou=event.target.riyou;

  console.log('-----in insert table-----');
  console.log('table name:'+table_name);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('col:'+col); // 10
  console.log('label is:');
  console.log(label);
  console.log('riyou is:');
  console.log(riyou);
 
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

      // 悪意がある場合(SQL injection)
      str=reject_str(str);

      if(str===1){
        return false;
      }

      // 名前が空欄のとき // ただし、顧客名は空欄でよい。
      if((str=='')&&(label[i]!='顧客名')){
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

    if(table_name=='members'){

      $.when(
        ajax_stmt_exec(table_name,query),
      ).done(function(results){

        var mode='insert';

        var riyou=new Array();
        // riyou=getArrayFromRows(riyou,riyou_col,riyou_row);

        create_members_input_form({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          riyou:riyou,
          mode:mode,
        });
 
        create_table({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,col:col,
          riyou:riyou,
          row:results
        });

      });

    }else if(table_name=='products'){
      create_products_input_form(parent_tag_str,table_name);
    }



}