function create_products_update_form(){

  console.log('----- in create_products_update_form(before ajax): -----');

  parent_tag_str=event.target.parent_tag_str;
  table_name=event.target.table_name;
  // id=event.target.id;
  prev=event.target.prev;

  console.log('parent tag str:'+parent_tag_str);
  console.log('table_name:'+table_name);
  // console.log('id:'+id);
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
    ajax_stmt_exec('tax',"select * from "+'tax'+" limit 0;",'column'),
    ajax_stmt_exec('category',"select * from "+'category'+" limit 0;",'column'),
    ajax_stmt_exec('round_type',"select * from "+'round_type'+" limit 0;",'column'),

    ajax_stmt_exec('tax',"select * from "+'tax'+";",'assoc'),
    ajax_stmt_exec('category',"select * from "+'category'+";",'assoc'),
    ajax_stmt_exec('round_type',"select * from "+'round_type'+";",'assoc'),

    ).done(function(label,products_col,tax_col,category_col,round_col,tax_row,category_row,round_row){

      console.log('----- in create_products_update_form(after ajax) -----');


      console.log('label is below:');
      console.log(label);

      console.log('products col is below:');
      console.log(products_col);

      console.log('tax col is below:');
      console.log(tax_col);

      console.log('category col is below:');
      console.log(category_col);

      console.log('round type col is below:');
      console.log(round_col);

      console.log('tax row is below:');
      console.log(tax_row);

      console.log('category row is below:');
      console.log(category_row);

      console.log('round type row is below:');
      console.log(round_row);

      // 画面の更新
      var parent_tag=document.getElementById(parent_tag_str+'_params');

      while(parent_tag.firstChild){
        parent_tag.removeChild(parent_tag.firstChild);
      }

     // 消費税の取得
     var tax=new Array();
 
     for(var j=0;j<tax_row.length;j++){
         for(var i=0;i<tax_col.length;i++){
             if(tax_col[i]=='id') continue;
               tax.push(tax_row[j][tax_col[i]]);
         }
     }

     console.log('---tax---');
     console.log(tax);

     // 商品カテゴリーの取得
     var category=new Array();
 
     for(var j=0;j<category_row.length;j++){
         for(var i=0;i<category_col.length;i++){
             if(category_col[i]=='id') continue;
               category.push(category_row[j][category_col[i]]);
         }
     }

     console.log('---category---');
     console.log(category);

    // roundの取得
    var round=new Array();
 
    for(var j=0;j<round_row.length;j++){
        for(var i=0;i<round_col.length;i++){
            if(round_col[i]=='id') continue;
              round.push(round_row[j][round_col[i]]);
        }
    }

    console.log('---round---');
    console.log(round);

    var p=document.createElement('p');
    p.innerText='商品売上の修正';

    var form=document.createElement('form');
    form.name='form_products_update';

    form.appendChild(p);

    // カテゴリ-,tax,ラウンドのセレクトをまず配置する
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

      var th=document.createElement('th');

      if(label[i]=='カテゴリー'){

        var th=document.createElement('th');

        th.innerText=label[i];
        thead.appendChild(th);

        var td=document.createElement('td');
        var select=document.createElement('select');
        select.id=table_name+i;

        for(k=0;k<category.length;k++){
          var option=document.createElement('option');
          option.value=k;
          option.innerText=category[k];
          
          if(category[k]==tds_val[i]){
            option.selected='true';
          }

          select.appendChild(option);
        }

        td.appendChild(select);
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
        select.label=label;
        select.parent_tag_str=parent_tag_str;
        select.tax=tax;
        select.round=round;

        for(k=0;k<tax.length;k++){
          var option=document.createElement('option');
          option.value=k;
          option.innerText=tax[k]+'%';

          if(tax[k]==tds_val[i]){
            option.selected='true';
          }
      
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
          select.label=label;
          select.parent_tag_str=parent_tag_str;
          select.tax=tax;
          select.round=round;

          for(k=0;k<round.length;k++){
            var option=document.createElement('option');
            option.value=k;
            option.innerText=round[k];

            if(round[k]==tds_val[i]){
              option.selected='true';
            }
  
            select.appendChild(option);
          }
          
          td.appendChild(select);
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
        if(label[i]=='商品名'){
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

        if(label[i]=='販売日'){
          var th=document.createElement('th');
          th.innerText=label[i];
          thead.appendChild(th);
          var td=document.createElement('td');
          var input=document.createElement('input');
          input.type='date';
          input.id=parent_tag_str+i;
          input.value=tds_val[i];

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
          input.value=tds_val[i];

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

      if(label[i]=='商品単価'){
        var th=document.createElement('th');
        th.innerText=label[i]+'(円)';
        thead.appendChild(th);

        var td=document.createElement('td');
        var input=document.createElement('input');
        input.type='number';
        input.min="0";
        input.id=parent_tag_str+i;
        input.value=tds_val[i];

        input.addEventListener('change',product_price_calc);
        input.label=label;
        input.parent_tag_str=parent_tag_str;
        input.tax=tax;
        input.round=round;

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
        input.value=tds_val[i];

        input.addEventListener('change',product_price_calc);
        input.label=label;
        input.parent_tag_str=parent_tag_str;
        input.tax=tax;
        input.round=round;

        td.appendChild(input);
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
        input.value=tds_val[i];

        input.addEventListener('change',product_price_calc);
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
      if(label[i]=='計算額'){
        var th=document.createElement('th');
        var input=document.createElement('input');
        input.type='number';
        input.id=parent_tag_str+i;
        // console.log('------ gaku:'+tds_val[i]);

        input.name='calc';
        input.value=tds_val[i];

        th.innerText='計算額(単価×個数×税±調整額)(円)';
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

        textarea.value=tds_val[i];

        form.appendChild(textarea);
      }
    }

    parent_tag.appendChild(form);

    var a=document.createElement("a");

    a.href='#'+parent_tag_str;
    a.innerText='売り上げデータの修正';
    a.style.display='block';
    a.classList.add('a-mod');

    a.addEventListener('click',update_table);

    a.label=label;
    a.col=products_col;
    a.parent_tag_str=parent_tag_str;
    a.prev='ceate_products_update_form';
    a.table_name=table_name;
    a.id=id;

    form.appendChild(a);

    parent_tag.appendChild(form);

  });


}