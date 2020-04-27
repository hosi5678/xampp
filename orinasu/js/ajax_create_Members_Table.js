function ajax_create_Members_Table(){

  $.when(
    ajax_select_from_table('youbi','content'),
    ajax_select_from_table('riyou_keitai','content'),
    ajax_select_from_members()
  ).done(function(res_1,res_2,res_3){
      //create_Member_Table(tag_name_str,res_1,res_2);
  });

}