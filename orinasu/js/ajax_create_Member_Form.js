function ajax_create_Member_Form(tag_name_str){

  $.when(
    ajax_select_from_table('youbi','content'),
    ajax_select_from_table('riyou_keitai','content')
  ).done(function(res_1,res_2){
      create_Member_Form(tag_name_str,res_1,res_2);
  });

}
