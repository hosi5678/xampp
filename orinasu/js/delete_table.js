function delete_table(event){

  var id=event.target.id;
  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;
  var prev=event.target.prev;

  var query='delete from '+table_name+' where id='+id+';';

  console.log('in delete table:');
  console.log('prev:'+prev);

  $.when(
      ajax_stmt_exec(table_name,query,'assoc'),
    ).done(function(){
      select_from_table(parent_tag_str,table_name);
  });

}