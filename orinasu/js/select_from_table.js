function select_from_table(parent_tag_str,table_name){

  // var parent_tag=document.getElementById(parent_tag_str);
  console.log('-----in select from table-----');
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('table_name:'+table_name);

  var table_name_tmp=table_name+'_join';

  $.when(

    // ajaxは単体で使わない。whenと使う
    ajax_stmt_exec(table_name_tmp,"select * from "+table_name_tmp+" limit 0;",'column'),
    ajax_stmt_exec(table_name_tmp,'select * from '+table_name_tmp+';','assoc')

    ).done(function(col,row){

    create_table(parent_tag_str,col,row,table_name);

  });

}