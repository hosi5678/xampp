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
  
      ).done(function(){
  
          var mode='insert';
    
          document.getElementById(parent_tag_str+"_mark").innerText='売上グラフの表示▲';

          call_hightchart(parent_tag_str);
          
      });
  
    }else{
        document.getElementById(parent_tag_str+"_mark").innerText='売上グラフの表示▼';
  
        // childNodeClear(parent_tag_str+'_message');
        childNodeClear(parent_tag_str+'_params');
        // childNodeClear(parent_tag_str+'_exec');
        // childNodeClear(parent_tag_str+'_results');
  
    }
  
          document.getElementById(parent_tag_str).style.visibility = tmp;
  
    
}