'use strict';

function create_exec({
  parent_tag_str,
  sub_tag_str,
  table_name,
  class_str,
  mode,
  label,
  col,
  id,
  youbi
}){

  var innerText='';

  var exec=childNodeClear(parent_tag_str+sub_tag_str);

  var a=document.createElement('a');

  a.parent_tag_str=parent_tag_str;
  a.table_name=table_name;
  a.label=label;
  a.col=col;

  a.classList.add(class_str);

  if(table_name=='calendar'){

    if(mode=='update'){
      innerText='メモを修正する';
      a.innerText=innerText;
      a.addEventListener('click',update_table);
      a.id=id;

    }else if(mode=='insert'){
      innerText='メモを記入する';
      a.innerText=innerText;
      a.addEventListener('click',insert_table);
      a.youbi=youbi;

    }
  }

  exec.appendChild(a);

  return exec;

    // var exec=childNodeClear(parent_tag_str+'_exec');
    // var a=document.createElement('a');
    // a.innerText='メモを修正する';
    // a.classList.add('a-mod');
    // a.addEventListener('click',update_table);
    // a.id='"'+td.id+'"';
    // a.parent_tag_str=parent_tag_str;
    // a.table_name=table_name;
    // a.col=col;
    // a.label=label;
              
    // exec.appendChild(a);

    // var exec=childNodeClear(parent_tag_str+'_exec');
    // var a=document.createElement('a');
    // a.innerText='メモを記入する';
    // a.classList.add('a-insert');

    // a.addEventListener('click',insert_table);

    // a.parent_tag_str=parent_tag_str;
    // a.table_name=table_name;
    // a.label=label;
    // a.col=col;
    // a.youbi=youbi;
    // a.mode='insert';


}