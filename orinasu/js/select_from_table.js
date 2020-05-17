function select_from_table(parent_tag_str,table_name){

  // var parent_tag=document.getElementById(parent_tag_str);
  console.log('----- in select from table(before ajax)-----');
  // console.log('parent_tag_str:'+parent_tag_str);
  // console.log('table_name:'+table_name);

  $.when(

    // ajaxは単体で使わない。whenと使う
    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),
    ajax_select_from_table(table_name+'_join')

    ).done(function(label,col,row){

      var mode='select';

      console.log('----- select from table(after ajax) ----- ');
      // console.log('label is:');
      // console.log(label);
      // console.log('col is:');
      // console.log(col);
      // console.log('row is:');
      // console.log(row);
          
      create_table(parent_tag_str,table_name,label,col,row,mode);

    });

}