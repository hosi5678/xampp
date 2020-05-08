function insert_table(event){

  var col=event.target.col;
  var prev=event.target.prev;
  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;

  // col.shift(); // idは削除

  console.log('-----in insert table-----');
  console.log('table name:'+table_name);
  console.log('prev:'+prev);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('col:'+col);

  var params=new Array();

  var query_columns=new Array();

  for(var i=0;i<col.length;i++){
    if(col[i]=='id') continue;
      query_columns.push(col[i]);
  }

  console.log('query_columns:'+query_columns);

  for(var i=0;i<query_columns.length;i++){

    var str=document.getElementById(table_name+(i+1)).value;

    if(query_columns[i]=='myouji'||query_columns[i]=='namae'){

      // 悪意がある場合
      str=reject_str(str);

      if(str===1){
        return false;
      }

      // 名前が空欄のとき
      if(str==''){
        return false;
      }

      params.push('"'+str+'"');

    }else{
      params.push(str);
    }

    if(query_columns[i]=='sun') params[i]=0;

  }

  var query='insert into '+table_name+'(';
  
  for(var i=0;i<query_columns.length;i++){
      // if(col[i]=='id') continue;

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