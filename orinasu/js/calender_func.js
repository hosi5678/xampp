function calender_func(){

    var parent_tag_str='calendar';
    var table_name='calendar';
  
    var tmp = document.getElementById(parent_tag_str).style.visibility;
  
    tmp = (tmp == "visible") ? "hidden" : "visible";
    
    if(tmp=='visible'){
  
        $.when(
            // ajaxは単体で使わない。whenと使う
            ajax_get_col("youbi"),
            ajax_select_from_table("youbi"),
        
        ).done(function(youbi_col,youbi_row){
              
            var youbi=new Array();
	 
						youbi=getArrayFromRows({
							array:youbi,
							cols:youbi_col,
							rows:youbi_row
						});	

            // for(var j=0;j<youbi_row.length;j++){
            //     for(var i=0;i<youbi_col.length;i++){
            //         if(youbi_col[i]=='id') continue;
            //           youbi.push(youbi_row[j][youbi_col[i]]);
            //     }
            // }
     
            console.log('--- youbi ---');
            console.log(youbi);
                       
            create_calendar_input_form(parent_tag_str,table_name,youbi);
        
        });
        

    //   select_from_table(parent_tag_str,table_name);

      document.getElementById(parent_tag_str+"_mark").innerText='カレンダー▲';
      document.getElementById(parent_tag_str).style.height='auto';

    }else{
      document.getElementById(parent_tag_str+"_mark").innerText='カレンダー▼';
      document.getElementById(parent_tag_str).style.height=0;
    }
  
    document.getElementById(parent_tag_str).style.visibility = tmp;

    
}