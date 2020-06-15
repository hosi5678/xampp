'use strict';

function create_products_update_form(event){

  console.log('----- in create_products_update_form(before ajax): -----');

  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;

  var label=event.target.label;
  var col=event.target.col;

  console.log('parent tag str:'+parent_tag_str);
  console.log('table_name:'+table_name);

  console.log('label:'+label);
  console.log('col:'+col);

  var tds=$(this).closest('tr').children();

  var tds_val=new Array();

  for(var i=0;i<tds.length;i++){
    tds_val.push(tds[i].innerText);
  }

  console.log('tds val:');
  console.log(tds_val);

  $.when(
  
    ajax_get_col('category'),
    ajax_select_from_table('category'),

    ajax_get_col('tax'),
    ajax_select_from_table('tax'),

    ajax_get_col('round_type'),
    ajax_select_from_table('round_type'),

  ).done(function(category_col,category_row,tax_col,tax_row,round_col,round_row){

      var mode='update';

      // 画面の更新
      var parent_tag=document.getElementById(parent_tag_str+'_params');

      while(parent_tag.firstChild){
        parent_tag.removeChild(parent_tag.firstChild);
      }

      var category=new Array();

      category=getArrayFromRows({
        array:category,
        cols:category_col,
        rows:category_row
      });

      var tax=new Array();

      tax=getArrayFromRows({
        array:tax,
        cols:tax_col,
        rows:tax_row
      });

      var round=new Array();

      round=getArrayFromRows({
        array:round,
        cols:round_col,
        rows:round_row
      });

      create_products_input_form({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
        label:label,
        col:col,
        category:category,
        tax:tax,
        round:round,
        mode:mode
      });

      console.log('mode:'+mode);

    if(mode=='update'){

      var form_title=document.getElementById('form-'+parent_tag_str+'-title');
      form_title.innerText='売上情報の修正';

      var id;

      for(var i=0;i<label.length;i++){

        if(label[i]=='id'){
            id=tds_val[i];
            continue;
        } 

        // 文字列
        if(
          label[i]=='商品名'||
          label[i]=='販売場所'||
          label[i]=='顧客名'||
          label[i]=='販売日'||
          label[i]=='売上額'||
          label[i]=='販売個数'||
          label[i]=='売上額'||
          label[i]=='備考'){
          document.getElementById(parent_tag_str+i).value=tds_val[i];
        }

        if(label[i]=='カテゴリー'){
          for(var k=0;k<document.getElementById(parent_tag_str+i).options.length;k++){
            if(document.getElementById(parent_tag_str+i).options[k].innerText==tds_val[i]){
              document.getElementById(parent_tag_str+i).options[k].selected=true;
            }
          }
        }

        if(label[i]=='消費税'){
          for(var k=0;k<document.getElementById(parent_tag_str+i).options.length;k++){
            if(document.getElementById(parent_tag_str+i).options[k].innerText==(tds_val[i]+'%')){
              document.getElementById(parent_tag_str+i).options[k].selected=true;
            }
          }
        }

        if(label[i]=='端数処理'){
          for(var k=0;k<document.getElementById(parent_tag_str+i).options.length;k++){
            if(document.getElementById(parent_tag_str+i).options[k].innerText==tds_val[i]){
              document.getElementById(parent_tag_str+i).options[k].selected=true;
            }
          }
        }

      }

      var exec=document.getElementById(parent_tag_str+'_exec');

      // 画面の更新
      while(exec.firstChild){
        exec.removeChild(exec.firstChild);
      }

      var a=document.createElement("a");

      a.href='#'+parent_tag_str;
      a.classList.add('a-mod');

      a.innerText='修正する';
      a.addEventListener('click',update_table,
      );
      
      a.parent_tag_str=parent_tag_str;
      a.table_name=table_name;
      a.label=label;
      a.col=col;
      a.id=id;

      exec.appendChild(a);

      var a=document.createElement("a");

      a.href='#'+parent_tag_str;

      a.innerText='戻る';

      var mode='insert';

      a.addEventListener('click',

        function(event){
          create_products_input_form({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
            label:label,
            col:col,
            category:category,
            tax:tax,
            round:round,
            mode:mode
            })
        }
      );

        exec.appendChild(a);

      }

    });


    // // カテゴリ-,tax,ラウンドのセレクトをまず配置する
    // var table=document.createElement('table');
    // var thead=document.createElement('thead');
    // var tbody=document.createElement('tbody');

    // var tr=document.createElement('tr');

    // var id;

    // for(var i=0;i<label.length;i++){

    //   if(label[i]=='id'){
    //     id=tds_val[i];
    //     continue;
    //   } 

    //   var th=document.createElement('th');

    //   if(label[i]=='カテゴリー'){

    //     var th=document.createElement('th');

    //     th.innerText=label[i];
    //     thead.appendChild(th);

    //     var td=document.createElement('td');
    //     var select=document.createElement('select');
    //     select.id=table_name+i;

    //     for(k=0;k<category.length;k++){
    //       var option=document.createElement('option');
    //       option.value=k;
    //       option.innerText=category[k];
          
    //       if(category[k]==tds_val[i]){
    //         option.selected='true';
    //       }

    //       select.appendChild(option);
    //     }

    //     td.appendChild(select);
    //     tr.appendChild(td);

    //   }

    //   if(label[i]=='消費税'){

    //     var th=document.createElement('th');

    //     th.innerText=label[i];
    //     thead.appendChild(th);

    //     var td=document.createElement('td');

    //     var select=document.createElement('select');
    //     select.id=table_name+i;

    //     select.addEventListener('change',product_price_calc);
    //     select.label=label;
    //     select.parent_tag_str=parent_tag_str;
    //     select.tax=tax;
    //     select.round=round;

    //     for(k=0;k<tax.length;k++){
    //       var option=document.createElement('option');
    //       option.value=k;
    //       option.innerText=tax[k]+'%';

    //       if(tax[k]==tds_val[i]){
    //         option.selected='true';
    //       }
      
    //       select.appendChild(option);
    //     }
        
    //     td.appendChild(select);
    //     tr.appendChild(td);

    //     }

    //     if(label[i]=='端数処理'){

    //       var th=document.createElement('th');

    //       th.innerText=label[i];
    //       thead.appendChild(th);

    //       var td=document.createElement('td');
    //       var select=document.createElement('select');
    //       select.id=table_name+i;

    //       select.addEventListener('change',product_price_calc);
    //       select.label=label;
    //       select.parent_tag_str=parent_tag_str;
    //       select.tax=tax;
    //       select.round=round;

    //       for(k=0;k<round.length;k++){
    //         var option=document.createElement('option');
    //         option.value=k;
    //         option.innerText=round[k];

    //         if(round[k]==tds_val[i]){
    //           option.selected='true';
    //         }
  
    //         select.appendChild(option);
    //       }
          
    //       td.appendChild(select);
    //       tr.appendChild(td);

    //   }

    // }

    // tbody.appendChild(tr);
    // table.appendChild(thead);
    // table.appendChild(tbody);

    // form.appendChild(table);

    // var table=document.createElement('table');
    // var thead=document.createElement('thead');
    // var tbody=document.createElement('tbody');

    // var tr=document.createElement('tr');

    // for(var i=0;i<label.length;i++){
    //     if(label[i]=='商品名'){
    //       var th=document.createElement('th');
    //       th.innerText=label[i];
    //       thead.appendChild(th);
    //       var td=document.createElement('td');
    //       var input=document.createElement('input');
    //       input.type='text';
    //       input.id=parent_tag_str+i;
    //       input.value=tds_val[i];

    //       td.appendChild(input);
    //       tr.appendChild(td);
    //     }

    //     if(label[i]=='販売日'){
    //       var th=document.createElement('th');
    //       th.innerText=label[i];
    //       thead.appendChild(th);
    //       var td=document.createElement('td');
    //       var input=document.createElement('input');
    //       input.type='date';
    //       input.id=parent_tag_str+i;
    //       input.value=tds_val[i];

    //       td.appendChild(input);
    //       tr.appendChild(td);
    //     }

    //     if(label[i]=='販売場所'){
    //       var th=document.createElement('th');
    //       th.innerText=label[i];
    //       thead.appendChild(th);
    //       var td=document.createElement('td');
    //       var input=document.createElement('input');
    //       input.type='text';
    //       input.id=parent_tag_str+i;
    //       input.value=tds_val[i];

    //       td.appendChild(input);
    //       tr.appendChild(td);
    //     }

    //     if(label[i]=='顧客名'){
    //       var th=document.createElement('th');
    //       th.innerText=label[i];
    //       thead.appendChild(th);
    //       var td=document.createElement('td');
    //       var input=document.createElement('input');
    //       input.type='text'
    //       input.id=parent_tag_str+i;
    //       input.value=tds_val[i];

    //       td.appendChild(input);
    //       tr.appendChild(td);
    //     }

    // }

    // tbody.appendChild(tr);
    // table.appendChild(thead);
    // table.appendChild(tbody);

    // form.appendChild(table);

    // parent_tag.appendChild(form);

    // var table=document.createElement('table');
    // var thead=document.createElement('thead');
    // var tbody=document.createElement('tbody');

    // var tr=document.createElement('tr');

    // for(var i=0;i<label.length;i++){

    //   if(label[i]=='商品単価'){
    //     var th=document.createElement('th');
    //     th.innerText=label[i]+'(円)';
    //     thead.appendChild(th);

    //     var td=document.createElement('td');
    //     var input=document.createElement('input');
    //     input.type='number';
    //     input.min="0";
    //     input.id=parent_tag_str+i;
    //     input.value=tds_val[i];

    //     input.addEventListener('change',product_price_calc);
    //     input.label=label;
    //     input.parent_tag_str=parent_tag_str;
    //     input.tax=tax;
    //     input.round=round;

    //     td.appendChild(input);
    //     tr.appendChild(td);
    //   }

    //   if(label[i]=='販売個数'){
    //     var th=document.createElement('th');
    //     th.innerText=label[i]+'(個)';
    //     thead.appendChild(th);

    //     var td=document.createElement('td');
    //     var input=document.createElement('input');
    //     input.type='number';
    //     input.min="0";
    //     input.id=parent_tag_str+i;
    //     input.value=tds_val[i];

    //     input.addEventListener('change',product_price_calc);
    //     input.label=label;
    //     input.parent_tag_str=parent_tag_str;
    //     input.tax=tax;
    //     input.round=round;

    //     td.appendChild(input);
    //     tr.appendChild(td);
    //   }

    //   if(label[i]=='調整額'){
    //     var th=document.createElement('th');
    //     th.innerText=label[i]+'(±円)';
    //     thead.appendChild(th);

    //     var td=document.createElement('td');
    //     var input=document.createElement('input');
    //     input.type='number';
    //     input.id=parent_tag_str+i;
    //     input.value=0;
    //     input.value=tds_val[i];

    //     input.addEventListener('change',product_price_calc);
    //     input.label=label;
    //     input.parent_tag_str=parent_tag_str;
    //     input.tax=tax;
    //     input.round=round;

    //     td.appendChild(input);
    //     tr.appendChild(td);
    //   }
    
    // }

    // tbody.appendChild(tr);
    // table.appendChild(thead);
    // table.appendChild(tbody);

    // form.appendChild(table);

    // var table=document.createElement('table');
    // var thead=document.createElement('thead');
    // var tbody=document.createElement('tbody');


    // var tr=document.createElement('tr');
    // var td=document.createElement('td');

    // for(var i=0;i<label.length;i++){
    //   if(label[i]=='売上額'){
    //     var th=document.createElement('th');
    //     var input=document.createElement('input');
    //     input.type='number';
    //     input.id=parent_tag_str+i;
    //     // console.log('------ gaku:'+tds_val[i]);

    //     input.name='calc';
    //     input.value=tds_val[i];

    //     th.innerText='売上額(=単価×個数×消費税±調整額)(円)';
    //     th.classList.add('th-calc');
    //   }
    // }

    // td.appendChild(input);
    // tr.appendChild(td);
    
    // thead.appendChild(th);
    // tbody.appendChild(tr);

    // table.appendChild(thead);
    // table.appendChild(tbody);

    // form.appendChild(table);
    // parent_tag.appendChild(form);

    // for(var i=0;i<label.length;i++){
    //   if(label[i]=='備考'){
    //     var p=document.createElement('p');
    //     p.innerText='備考欄';
    
    //     form.appendChild(p);

    //     var textarea=document.createElement('textarea');
    //     textarea.name='bikou';
    //     textarea.rows=5;
    //     textarea.cols=80;

    //     textarea.value=tds_val[i];

    //     form.appendChild(textarea);
    //   }
    // }

    // parent_tag.appendChild(form);

    // var div=document.createElement('div');

    // var a=document.createElement("a");

    // a.style.display='inline-block';
    // a.classList.add('a-cancel');

    // a.parent_tag_str=parent_tag_str;
    // a.table_name=table_name;

    // a.href='#'+parent_tag_str;
    // a.innerText='戻る';

    // a.addEventListener('click',function(event){
    //   parent_tag_str=event.target.parent_tag_str;
    //   console.log('-------------')
    //   console.log(parent_tag_str);
    //   parent_tag_str=event.target.parent_tag_str;
    //   table_name=event.target.table_name;
    //   create_products_input_form(parent_tag_str,table_name);
    //   select_from_table(parent_tag_str,table_name);

    // });

    // div.appendChild(a);

    // // form.appendChild(a);

    // var a=document.createElement("a");

    // a.style.display='inline-block';
    // a.classList.add('a-mod');

    // a.href='#'+parent_tag_str;
    // a.innerText='修正する';
    // a.addEventListener('click',update_table);

    // a.table_name=table_name;
    // a.parent_tag_str=parent_tag_str;
    // a.col=products_col;
    // a.label=label;
    // a.prev='create_products_input_form';
    // a.id=id;

    // div.appendChild(a);

    // form.appendChild(div);
    
    // parent_tag.appendChild(form);
  // }

  // });



}