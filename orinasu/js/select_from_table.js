function select_from_table(parent_tag_str,table_name){

  // var parent_tag=document.getElementById(parent_tag_str);
  console.log('-----in select from table-----');
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('table_name:'+table_name);

  var table_name_tmp=table_name+'_join';

  var column_query;
  var query;

  column_query='select * from '+table_name_tmp+' limit 0;';
  query='select * from '+table_name+' order by id;';

  $.when(

    // ajaxは単体で使わない。whenと使う
    ajax_stmt_exec(table_name_tmp,column_query,'column'),
    ajax_stmt_exec(table_name_tmp,query,'assoc')

    // ajax_stmt_exec(table_name_tmp,'select * from '+table_name_tmp+';','assoc')

    ).done(function(col,row){

    create_table(parent_tag_str,col,row,table_name);

  });

}