'use strict';

function create_members_input_form(
  {
    parent_tag_str,
    table_name,
    label,
    col,
    riyou,
    mode,
  }
)

{

  console.log('----- in create members input form -----');
  console.log('parent tag str:'+parent_tag_str);
  console.log('table name:'+table_name);
  console.log('label:');
  console.log(label);
  console.log('col:');
  console.log(col);

  console.log('riyou:');
  console.log(riyou);

  console.log('mode:'+mode);

    // 画面の更新
    var parent_tag=document.getElementById(parent_tag_str+'_params');

    while(parent_tag.firstChild){
      parent_tag.removeChild(parent_tag.firstChild);
    }
 
        var form=document.createElement('form');
        form.name='form_'+parent_tag_str+'_insert';

        var p=document.createElement('p');
        p.id='form-'+parent_tag_str+'-title';
        p.innerText='メンバーの新規登録';

        form.appendChild(p);

        var table=document.createElement('table');
        var thead=document.createElement('thead');
        var tbody=document.createElement('tbody');

        var tr=document.createElement('tr');

        for(var i=0;i<label.length;i++){

          if(label[i]=='姓'||label[i]=='名'){

            var th=document.createElement('th');

            th.innerText=label[i];

            thead.appendChild(th);

            var td=document.createElement('td');
            var input=document.createElement('input');

            input.type='text';
            input.placeholder=label[i];
            input.id=parent_tag_str+i;

            if(label[i]=='姓'){
              input.addEventListener('keyup',select_from_like);
              // input.addEventListener('change',select_from_like);
              input.addEventListener('click',select_from_like);

              input.col=col[i];
              input.table_name=table_name;
              input.parent_tag_str=parent_tag_str;
              input.label=label;
              input.id=parent_tag_str+i;
              input.title='姓を入力してください。';

              $('#'+input.id).tooltip({
                show: {
                  effect: "size",
                  delay: 100
                },

                hide: {
                  effect: "size",
                  delay: 100
                }
              });

            }

            td.appendChild(input);
            tr.appendChild(td);
        }
      }

      tbody.appendChild(tr);
      table.appendChild(thead);
      table.appendChild(tbody);

      form.appendChild(table);
      parent_tag.appendChild(form);

      var p=document.createElement('p');
      p.innerText='利用曜日';

      form.appendChild(p);

      var table=document.createElement('table');
      var thead=document.createElement('thead');
      var tbody=document.createElement('tbody');

      var tr=document.createElement('tr');

      for(var i=0;i<label.length;i++){

          if(label[i]=='id') continue;
          if(label[i]=='姓') continue;
          if(label[i]=='名') continue;
          if(label[i]=='備考') continue;

          var th=document.createElement('th');

          th.innerText=label[i];
          
          thead.appendChild(th);
          
          var td=document.createElement('td');

          if(label[i]=='土'){
              th.classList.add('td-sat');
              td.classList.add('td-sat');
          }

          if(label[i]=='日'){
            th.classList.add('td-hide');
            td.classList.add('td-hide');
          } 

          var select=document.createElement('select');
          select.id=table_name+i;

          for(var k=0;k<riyou.length;k++){
            
            if((label[i]=='土')&&(riyou[k]=='午後'||riyou[k]=='終日')) continue;
 
            var option=document.createElement('option');
            
            option.innerText=riyou[k];
            option.value=k;
            
              if(label[i]=='日') {
                option.value=0;
                select.appendChild(option);
                break;
              }

            select.appendChild(option);
           
          }

          select.addEventListener('click',select_from_like);
          select.addEventListener('change',select_from_like);

          select.col=col[i];
          select.table_name=table_name;
          select.parent_tag_str=parent_tag_str;
          select.label=label;

          td.appendChild(select);
          tr.appendChild(td);

      }
    
      tbody.appendChild(tr);

      table.appendChild(thead);
      table.appendChild(tbody);

      form.appendChild(table);
      parent_tag.appendChild(form);

      var p=document.createElement('p');
      p.innerText='備考欄';

      form.appendChild(p);

      for(var i=0;i<label.length;i++){

        if(label[i]=='備考'){

          var textarea=document.createElement('textarea');

          textarea.name='bikou';
          textarea.rows=5;
          textarea.cols=80;

          textarea.addEventListener('click',select_from_like);
          textarea.addEventListener('keyup',select_from_like);

          textarea.col=col[i];
          textarea.table_name=table_name;
          textarea.parent_tag_str=parent_tag_str;
          textarea.label=label;
          textarea.id=parent_tag_str+i;

          form.appendChild(textarea);
      }
    }

      var exec=document.getElementById(parent_tag_str+'_exec');

      // 画面の更新
      while(exec.firstChild){
        exec.removeChild(exec.firstChild);
      }

        var a=document.createElement("a");

        a.href='#'+parent_tag_str;
        a.innerText='メンバーの新規登録';
        a.style.display='block';
        a.classList.add('a-insert');
        
        a.addEventListener('click',insert_table);
        
        a.parent_tag_str=parent_tag_str;
        a.table_name=table_name;
        a.label=label;
        a.col=col;
        a.riyou=riyou;
        a.mode='insert';
     
        exec.appendChild(a);

        parent_tag.appendChild(form);

}
