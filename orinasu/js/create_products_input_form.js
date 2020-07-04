'use strict';

function create_products_input_form({
      parent_tag_str,
      table_name,
      label,
      col,
      category,
      tax,
      round,
      mode,
    }){

    console.log('parent_tag_str:'+parent_tag_str);
    console.log('table_name:'+table_name);
    
    // childNodeClear(parent_tag_str+'_status');

    var parent_tag=childNodeClear(parent_tag_str+'_params');
    

      console.log('---tax---');
      console.log(tax);

      console.log('---category---');
      console.log(category);

      console.log('---round---');
      console.log(round);

      var p=document.createElement('p');
      p.id='form-'+parent_tag_str+'-title';
      p.innerText='売上の登録';

      var form=document.createElement('form');
      form.name='form_'+parent_tag_str+'_insert';

      form.appendChild(p);

      // カテゴリ-,tax,ラウンドのセレクトをまず配置する
      var table=document.createElement('table');
      var thead=document.createElement('thead');
      var tbody=document.createElement('tbody');

      var tr=document.createElement('tr');

      for(var i=0;i<label.length;i++){

        var th=document.createElement('th');

        if(label[i]=='販売日'){
          var th=document.createElement('th');
          th.innerText=label[i];
          thead.appendChild(th);
          var td=document.createElement('td');

          var input=document.createElement('input');
          input.type='date';
          input.id=parent_tag_str+i;

          input.addEventListener('click',select_equal);
          input.addEventListener('keyup',select_equal);
          input.addEventListener('change',select_equal);
          input.id=parent_tag_str+i;
          input.col=col[i];
          input.table_name=table_name;
          input.parent_tag_str=parent_tag_str;
          input.label=label;

          td.appendChild(input);
          tr.appendChild(td);
        }

        if(label[i]=='販売場所'){
          var th=document.createElement('th');
          th.innerText=label[i];
          thead.appendChild(th);
          var td=document.createElement('td');
          var input=document.createElement('input');
          input.type='text';
          input.id=parent_tag_str+i;
          td.appendChild(input);
          tr.appendChild(td);
        }

        if(label[i]=='顧客名'){
          var th=document.createElement('th');
          th.innerText=label[i];
          thead.appendChild(th);
          var td=document.createElement('td');
          var input=document.createElement('input');
          input.type='text'
          input.id=parent_tag_str+i;
          td.appendChild(input);
          tr.appendChild(td);
        }


      }

      tbody.appendChild(tr);
      table.appendChild(thead);
      table.appendChild(tbody);

      form.appendChild(table);

      var table=document.createElement('table');
      var thead=document.createElement('thead');
      var tbody=document.createElement('tbody');

      var tr=document.createElement('tr');

      for(var i=0;i<label.length;i++){

        if(label[i]=='カテゴリー'){

          var th=document.createElement('th');

          th.innerText=label[i];
          thead.appendChild(th);

          var td=document.createElement('td');
          var select=document.createElement('select');

          for(var k=0;k<category.length;k++){
            var option=document.createElement('option');
            option.value=k;
            option.innerText=category[k];
            
            select.appendChild(option);
          }

          select.addEventListener('click',select_from_like);
          select.addEventListener('change',select_from_like);

          select.id=parent_tag_str+i;
          select.col=col[i];
          select.table_name=table_name;
          select.parent_tag_str=parent_tag_str;
          select.label=label;
          select.id=parent_tag_str+i;

          td.appendChild(select);
          tr.appendChild(td);

        }

        if(label[i]=='商品名'){
            var th=document.createElement('th');
            th.innerText=label[i];
            thead.appendChild(th);

            var td=document.createElement('td');
            var input=document.createElement('input');

            input.type='text';
            input.id=parent_tag_str+i;

            input.addEventListener('keyup',select_from_like);
            input.addEventListener('click',select_from_like);

            input.col=col[i];
            input.table_name=table_name;
            input.parent_tag_str=parent_tag_str;
            input.label=label;
            input.id=parent_tag_str+i;

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

        if(label[i]=='商品単価'){
          var th=document.createElement('th');
          th.innerText=label[i]+'(円)';
          thead.appendChild(th);

          var td=document.createElement('td');
          var input=document.createElement('input');
          input.type='number';
          input.min="0";
          input.id=parent_tag_str+i;
          input.value=100;

          input.addEventListener('change',product_price_calc);
          input.addEventListener('keyup',product_price_calc);
          input.addEventListener('click',product_price_calc);

          input.label=label;
          input.parent_tag_str=parent_tag_str;
          input.tax=tax;
          input.round=round;

          input.addEventListener('click',select_equal);
          input.addEventListener('keyup',select_equal);
          input.addEventListener('change',select_equal);
          input.id=parent_tag_str+i;
          input.col=col[i];
          input.table_name=table_name;
          input.parent_tag_str=parent_tag_str;
          input.label=label;

          td.appendChild(input);
          tr.appendChild(td);
        }

        if(label[i]=='販売個数'){
          var th=document.createElement('th');
          th.innerText=label[i]+'(個)';
          thead.appendChild(th);

          var td=document.createElement('td');
          var input=document.createElement('input');
          input.type='number';
          input.min="0";
          input.id=parent_tag_str+i;
          input.value=1;

          input.addEventListener('change',product_price_calc);
          input.addEventListener('keyup',product_price_calc);
          input.addEventListener('click',product_price_calc);

          input.label=label;
          input.parent_tag_str=parent_tag_str;
          input.tax=tax;
          input.round=round;

          td.appendChild(input);
          tr.appendChild(td);
        }

        if(label[i]=='消費税'){

          var th=document.createElement('th');

          th.innerText=label[i];
          thead.appendChild(th);

          var td=document.createElement('td');
          var select=document.createElement('select');
          select.id=table_name+i;

          select.addEventListener('change',product_price_calc);
          select.addEventListener('click',product_price_calc);
          select.addEventListener('keyup',product_price_calc);

          select.label=label;
          select.parent_tag_str=parent_tag_str;
          select.tax=tax;
          select.round=round;

          for(k=0;k<tax.length;k++){
            var option=document.createElement('option');
            option.value=k;
            option.innerText=tax[k]+'%';

            if(k==2) option.selected=true;
            
            select.appendChild(option);
          }
          
          td.appendChild(select);
          tr.appendChild(td);

        }

        if(label[i]=='端数処理'){
  
            var th=document.createElement('th');
  
            th.innerText=label[i];
            thead.appendChild(th);
  
            var td=document.createElement('td');
            var select=document.createElement('select');
            select.id=table_name+i;

            select.addEventListener('change',product_price_calc);
            select.addEventListener('click',product_price_calc);
            select.addEventListener('keyup',product_price_calc);

            select.label=label;
            select.parent_tag_str=parent_tag_str;
            select.tax=tax;
            select.round=round;
  
            for(k=0;k<round.length;k++){
              var option=document.createElement('option');
              option.value=k;
              option.innerText=round[k];
              
              select.appendChild(option);
            }
            
            td.appendChild(select);
            tr.appendChild(td);

        }


        if(label[i]=='調整額'){
          var th=document.createElement('th');
          th.innerText=label[i]+'(±円)';
          thead.appendChild(th);

          var td=document.createElement('td');
          var input=document.createElement('input');
          input.type='number';
          input.id=parent_tag_str+i;
          input.value=0;

          input.addEventListener('change',product_price_calc);
          input.addEventListener('keyup',product_price_calc);
          input.addEventListener('click',product_price_calc);

          input.label=label;
          input.parent_tag_str=parent_tag_str;
          input.tax=tax;
          input.round=round;

          td.appendChild(input);
          tr.appendChild(td);
        }
      
      }

      tbody.appendChild(tr);
      table.appendChild(thead);
      table.appendChild(tbody);

      form.appendChild(table);

      var table=document.createElement('table');
      var thead=document.createElement('thead');
      var tbody=document.createElement('tbody');


      var tr=document.createElement('tr');
      var td=document.createElement('td');

      for(var i=0;i<label.length;i++){
        if(label[i]=='売上額'){
          var th=document.createElement('th');
          var input=document.createElement('input');
          input.type='number';
          input.id=parent_tag_str+i;
          input.name='calc';
          input.value=110;
 
          th.innerText='売上額\n(=単価×個数×消費税±調整額)(円)';
          th.classList.add('th-calc');
        }
      }

      td.appendChild(input);
      tr.appendChild(td);
      
      thead.appendChild(th);
      tbody.appendChild(tr);

      table.appendChild(thead);
      table.appendChild(tbody);

      form.appendChild(table);
      parent_tag.appendChild(form);

      for(var i=0;i<label.length;i++){

        if(label[i]=='備考'){

          var p=document.createElement('p');
          p.innerText='備考欄';
      
          form.appendChild(p);

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
      a.innerText='販売データの新規登録';
      a.style.display='block';
      a.classList.add('hanbai-a-insert');

      a.addEventListener('click',insert_table);

      a.label=label;
      a.col=col;
      a.parent_tag_str=parent_tag_str;
      a.prev='ceate_products_input_form';
      a.table_name=table_name;
      a.tax=tax;
      a.category=category;
      a.round=round;
      a.mode=mode;

      exec.appendChild(a);

      parent_tag.appendChild(form);

  }