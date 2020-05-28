'use strict';

function create_products_delete_confirm(event){

  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;
  var label=event.target.label;

  console.log('----- in create_products_delete_confirm -----');

  console.log('table_name:'+table_name);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('label is:');
  console.log(label);

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

  var name;

  for(var i=0;i<tds.length;i++){
    if(label[i]=='商品名'){
      name=tds[i].innerText;
    }
 
  }

  var p=document.createElement('p');
  p.innerHTML='商品名 : '+name+'の情報を<span class="delete-alert">削除</span>します。よろしいですか？';
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

      create_products_input_form({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
        label:label,
        col:col,
        category:category,
        tax:tax,
        round:round,
        mode:mode,
      });

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
  a.prev='create_products_delete_confirm';
  a.label=label;
  a.parent_tag_str=parent_tag_str;

  parent_tag.appendChild(a);

}