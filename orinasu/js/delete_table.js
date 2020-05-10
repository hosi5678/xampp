function delete_table(event){

  console.log('----- in delete table -----');

  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;
  var prev=event.target.prev;
  var col=event.target.col;

  var tds=$(this).closest('tr').children();

  console.log(col);

  var id;

  for(var i=0;i<col.length;i++){
    if(col[i]=='id'){
      id=tds[i].innerText;
    }     
  }


  var query='delete from '+table_name+' where id='+id+';';

  console.log('id:'+id);
  console.log('prev:'+prev);
  console.log('qeery:'+query);

  $.when(
      ajax_stmt_exec(table_name,query,'assoc'),
    ).done(function(){
      select_from_table(parent_tag_str,table_name);
  });

}