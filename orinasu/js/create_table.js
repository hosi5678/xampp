  'use strict';

function create_table({parent_tag_str,table_name,label,col,row}){

  console.log('----- in create table -----');
  
  console.log('label is:');
  console.log(label);
  console.log('col is:');
  console.log(col);
  console.log('row is:');
  console.log(row);

  var parent_tag=document.getElementById(parent_tag_str+'_results');

  // 画面の更新
  while(parent_tag.firstChild){
    parent_tag.removeChild(parent_tag.firstChild);
  }

  var p=document.createElement('p');
  p.innerText='テーブル一覧';

  parent_tag.appendChild(p);

  var p=document.createElement('p');
  p.innerText=row.length+'件 見つかりました';

  parent_tag.appendChild(p);

  var uriage_total=0;

  for(var i=0;i<label.length;i++){
    if(label[i]=='売上額'){
      for(var j=0;j<row.length;j++){
        uriage_total+=parseInt(row[j][label[i]]);
      }
    }
  }
  
  if(table_name=='products'){
    var p=document.createElement('p');
    p.innerText='売上総額:'+uriage_total+'円';
  
    parent_tag.appendChild(p);
  
  }

  var table=document.createElement('table');
  table.classList.add('table-nth-gray');

  var thead=document.createElement('thead');

  for(var i=0;i<label.length;i++){
    var th=document.createElement('th');
    th.innerText=label[i];

    if(label[i]=='id') th.classList.add('td-hide');
    if(label[i]=='土') th.classList.add('td-sat');
    if(label[i]=='日') th.classList.add('td-hide');
    if(label[i]=='備考') th.classList.add('td-bikou');

    thead.appendChild(th);

}

// 編集記号の追加
  var th=document.createElement('th');

  var img=document.createElement('img');
  img.src='../images/pencil.jpg';
  img.alt='trash';
  img.classList.add('img');

  th.appendChild(img);

  thead.appendChild(th);

  table.appendChild(thead);

// ゴミ箱記号の追加
  var th=document.createElement('th');

  var img=document.createElement('img');
  img.src='../images/trash.png';
  img.alt='trash';
  img.classList.add('img');

  th.appendChild(img);

  thead.appendChild(th);

  table.appendChild(thead);

  var tbody=document.createElement('tbody');

  for(var j=0;j<row.length;j++){
      var tr=document.createElement('tr');
      tr.id=table_name+row[j]['id'];

        for(var i=0;i<label.length;i++){
          var td=document.createElement('td');

          if(label[i]=='id') td.classList.add('td-hide');
          if(label[i]=='日') td.classList.add('td-hide');
          if(label[i]=='備考') td.classList.add('td-bikou');

          td.innerText=row[j][label[i]];

          tr.appendChild(td);
        }

        var td=document.createElement('td');
        td.innerText='修正する';
        td.classList.add('td-mod');
  
        if(table_name=='members'){
          td.addEventListener('click',create_members_update_form);
        }else if(table_name=='products'){
          td.addEventListener('click',create_products_update_form);
        }else if(table_name=='calendar'){
          td.addEventListener('click',create_calendar_update_form);
        }

        td.parent_tag_str=parent_tag_str;
        td.table_name=table_name;
        
        td.label=label;
        td.col=col;
        td.mode='update';
 
        tr.appendChild(td);

        var td=document.createElement('td');
        td.innerText='x';

        td.classList.add('td-delete');

        if(table_name=='members'){
          td.addEventListener('click',create_members_delete_confirm);
        }else if(table_name=='products'){
          td.addEventListener('click',create_products_delete_confirm);
        }else if(table_name=='calendar'){
          td.addEventListener('click',delete_confirm);
        }

        td.table_name=table_name;
        td.parent_tag_str=parent_tag_str;
        td.label=label;
        td.col=col;

        tr.appendChild(td);

      tbody.appendChild(tr);

  }

  table.appendChild(tbody);

  parent_tag.appendChild(table);  

}