function create_members_delete_confirm(event){

  'use strict';

  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;
  var col=event.target.col;
  var label=event.target.label;

  console.log('----- in create members delete confirmation -----');

  console.log('table_name:'+table_name);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('col is:');
  console.log(col);

    // 画面の更新
  var parent_tag=document.getElementById(parent_tag_str+'_params');

  while(parent_tag.firstChild){
    parent_tag.removeChild(parent_tag.firstChild);
  }

  var parent_tag=document.getElementById(parent_tag_str+'_results');

  while(parent_tag.firstChild){
    parent_tag.removeChild(parent_tag.firstChild);
  }

  var exec=document.getElementById(parent_tag_str+'_exec');

  // 画面の更新
  while(exec.firstChild){
    exec.removeChild(exec.firstChild);
  }

  var parent_tag=document.getElementById(parent_tag_str+'_params');

  // idの取得

  var tds=$(this).closest('tr').children();

  var id;

  for(var i=0;i<label.length;i++){
    if(label[i]=='id'){
      id=tds[i].innerText;
    }     
  }

  console.log('id:'+id);

  // 姓名の取得

  var myouji;
  var namae;

  for(var i=0;i<tds.length;i++){
    if(label[i]=='姓'){
      myouji=tds[i].innerText;
    }
    if(label[i]=='名'){
      namae=tds[i].innerText;
    }

  }

  var p=document.createElement('p');
  p.innerHTML=myouji+' '+namae+'さんの情報を<span class="delete-alert">削除</span>します。よろしいですか？';
  p.classList.add('delete-message');

  parent_tag.appendChild(p);

  var a=document.createElement('a');

  a.innerText='キャンセル';
  a.style.display='inline-block';
  a.classList.add('a-cancel');
  a.table_name=table_name;
  a.parent_tag_str=parent_tag_str;

  a.addEventListener('click',function(event){
      parent_tag_str=event.target.parent_tag_str;
      table_name=event.target.table_name;
    create_members_input_form(parent_tag_str,table_name);
    select_from_table(parent_tag_str,table_name);

  });

  parent_tag.appendChild(a);

  var a=document.createElement('a');

  a.innerText='削除する';

  a.addEventListener('click',delete_table);
  a.style.display='inline-block';
  a.classList.add('a-delete');
  a.id=id;
  a.table_name=table_name;
  a.prev='create_members_delete_confirm';
  a.label=label;
  a.parent_tag_str=parent_tag_str;

  parent_tag.appendChild(a);

}