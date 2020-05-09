function create_members_update_form(event){

  console.log('in create members update form:');

  parent_tag_str=event.target.parent_tag_str;
  table_name=event.target.table_name;
  id=event.target.id;
  prev=event.target.prev;

  console.log('parent tag str:'+parent_tag_str);
  console.log('table_name:'+table_name);
  console.log('id:'+id);
  console.log('prev:'+prev);

  // var parent_tag=document.getElementById(parent_tag_str+'_params');


  // while(parent_tag.firstChild){
  //   parent_tag.removeChild(parent_tag.firstChild);
  // }

  var tds=$(this).closest('tr').children();

  var tds_val=new Array();

  for(var i=0;i<tds.length;i++){
    tds_val.push(tds[i].innerText);
  }

  // console.log(tds_val);

   $.when(

    ajax_stmt_exec(table_name+'_join',"select * from "+table_name+" limit 0;",'column'),
    ajax_stmt_exec(table_name,"select * from "+table_name+" limit 0;",'column'),
    ajax_stmt_exec('riyou_keitai',"select * from "+table_name+" limit 0;",'column'),
    ajax_stmt_exec('riyou_keitai','select * from riyou_keitai;','assoc')

    ).done(function(label,member_col,riyou_col,riyou_row){

      var p=document.getElementById(parent_tag_str+'_title');
      p.innerText='修正';
 
      var parent_tag=document.getElementById(parent_tag_str+'_params');

    // 画面の更新
    while(parent_tag.firstChild){
      parent_tag.removeChild(parent_tag.firstChild);
    }

    var form=document.createElement('form');

    var table=document.createElement('table');
    var thead=document.createElement('thead');
    var tbody=document.createElement('tbody');

    var tr=document.createElement('tr');

    var ids=new Array();

    for(var i=1;i<3;i++){
      var th=document.createElement('th');
        th.innerText=label[i];
        thead.appendChild(th);

        var td=document.createElement('td');
        var input=document.createElement('input');
        input.type='text';
        input.placeholder=label[i];
        input.id=table_name+i;

        input.value=tds_val[i];

        ids.push(i);
        td.appendChild(input);
        tr.appendChild(td);
        tbody.appendChild(tr);

    }

    table.appendChild(thead);
    table.appendChild(tbody);

    var riyou=new Array();

    for(var j=0;j<riyou_row.length;j++){
        for(var i=0;i<riyou_col.length;i++){
            if(i==0) continue;
            // console.log(riyou_row[j][riyou_col[i]]);
            riyou.push(riyou_row[j][riyou_col[i]]);
        }
    }

    form.appendChild(table);
    parent_tag.appendChild(form);

    var table=document.createElement('table');
    var thead=document.createElement('thead');
    var tbody=document.createElement('tbody');

    var tr=document.createElement('tr');

    for(var j=3;j<label.length;j++){
      // if(j==3) continue; // 日曜日はスキップ
      var th=document.createElement('th');
      var td=document.createElement('td');

      if(label[j]=='日'){
        th.classList.add('td-hide');
        td.classList.add('td-hide');
      }

      th.innerText=label[j];
      thead.appendChild(th);

      var select=document.createElement('select');
      select.id=table_name+j;

        for(var i=0;i<riyou.length;i++){
          if((j==label.length-1)&&((i==1)||i==3)) continue; // 土曜日の終日と午後はスキップ

          var option=document.createElement('option');

          if(riyou[i]==tds_val[j]){
            option.selected=true;
            } 

            option.innerText=riyou[i];
            option.value=i;

            select.appendChild(option);

          }
          
        td.appendChild(select);      
        tr.appendChild(td);

        tbody.appendChild(tr);

    }

    var button=document.createElement("button");

    button.innerText='修正する';
    button.addEventListener('click',update_table);

    button.col=member_col;
    button.table_name=table_name;
    button.parent_tag_str=parent_tag_str;
    button.id=id;

    table.appendChild(thead);
    table.appendChild(tbody);
    form.appendChild(table);
    form.appendChild(button);
    parent_tag.appendChild(form);

  });

}