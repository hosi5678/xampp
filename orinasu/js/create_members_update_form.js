function create_members_update_form(event){

  console.log('----- in create members update form: -----');

  parent_tag_str=event.target.parent_tag_str;
  table_name=event.target.table_name;
  id=event.target.id;
  prev=event.target.prev;

  console.log('parent tag str:'+parent_tag_str);
  console.log('table_name:'+table_name);
  console.log('id:'+id);
  console.log('prev:'+prev);

  var tds=$(this).closest('tr').children();

  var tds_val=new Array();

  for(var i=0;i<tds.length;i++){
    tds_val.push(tds[i].innerText);
  }

  console.log('tds val:');
  console.log(tds_val);

   $.when(

    ajax_stmt_exec(table_name+'_join',"select * from "+table_name+" limit 0;",'column'),
    ajax_stmt_exec(table_name,"select * from "+table_name+" limit 0;",'column'),
    ajax_stmt_exec('riyou_keitai',"select * from "+table_name+" limit 0;",'column'),
    ajax_stmt_exec('riyou_keitai','select * from riyou_keitai;','assoc')

    ).done(function(label,member_col,riyou_col,riyou_row){

      console.log('in create members update form:');

      console.log('label:');
      console.log(label);
      console.log('member_col:');
      console.log(member_col);
      console.log('tds_val:');
      console.log(tds_val);

      var p=document.getElementById(parent_tag_str+'_title');
      p.innerText='メンバー情報の修正';
 
      var parent_tag=document.getElementById(parent_tag_str+'_params');

    // 画面の更新
    while(parent_tag.firstChild){
      parent_tag.removeChild(parent_tag.firstChild);
    }

    // riyou情報の作成
    var riyou=new Array();

    for(var j=0;j<riyou_row.length;j++){
        for(var i=0;i<riyou_col.length;i++){
            if(riyou_col[i]=='id') continue; // idはskip
            riyou.push(riyou_row[j][riyou_col[i]]);
        }
    }

    console.log('riyou is:');
    console.log(riyou);
    // formの作成
    var form=document.createElement('form');
    form.name='form1';

    var table=document.createElement('table');
    var thead=document.createElement('thead');
    var tbody=document.createElement('tbody');

    var tr=document.createElement('tr');

    var id;

    for(var i=0;i<label.length;i++){
      
      if(label[i]=='id'){
        id=tds_val[i];
        continue;
      } 

      if(label[i]=='姓'||label[i]=='名'){
        var th=document.createElement('th');

          th.innerText=label[i];
          thead.appendChild(th);
          var td=document.createElement('td');

          var input=document.createElement('input');
          input.type='text';
          input.id=parent_tag_str+i;
          input.value=tds_val[i];

          td.appendChild(input);

          tr.appendChild(td);

      }
    }

    tbody.appendChild(tr);
    
    table.appendChild(thead);
    table.appendChild(tbody);

    form.appendChild(table);
    parent_tag.appendChild(form);

    var table=document.createElement('table');
    var thead=document.createElement('thead');
    var tbody=document.createElement('tbody');
    var tr=document.createElement('tr');

    for(var i=0;i<label.length;i++){
      
        if(label[i]=='id') continue;
        if(label[i]=='姓'||label[i]=='名') continue;
        // if(label[i]=='日') continue;
        if(label[i]=='備考') continue;

        var th=document.createElement('th');
        
        if(label[i]=='土'){
          th.classList.add('td-sat');
        }
        
        th.innerText=label[i];
        thead.appendChild(th);
        
        var td=document.createElement('td');

        if(label[i]=='日'){
          th.classList.add('td-hide');
          td.classList.add('td-hide');
        }

        var select=document.createElement('select');
        select.id=parent_tag_str+i;

        for(var k=0;k<riyou.length;k++){
          if((label[i]=='土')&&((riyou[k]=='終日')||(riyou[k]=='午後'))) continue;

          var option=document.createElement('option');

          if(label[i]=='日'){
            if(riyou[k]=tds_val[i]){
              option.innerText=riyou[k];
              option.value=k;
              select.appendChild(option);

              break;
            }
          }
  
          if(riyou[k]==tds_val[i]){
            option.selected=true;
          }

            option.innerText=riyou[k];
            option.value=k;

            select.appendChild(option);
  
          }
          
          td.appendChild(select);      
          tr.appendChild(td)

    }

    tbody.appendChild(tr);

    table.appendChild(thead);
    table.appendChild(tbody);

    form.appendChild(table);
    parent_tag.appendChild(form);

    document.createElement('p');
    p.innerText='備考欄';

    form.appendChild(p);

    for(var i=0;i<label.length;i++){
      if(label[i]=='備考'){
          var textarea=document.createElement('textarea');
          textarea.name='bikou';
          textarea.rows=5;
          textarea.cols=80;

          textarea.value=tds_val[i];
      }
    }

    form.appendChild(textarea);
    parent_tag.appendChild(form);

    var a=document.createElement("a");

    a.style.display='block';

    a.href='#'+parent_tag_str;
    a.innerText='修正する';
    a.addEventListener('click',update_table);

    a.table_name=table_name;
    a.parent_tag_str=parent_tag_str;
    a.col=member_col;
    a.label=label;
    a.prev='create_members_input_form';
    a.id=id;

    form.appendChild(a);
    parent_tag.appendChild(form);

  });

}