function products_func(){

    var parent_tag_str='products';
    var table_name='products';

    var parent_tag=document.getElementById(parent_tag_str);
  
    var tmp = document.getElementById(parent_tag_str).style.visibility;
  
    tmp = (tmp == "visible") ? "hidden" : "visible";
    
    if(tmp=='visible'){
  
      create_products_input_form(parent_tag_str,table_name);
      select_from_table(parent_tag_str,table_name);

      parent_tag.classList.add('block'); 

      document.getElementById(parent_tag_str+"_mark").innerText='販売データの登録・削除▲';
      document.getElementById(parent_tag_str).style.height='auto';

    }else{
      document.getElementById(parent_tag_str+"_mark").innerText='販売データの登録・削除▼';
      
      parent_tag.classList.add('hide');

      document.getElementById(parent_tag_str).style.height='0px';

    }
  
    document.getElementById(parent_tag_str).style.visibility = tmp;
    // $('#'+parent_tag_str).slideToggle();
    // document.getElementById(parent_tag_str).style.marginBottom = '10px';

  
  }