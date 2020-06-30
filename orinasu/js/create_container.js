'use strict';
function create_container({
  parent_tag_str,
  class_str,
  id,
}){

  const parent_tag=document.getElementById(parent_tag_str);

  const container=document.createElement('div');

  container.classList.add(class_str);

  container.id=id;

  const head=document.createElement('div');

  head.classList.add('head');

  const body=document.createElement('div');

  body.classList.add('body');

  container.appendChild(head);
  container.appendChild(body);

  parent_tag.appendChild(container);

}