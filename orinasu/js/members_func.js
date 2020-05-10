function members_func(){

  var parent_tag_str='members';
  var table_name='members';

  var tmp = document.getElementById(parent_tag_str).style.visibility;

  tmp = (tmp == "visible") ? "hidden" : "visible";
  
  if(tmp=='visible'){

    create_members_input_form(parent_tag_str,parent_tag_str);
    select_from_table(parent_tag_str,table_name);
    document.getElementById(parent_tag_str+"_mark").innerText='利用者の登録・削除▲';

  }else{
    document.getElementById(parent_tag_str+"_mark").innerText='利用者の登録・削除▼';
  }

  document.getElementById(parent_tag_str).style.visibility = tmp;

}