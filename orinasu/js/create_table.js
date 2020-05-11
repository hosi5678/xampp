function create_table(parent_tag_str,col,row,table_name){

  console.log('----- in create table -----');
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('table_name:'+table_name);
  console.log('col:');
  console.log(col);
  console.log('row:');
  console.log(row);

  var parent_tag=document.getElementById(parent_tag_str+'_results');

  while(parent_tag.firstChild){
    parent_tag.removeChild(parent_tag.firstChild);
  }

  var table=document.createElement('table');
  table.classList.add('table-nth-gray');

  var thead=document.createElement('thead');

  for(var i=0;i<col.length;i++){
    var th=document.createElement('th');
    th.innerText=col[i];
    
    if(col[i]=='id') th.classList.add('td-hide');

    if(col[i]=='土') th.classList.add('td-sat');

    // 日曜日は非表示
    if(col[i]=='日') th.classList.add('td-hide');
    
    thead.appendChild(th);

  }

  table.appendChild(thead);

  tbody=document.createElement('tbody');

  for(var j=0;j<row.length;j++){
      var tr=document.createElement('tr');
      tr.id=table_name+'_id_'+row[j][col[0]];

        for(var i=0;i<col.length;i++){
          var td=document.createElement('td');

          if(col[i]=='id') td.classList.add('td-hide');
          if(col[i]=='日') td.classList.add('td-hide');
          if(col[i]=='備考') td.classList.add('td-bikou');

          td.innerText=row[j][col[i]];
          tr.appendChild(td);
        }

        var td=document.createElement('td');
        td.innerText='修正する';
        td.classList.add('td-mod');

        td.addEventListener('click',create_members_update_form);
        // td.id=row[j][col[0]];
        td.parent_tag_str=parent_tag_str;
        td.table_name=table_name;
        td.prev='create_table';

        tr.appendChild(td);

        var td=document.createElement('td');
        td.innerText='x';

        td.classList.add('td-delete');

        td.addEventListener('click',create_members_delete_confirm);
        td.table_name=table_name;
        td.parent_tag_str=parent_tag_str;
        td.prev='create_table';
        td.col=col;

        tr.appendChild(td);

        tbody.appendChild(tr);
  }

  table.appendChild(tbody);

  parent_tag.appendChild(table);

  // document.getElementById(parent_tag_str).style.visibility = 'visible';
  

}