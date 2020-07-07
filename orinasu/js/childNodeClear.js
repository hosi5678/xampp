'use strict';

function childNodeClear(parent_tag_str){

  const parent_tag=document.getElementById(parent_tag_str);

  // remove:要素まるごと削除
  // empty:要素の中を削除

  $('#'+parent_tag_str).empty();


  // while(parent_tag.firstChild){
  //   parent_tag.removeChild(parent_tag.firstChild);
  // }

  return parent_tag;

}