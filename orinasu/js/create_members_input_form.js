function create_members_input_form(parent_tag_str,table_name){

  console.log('----- in create members input form -----');
  console.log('parent tag str:'+parent_tag_str);
  console.log('table name:'+table_name);

   $.when(

    ajax_stmt_exec(table_name+'_join',"select * from "+table_name+" limit 0;",'column'),
    ajax_stmt_exec(table_name,"select * from "+table_name+" limit 0;",'column'),
    ajax_stmt_exec('riyou_keitai',"select * from riyou_keitai"+" limit 0;",'column'),
    ajax_stmt_exec('riyou_keitai','select * from riyou_keitai;','assoc')

    ).done(function(label,member_col,riyou_col,riyou_row){
      
      console.log('label:'+label);
      console.log('members_col:'+member_col);
      console.log('riyou_col:'+riyou_col);
 
    // 画面の更新
    var parent_tag=document.getElementById(parent_tag_str+'_params');

    while(parent_tag.firstChild){
      parent_tag.removeChild(parent_tag.firstChild);
    }

       // 利用形態の取得
       var riyou=new Array();
   
       for(var j=0;j<riyou_row.length;j++){
           for(var i=0;i<riyou_col.length;i++){
               if(riyou_col[i]=='id') continue;
                 riyou.push(riyou_row[j][riyou_col[i]]);
           }
       }

       console.log('---riyou---');
       console.log(riyou);
 
        var form=document.createElement('form');
        form.name='form_members_insert';

        var p=document.createElement('p');
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
              input.col=member_col[i];
              input.table_name=table_name;
              input.parent_tag_str=parent_tag_str;
              input.label=label;
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
            
            if((label[i]=='土')&&((riyou[k]=='終日')||(riyou[k]=='午後'))) continue;
            
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

          form.appendChild(textarea);
      }
    }

        var a=document.createElement("a");

        a.href='#'+parent_tag_str;
        a.innerText='新規登録する';
        a.style.display='block';
        a.classList.add('a-insert');
        
        a.addEventListener('click',insert_table);
        
        a.col=member_col;
        a.label=label;
        a.table_name=table_name;
        a.prev='create_members_input_form';
        a.parent_tag_str=parent_tag_str;

        form.appendChild(a);

      parent_tag.appendChild(form);

  });

}
