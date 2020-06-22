'use strict';

function create_members_input_form({
    parent_tag_str,
    table_name,
    label,
    col,
    riyou,
    youbi,
    mode,
  }){

  console.log('----- in create members input form -----');
  // console.log('parent tag str:'+parent_tag_str);
  // console.log('table name:'+table_name);
  // console.log('label:');
  // console.log(label);
  // console.log('col:');
  // console.log(col);

  console.log('youbi:');
  console.log(youbi);

  console.log('mode:'+mode);

    // 画面の更新
    var parent_tag=childNodeClear(parent_tag_str+'_params');
 
        var form=document.createElement('form');
        form.name='form_'+parent_tag_str+'_'+mode;

        var title=childNodeClear(parent_tag_str+'_title');

        var p=document.createElement('p');
        p.innerText='メンバーの新規登録';

        title.appendChild(p);

        var table=document.createElement('table');
        var thead=document.createElement('thead');
        var tbody=document.createElement('tbody');

        var tr=document.createElement('tr');

        var id=0;

        for(var i=0;i<label.length;i++){

          if(label[i]=='姓'||label[i]=='名'){

            var th=document.createElement('th');

            th.innerText=label[i];

            thead.appendChild(th);

            var td=document.createElement('td');
            var input=document.createElement('input');

            input.type='text';
            input.placeholder=label[i];
            input.id=parent_tag_str+id;

            if(label[i]=='姓'||label[i]=='名'){
              input.addEventListener('keyup',select_from_like);
              // input.addEventListener('change',select_from_like);
              input.addEventListener('click',select_from_like);

              input.col=col[i];
              input.table_name=table_name;
              input.parent_tag_str=parent_tag_str;
              input.label=label;
              input.id=parent_tag_str+i;

              // var tippy_label=label[i];
              // var tippy_id='#'+input.id;
              // console.log('tippy id:'+tippy_id);
              // // tooltipの適用
              // tippy(tippy_id, {
              //   content:tippy_label+'を入力してください。',
              // });

              input.title=label[i]+'を入力してください。';

              $('#'+input.id).tooltip({
                // show:{
                //   effect: "size",
                //   delay: 100
                // },

                // hide:{
                //   effect: "size",
                //   delay: 100
                // },

                position:{
                  //左上が起点
                  my: "left-25 bottom", 
                  at: "center"                  // collision:"flipfit"
                }

              });

              id=id+1;

            }

            td.appendChild(input);
            tr.appendChild(td);
        }
      }

      id=id+1;

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

      for(var i=0;i<youbi.length;i++){

          // if(label[i]=='id') continue;
          // if(label[i]=='姓') continue;
          // if(label[i]=='名') continue;
          // if(label[i]=='備考') continue;

          // if(youbi[i]=='日') continue;

          var th=document.createElement('th');

          th.innerText=youbi[i];
          
          thead.appendChild(th);
          
          var td=document.createElement('td');

          if(youbi[i]=='土'){
            th.classList.add('td-sat');
          }

          if(youbi[i]=='日'){
            th.classList.add('td-hide');
            td.classList.add('td-hide');
          } 

          var select=document.createElement('select');
          select.id=table_name+id;

          for(var k=0;k<riyou.length;k++){
            
            if((youbi[i]=='土')&&(riyou[k]=='午後'||riyou[k]=='終日')) continue;
 
            var option=document.createElement('option');
            
            option.innerText=riyou[k];
            option.value=k;
            
            if(youbi[i]=='日') {
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

          id=id+1;
      }
    
      tbody.appendChild(tr);

      table.appendChild(thead);
      table.appendChild(tbody);

      form.appendChild(table);

      var table=document.createElement('table');

      var thead=document.createElement('thead');
      var tbody=document.createElement('tbody');

      var th=document.createElement('th');

      th.innerText='利用者検索(曜日毎)';
      
      thead.appendChild(th);

      var tr=document.createElement('tr');
      
      var td=document.createElement('td');

      var select=document.createElement('select');
      select.id=table_name+'_kensaku';

      for(var i=0;i<youbi.length;i++){
        var option=document.createElement('option');

        if(youbi[i]=='日') continue;

        option.innerText=youbi[i];
        select.appendChild(option);
      }

      select.addEventListener('click',select_equal);
      select.addEventListener('change',select_equal);

      select.table_name=table_name;
      select.parent_tag_str=parent_tag_str;
      select.label=label;
      select.col=col;
      select.youbi=youbi;

      td.appendChild(select);
      tr.appendChild(td);
      tbody.appendChild(tr);

      table.appendChild(thead);
      table.appendChild(tbody);

      form.appendChild(table);

      parent_tag.appendChild(form);

      var p=document.createElement('p');
      p.innerText='備考欄';

      form.appendChild(p);
      

      var textarea=document.createElement('textarea');

      textarea.name=parent_tag_str+'_bikou';

      textarea.addEventListener('click',select_from_like);
      textarea.addEventListener('keyup',select_from_like);

      textarea.col=col[id];
      textarea.table_name=table_name;
      textarea.parent_tag_str=parent_tag_str;
      textarea.label=label;
      textarea.id=parent_tag_str+id;
      
      form.appendChild(textarea);


      create_exec({
        parent_tag_str:parent_tag_str,
        sub_tag_str:'_exec',
        table_name:table_name,
        label:label,
        col:col,
        mode:'insert', // insert
        class_str:'a-insert',
        youbi:youbi,
        riyou:riyou,
      });
  
        // var a=document.createElement("a");

        // a.href='#'+parent_tag_str;
        // a.innerText='メンバーの新規登録';
        // a.style.display='block';
        // a.classList.add('a-insert');
        
        // a.addEventListener('click',insert_table);
        
        // a.parent_tag_str=parent_tag_str;
        // a.table_name=table_name;
        // a.label=label;
        // a.col=col;
        // a.riyou=riyou;
        // a.mode='insert';
     
        // exec.appendChild(a);

        parent_tag.appendChild(form);

}
