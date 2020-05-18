function create_table(parent_tag_str,table_name,label,col,row){

  console.log('----- in create table -----');
  
  // console.log('parent_tag_str:'+parent_tag_str);
  // console.log('table_name:'+table_name);
  // console.log('mode:'+mode);

  console.log('label is:');
  console.log(label);
  // console.log('col is:');
  // console.log(col);
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

  var uriage_total=0;

  for(var i=0;i<label.length;i++){
    if(label[i]=='売上額'){
      for(var j=0;j<row.length;j++){
        uriage_total+=parseInt(row[j][label[i]]);
      }
    }
  }

  var p=document.createElement('p');
  p.innerText='売上総額:'+uriage_total+'円';

  parent_tag.appendChild(p);

  // console.log(uriage_total+'円');

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

  table.appendChild(thead);

  tbody=document.createElement('tbody');

  var id;

  for(var j=0;j<row.length;j++){
      var tr=document.createElement('tr');
      tr.id=table_name+'_id_'+row[j]['id'];

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
        }
  
        td.table_name=table_name;
        td.parent_tag_str=parent_tag_str;
        td.prev='create_table';
        td.col=col;
  
        tr.appendChild(td);

        var td=document.createElement('td');
        td.innerText='x';

        td.classList.add('td-delete');

        if(table_name=='members'){
          td.addEventListener('click',create_members_delete_confirm);
        }else if(table_name=='products'){
          td.addEventListener('click',create_products_delete_confirm);
        }

        td.table_name=table_name;
        td.parent_tag_str=parent_tag_str;
        td.prev='create_table';
        td.col=col;
        td.label=label;

        tr.appendChild(td);

      tbody.appendChild(tr);

  }

    // tbody.appendChild(tr);

  // for(var i=0;i<col.length;i++){
  //   var th=document.createElement('th');
  //   th.innerText=col[i];
    
  //   if(col[i]=='id') th.classList.add('td-hide');

  //   if(col[i]=='土') th.classList.add('td-sat');

  //   // 日曜日は非表示
  //   if(col[i]=='日') th.classList.add('td-hide');
    
  //   thead.appendChild(th);

  // }

  // table.appendChild(thead);

  // tbody=document.createElement('tbody');

  // for(var j=0;j<row.length;j++){
  //     var tr=document.createElement('tr');
  //     tr.id=table_name+'_id_'+row[j][col[0]];

  //       for(var i=0;i<col.length;i++){
  //         var td=document.createElement('td');

  //         if(col[i]=='id') td.classList.add('td-hide');
  //         if(col[i]=='日') td.classList.add('td-hide');
  //         if(col[i]=='備考') td.classList.add('td-bikou');

  //         td.innerText=row[j][col[i]];
  //         tr.appendChild(td);
  //       }

  //       var td=document.createElement('td');
  //       td.innerText='修正する';
  //       td.classList.add('td-mod');

  //       if(table_name=='members'){
  //         td.addEventListener('click',create_members_update_form);
  //       }else if(table_name=='products'){
  //         td.addEventListener('click',create_products_update_form);
  //       }

  //       td.parent_tag_str=parent_tag_str;
  //       td.table_name=table_name;
  //       td.prev='create_table';

  //       tr.appendChild(td);

  //       var td=document.createElement('td');
  //       td.innerText='x';

  //       td.classList.add('td-delete');

  //       if(table_name=='members'){
  //         td.addEventListener('click',create_members_delete_confirm);
  //       }else if(table_name=='products'){
  //         td.addEventListener('click',create_products_delete_confirm);
  //       }
  //       td.table_name=table_name;
  //       td.parent_tag_str=parent_tag_str;
  //       td.prev='create_table';
  //       td.col=col;

  //       tr.appendChild(td);

  //       tbody.appendChild(tr);
  // }

  table.appendChild(tbody);

  parent_tag.appendChild(table);

  // document.getElementById(parent_tag_str).style.visibility = 'visible';
  

}