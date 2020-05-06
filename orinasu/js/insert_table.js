function insert_table(event){

  var col=event.target.col;

  col.shift(); // idは削除
  console.log(col);
  console.log(col.length);


  var table_name=event.target.table_name;

  var params=new Array();

  for(var i=0;i<col.length;i++){

    var str=document.getElementById(table_name+(i+1)).value;

    if(col[i]=='myouji'||col[i]=='namae'){

      // 悪意がある場合
      str=reject_str(str);

      if(str===1){
        return false;
      }

      params.push('"'+str+'"');

    }else{
      params.push(str);
    }

    if(col[i]=='sun') params[i]=0;

  }

  var query='insert into '+table_name+'(';
  
  for(var i=0;i<col.length;i++){
      query+=col[i];
        if(i!=col.length-1) query+=',';
  }

  query+=') values(';

  for(var i=0;i<col.length;i++){
    query+=params[i];
       if(i!=col.length-1) query+=',';
  
  }

  query+=');';

  ajax_stmt_exec(table_name,query,'assoc');

}