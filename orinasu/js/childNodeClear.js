'use strict';

function childNodeClear(parent_tag_str){

  var parent_tag=document.getElementById(parent_tag_str);

  while(parent_tag.firstChild){
    parent_tag.removeChild(parent_tag.firstChild);
  }

  return parent_tag;

}