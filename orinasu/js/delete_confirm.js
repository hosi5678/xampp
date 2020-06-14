'use strict';

function delete_confirm(event){

    var table_name=event.target.table_name;
    var parent_tag_str=event.target.parent_tag_str;
    var label=event.target.label;
    var col=event.target.col;
  
    console.log('----- in delete confirmation -----');
  
    console.log('table_name:'+table_name);
    console.log('parent_tag_str:'+parent_tag_str);
  
    console.log('label is:');
    console.log(label);
  
    console.log('col is:');
    console.log(col);
  


    // clildNodeClear(parent_tag_str+'_params');
    // clildNodeClear(parent_tag_str+'_results');
    // clildNodeClear(parent_tag_str+'_exec');

    // var parent_tag=document.getElementById(parent_tag_str+'_params');

    // while(parent_tag.firstChild){
    //     parent_tag.removeChild(parent_tag.firstChild);
    //   }
    childNodeClear(parent_tag_str+'_params');
    clildNodeClear(parent_tag_str+'_results');
    // clildNodeClear(parent_tag_str+'_exec');

    
    // idの取得
  
    var tds=$(this).closest('tr').children();
  
    var id;
  
    for(var i=0;i<label.length;i++){
      if(label[i]=='id'){
        id=tds[i].innerText;
      }     
    }
  
    console.log('id:'+id);
  

}