function delete_table(event){

  var id=event.target.id;
  var table_name=event.target.table_name;

  var query='delete from '+table_name+' where id='+id+';';

  // console.log(query);

  ajax_stmt_exec(table_name,query,'assoc');
  select_from_table("select",table_name);

}