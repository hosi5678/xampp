function members_func(){

  var parent_tag_str='members';
  var table_name='members';

  var tmp = document.getElementById(parent_tag_str).style.visibility;

  tmp = (tmp == "visible") ? "hidden" : "visible";
      // $('#'+parent_tag_str).slideToggle();
      // var tmp = document.getElementById(parent_tag_str).style.visibility;

  
  if(tmp=='visible'){

    create_members_input_form(parent_tag_str,table_name);
    select_from_table(parent_tag_str,table_name);
    document.getElementById(parent_tag_str+"_mark").innerText='利用者の登録・削除▲';
    document.getElementById(parent_tag_str).style.height='auto';

  }else{
    document.getElementById(parent_tag_str+"_mark").innerText='利用者の登録・削除▼';
    // document.getElementById(parent_tag_str).style.height='0px';
    // $('#'+parent_tag_str).slideToggle();
  }

  document.getElementById(parent_tag_str).style.visibility = tmp;


}