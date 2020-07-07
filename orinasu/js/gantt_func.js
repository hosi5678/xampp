'use strict';
function gantt_func(){

  const parent_tag_str='gantt';
  const table_name='gantt';

  var tmp = document.getElementById(parent_tag_str).style.visibility;

  tmp = (tmp == "visible") ? "hidden" : "visible";
  
  if(tmp=='visible'){

    $.when(

					ajax_get_col(table_name+'_join'),
					ajax_get_col(table_name),


      ajax_get_col('youbi'),
      ajax_select_from_table('youbi'),

      // ajax_get_col('tax'),
      // ajax_select_from_table('tax'),

      // ajax_get_col('round_type'),
      // ajax_select_from_table('round_type'),

    ).done(function(label,col,youbi_cols,youbi_rows){

      // var mode='insert';
        
       	const youbi=getArrayFromRows({
          rows:youbi_rows,
          cols:youbi_cols
        });

								console.log(youbi);
															
        create_gantt_input_form({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
										youbi:youbi,
        });

        document.getElementById(parent_tag_str+"_mark").innerText='作業の登録▲';

    });

  }else{

      document.getElementById(parent_tag_str+"_mark").innerText='作業の登録▼';

      // childNodeClear(parent_tag_str+'_message');
      // childNodeClear(parent_tag_str+'_status');
						childNodeClear(parent_tag_str+'_params');
						childNodeClear(parent_tag_str+'_hyou');

      // childNodeClear(parent_tag_str+'_exec');
      // childNodeClear(parent_tag_str+'_results');

  }

    document.getElementById(parent_tag_str).style.visibility = tmp;


}