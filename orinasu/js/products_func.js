function products_func(){

  'use strict';

    var parent_tag_str='products';
    var table_name='products';
  
    var tmp = document.getElementById(parent_tag_str).style.visibility;
  
    tmp = (tmp == "visible") ? "hidden" : "visible";
    
    if(tmp=='visible'){

      $.when(
        ajax_get_col(table_name+'_join'),
        ajax_get_col(table_name),

        ajax_get_col('category'),
        ajax_select_from_table('category'),

        ajax_get_col('tax'),
        ajax_select_from_table('tax'),

        ajax_get_col('round_type'),
        ajax_select_from_table('round_type'),

      ).done(function(label,cols,category_cols,category_rows,tax_cols,tax_rows,round_cols,round_rows){
  
        var mode='insert';

          var category=new Array();
          
          category=getArrayFromRows({
            array:category,
            rows:category_rows,
            cols:category_cols
          });

          var tax=new Array();
          
          tax=getArrayFromRows({
            array:tax,
            rows:tax_rows,
            cols:tax_cols
          });

          var round=new Array();

          round=getArrayFromRows({
            array:round,
            rows:round_rows,
            cols:round_cols
          });

          create_products_input_form({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
            label:label,
            col:cols,
            category:category,
            tax:tax,
            round:round,
            mode:mode
          });
  
          select_from_table(parent_tag_str,table_name);
  
          document.getElementById(parent_tag_str+"_mark").innerText='売上データの登録・削除／検索▲';
          document.getElementById(parent_tag_str).style.height='auto';

      });
  
    }else{
      document.getElementById(parent_tag_str+"_mark").innerText='売上データの登録・削除／検索▼';
      document.getElementById(parent_tag_str).style.height='0px';
    }
  
      document.getElementById(parent_tag_str).style.visibility = tmp;
    
  }