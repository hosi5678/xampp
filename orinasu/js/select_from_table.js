function select_from_table(parent_tag_str,table_name,riyou){

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

      console.log('----- select from table(after ajax) ----- ');
          
      create_table({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
        label:label,
        col:col,
        row:row,
        riyou:riyou
      });

    });

}