function select_from_like(event){

  var table_name=event.target.table_name;
  var col=event.target.col;
  var parent_tag_str=event.target.parent_tag_str;
  var label=event.target.label;

  var parent_tag=document.getElementById(parent_tag_str+'_like');
  
  console.log('-----in select from like function -----');
  console.log('parent_tag_str:'+parent_tag_str+'_like');
  console.log('table_name:'+table_name);
  console.log('col:'+col);

  while(parent_tag.firstChild){
    parent_tag.removeChild(parent_tag.firstChild);
  }

  var key;

  for(var i=0;i<label.length;i++){
    if(label[i]=='姓'||label[i]=='商品名'){
        key=document.getElementById(parent_tag_str+i).value;
    }
  }

  $.when(
    // ajaxは単体で使わない。whenと使う
    
    ajax_stmt_exec(table_name+'_join','select * from members;','column'),
    ajax_stmt_exec(table_name,'select * from members;','column'),

    ajax_select_like(table_name,col,key),

    ).done(function(label,col,row){

      console.log('------- like result-------------');
      console.log('label is');
      console.log(label);
      console.log('col is');
      console.log(col);

      console.log('row is');
      console.log(row);
 
      var mode='like';

      create_table(parent_tag_str,table_name,label,col,row,mode);

  });

}