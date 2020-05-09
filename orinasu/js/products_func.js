function products_func(){

    var parent_tag_str='products';
    var table_name='products';
  
    var tmp = document.getElementById(parent_tag_str).style.visibility;
  
    tmp = (tmp == "visible") ? "hidden" : "visible";
    
    if(tmp=='visible'){
  
      create_products_input_form(parent_tag_str,parent_tag_str);
 //     select_from_table(parent_tag_str,table_name);

      document.getElementById(parent_tag_str+"_mark").innerText='販売記録の登録・削除▲';
  
    }else{
      document.getElementById(parent_tag_str+"_mark").innerText='販売記録の登録・削除▼';
  
    }
  
    document.getElementById(parent_tag_str).style.visibility = tmp;
  
  }