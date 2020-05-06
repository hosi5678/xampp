function select_from_table(parent_tag_str,table_name){

  // var parent_tag=document.getElementById(parent_tag_str);

  var table_name_tmp=table_name+'_jpn';

  $.when(

    ajax_stmt_exec(table_name_tmp,"select * from "+table_name_tmp+" limit 0;",'column'),
    ajax_stmt_exec(table_name_tmp,'select * from '+table_name_tmp+';','assoc')

    ).done(function(col,row){

    var parent_tag=document.getElementById(parent_tag_str);

    while(parent_tag.firstChild){
      parent_tag.removeChild(parent_tag.firstChild);
    }

    create_table(parent_tag_str,col,row,table_name);

  });

}