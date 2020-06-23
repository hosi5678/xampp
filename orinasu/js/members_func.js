'use strict';

function members_func(){

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
      ajax_select_from_table(table_name+'_join'),
      ajax_get_col("youbi"),
      ajax_select_from_table("youbi"),

    ).done(function(label,col,riyou_col,riyou_row,row,youbi_col,youbi_row){

        var mode='insert';

        var riyou=new Array();
        
        riyou=getArrayFromRows({
          array:riyou,
          rows:riyou_row,
          cols:riyou_col
        });

        var youbi=new Array();
   
        youbi=getArrayFromRows({
            array:youbi,
            cols:youbi_col,
            rows:youbi_row
        });
 
        create_members_input_form({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          riyou:riyou,
          youbi:youbi,
          mode:mode
        });

        create_table({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          row:row
        });

        document.getElementById(parent_tag_str+"_mark").innerText='利用者の登録・削除／検索▲';
        
    });

  }else{
      document.getElementById(parent_tag_str+"_mark").innerText='利用者の登録・削除／検索▼';

      childNodeClear(parent_tag_str+'_title');
      childNodeClear(parent_tag_str+'_status');
      childNodeClear(parent_tag_str+'_params');
      childNodeClear(parent_tag_str+'_exec');
      childNodeClear(parent_tag_str+'_results');

  }

  document.getElementById(parent_tag_str).style.visibility = tmp;

}