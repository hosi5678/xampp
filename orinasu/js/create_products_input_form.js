function create_products_input_form(parent_tag_str,table_name){

    console.log('----- in create_products_input_form(before ajax) -----');
    console.log('parent_tag_str:'+parent_tag_str);
    console.log('table_name:'+table_name);

    var parent_tag=document.getElementById(parent_tag_str+'_params');
  
     $.when(
  
      ajax_stmt_exec(table_name+'_join',"select * from "+table_name+" limit 0;",'column'),
      ajax_stmt_exec(table_name,"select * from "+table_name+" limit 0;",'column'),
      ajax_stmt_exec('tax',"select * from "+'tax'+" limit 0;",'column'),
      ajax_stmt_exec('category',"select * from "+'category'+" limit 0;",'column'),
      ajax_stmt_exec('round_type',"select * from "+'round_type'+" limit 0;",'column'),

      ajax_stmt_exec('tax',"select * from "+'tax'+";",'assoc'),
      ajax_stmt_exec('category',"select * from "+'category'+";",'assoc'),
      ajax_stmt_exec('round_type',"select * from "+'round_type'+";",'assoc'),



    //   ajax_stmt_exec('ri',"select * from "+table_name+" limit 0;",'column'),
    //   ajax_stmt_exec('riyou_keitai','select * from riyou_keitai;','assoc')
    //   ajax_stmt_exec('riyou_keitai',"select * from "+table_name+" limit 0;",'column'),
    //   ajax_stmt_exec('riyou_keitai','select * from riyou_keitai;','assoc')
  
      ).done(function(label,products_col,tax_col,category_col,round_col,tax_row,category_row,round_row){

        console.log('----- in create_products_input_form(after ajax) -----');


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
      p.innerText='商品売上の登録';

      var form=document.createElement('form');
      form.name='form1';

      form.appendChild(p);

      // カテゴリ-,tax,ラウンドのセレクトをまず配置する

      for(var i=0;i<label.length;i++){
        // if(label[i]=='カテゴリー'||label[i]=='消費税'||label[i]=='')

      }

    //   table.appendChild(thead);
    //   table.appendChild(tbody);
    //   form.appendChild(table);
    //   form.appendChild(button);
      parent_tag.appendChild(form);
  
    });
  
  }