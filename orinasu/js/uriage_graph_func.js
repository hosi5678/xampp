function uriage_graph_func(){
 
    var parent_tag_str='uriage_graph';
    var table_name='products';
  
    var tmp = document.getElementById(parent_tag_str).style.visibility;
  
    tmp = (tmp == "visible") ? "hidden" : "visible";
  
    // $('#'+parent_tag_str).slideToggle();
  
    if(tmp=='visible'){
  
      $.when(
        // ajax_get_col(table_name+'_join'),
        // ajax_get_col(table_name),
        // ajax_get_col('riyou_keitai'),
        // ajax_select_from_table('riyou_keitai'),

        // 今の所,ajax 通信は必要ないが作っておく。
  
      ).done(function(){
      
          document.getElementById(parent_tag_str+"_mark").innerText='売上グラフの表示▲';

          create_graph_input_form({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
          });

          create_graph({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
          });

          // call_stockChart(parent_tag_str);
          
      });
  
    }else{
        document.getElementById(parent_tag_str+"_mark").innerText='売上グラフの表示▼';
  
        childNodeClear(parent_tag_str+'_params');
				childNodeClear(parent_tag_str+'_container');
								
    }
  
    document.getElementById(parent_tag_str).style.visibility = tmp;
  
}