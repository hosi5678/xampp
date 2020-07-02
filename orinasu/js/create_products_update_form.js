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

      childNodeClear(parent_tag_str+'_status');

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

      // // 画面の更新
      // while(exec.firstChild){
      //   exec.removeChild(exec.firstChild);
      // }

      create_exec({
        parent_tag_str:parent_tag_str,
        sub_tag_str:'_exec',
        table_name:table_name,
        label:label,
        col:col,
        mode:'update', // update table
        class_str:'a-mod',
        id:id,
      });
  
      // var a=document.createElement("a");

      // a.href='#'+parent_tag_str;
      // a.classList.add('a-mod');

      // a.innerText='修正する';
      // a.addEventListener('click',update_table,
      // );
      
      // a.parent_tag_str=parent_tag_str;
      // a.table_name=table_name;
      // a.label=label;
      // a.col=col;
      // a.id=id;

      // exec.appendChild(a);

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




}