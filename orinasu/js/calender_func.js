function calender_func(){

    var parent_tag_str='calendar';
    var table_name='calendar';
  
    var tmp = document.getElementById(parent_tag_str).style.visibility;
  
    tmp = (tmp == "visible") ? "hidden" : "visible";
    
    if(tmp=='visible'){
  
        $.when(
            // ajaxは単体で使わない。whenと使う
            ajax_get_col(table_name+'_join'),
            ajax_get_col(table_name),
      
            ajax_get_col("youbi"),
            ajax_select_from_table("youbi"),
        
        ).done(function(label,col,youbi_col,youbi_row){
              
            var youbi=new Array();
   
            youbi=getArrayFromRows({
                array:youbi,
                cols:youbi_col,
                rows:youbi_row
            });
     
            console.log('--- youbi ---');
            console.log(youbi);
                       
            create_calendar_input_form({
                parent_tag_str:parent_tag_str,
                table_name:table_name,
                label:label,
                col:col,
                youbi:youbi
            });
        
        });
        

    //   select_from_table(parent_tag_str,table_name);

      document.getElementById(parent_tag_str+"_mark").innerText='カレンダー▲';
      // document.getElementById(parent_tag_str).style.height='auto';

    }else{
      document.getElementById(parent_tag_str+"_mark").innerText='カレンダー▼';
    //   document.getElementById(parent_tag_str).style.height=0;
				childNodeClear(parent_tag_str+'_hyou');
                childNodeClear(parent_tag_str+'_params');
                childNodeClear(parent_tag_str+'_title');
				childNodeClear(parent_tag_str+'_exec');
				childNodeClear(parent_tag_str+'_like');
				childNodeClear(parent_tag_str+'_results');

    }
  
    document.getElementById(parent_tag_str).style.visibility = tmp;

    
}