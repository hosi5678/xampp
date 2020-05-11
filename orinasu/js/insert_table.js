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

  for(var i=0;i<col.length;i++){

    if((col[i]=='id')||(col[i]=='bikou')) continue;

    if((col[i]=='myouji')||(col[i]=='namae')){

      var str=document.getElementById('members'+i).value;

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
      var str=document.getElementById('members'+i).value;
      params.push(str);
    }

  }

  console.log('bikou:');

  var bikou=document.form_members_insert.bikou.value;
  bikou=reject_str(bikou);

  console.log(bikou);

  if(bikou===1){
    return false;
  }

  params.push('"'+bikou+'"');

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
    ajax_stmt_exec(table_name,query,'assoc'),
  ).done(function(){
    select_from_table(parent_tag_str,table_name);
  });

}