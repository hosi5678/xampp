function members_func(){

  'use strict';

  var parent_tag_str='members';
  var table_name='members';

  var tmp = document.getElementById(parent_tag_str).style.visibility;

  tmp = (tmp == "visible") ? "hidden" : "visible";

  // $('#'+parent_tag_str).slideToggle();

  if(tmp=='visible'){

    $.when(
      ajax_get_col(table_name+'_join'),
      ajax_get_col(table_name),
      ajax_get_col('riyou_keitai'),
      ajax_select_from_table('riyou_keitai'),

    ).done(function(label,col,riyou_col,riyou_row){

        var mode='insert';

        var riyou=new Array();
        
        riyou=getArrayFromRows({
          array:riyou,
          rows:riyou_row,
          cols:riyou_col
        });

        create_members_input_form({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          riyou:riyou,
          mode:mode
        });

        select_from_table(parent_tag_str,table_name);

        document.getElementById(parent_tag_str+"_mark").innerText='利用者の登録・削除/検索▲';
        
    });

  }else{
        document.getElementById(parent_tag_str+"_mark").innerText='利用者の登録・削除/検索▼';
        document.getElementById(parent_tag_str).style.height='0px';

  }

        document.getElementById(parent_tag_str).style.visibility = tmp;

}