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
    ajax_get_label(table_name),
    ajax_get_col(table_name),
    ajax_stmt_exec(table_name_tmp,query,'assoc')

    // ajax_stmt_exec(table_name_tmp,'select * from '+table_name_tmp+';','assoc')

    ).done(function(label,col,row){

      var mode='select';

      console.log('--- after ajax select from table --- ');
      console.log('label is:');
      console.log(label);
      console.log('col is:');
      console.log(col);
      console.log('row is:');
      console.log(row);
          

      create_table(parent_tag_str,table_name,label,col,row,mode);

    });

}