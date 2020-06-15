'use strict';

function insert_table(event){

  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;

  var label=event.target.label;
  var col=event.target.col;
 
  var youbi;
  var riyou;

  var tax;
  var category;
  var round;

  var mode=event.target.mode;

  if(table_name=='members'){
    riyou=event.target.riyou;
  }else if(table_name=='products'){
    category=event.target.category;
    tax=event.target.tax;
    round=event.target.round;
  }else if(table_name='calendar'){
    youbi=event.target.youbi;
  }

  console.log('-----in insert table-----');
  console.log('table name:'+table_name);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('col:'); // 10
  console.log(col);
  console.log('label is:');
  console.log(label);
  console.log('event type:'+event.type);

  // mode='insert';
 
  var params=new Array();

  var query_columns=new Array();

  for(var i=0;i<col.length;i++){
    if(col[i]=='id') continue;
      query_columns.push(col[i]);
  }

  console.log('query_columns:'+query_columns);
  console.log('query columns length:'+query_columns.length);

  // id部品の値を取得
  params=get_input_value({
    parent_tag_str:parent_tag_str,
    table_name:table_name,
    label:label,
    params:params
  });

  // var message=childNodeClear(parent_tag_str+'_message');
  
  // var str;

  // for(var i=0;i<label.length;i++){

  //   if(label[i]=='id') continue;

  //   // メンバーテーブルのとき
  //   if(table_name=='members'){

  //     // 文字列のとき
  //     if((label[i]=='姓')||
  //        (label[i]=='名')||
  //        (label[i]=='備考')){

  //       str=document.getElementById(parent_tag_str+i).value;

  //       // sql injectionは認めない
  //       str=reject_str(str);
  //       if(str===1) return false;

  //       if(str==''&&((label[i]!='名')||(label[i]!='備考'))){
  //         var p=document.createElement('p');

  //         p.classList.add('message');
  //         p.innerText=label[i]+'を入力してください。';
  //         message.appendChild(p);
  
  //         return false;

  //       }else{
  //         params.push('"'+str+'"');
  //       }

  //     }else{
  //       var str=document.getElementById(parent_tag_str+i).value;
  //       params.push(str);  
  //     }

  //   // 商品テーブルのとき
  //   }else if(table_name=='products'){
  //     // 文字列のとき
  //     if((label[i]=='商品名')||
  //        (label[i]=='顧客名')||
  //        (label[i]=='販売場所')||
  //        (label[i]=='販売日')||
  //        (label[i]=='備考')){

  //         str=document.getElementById(parent_tag_str+i).value;
 
  //         // sql injectionは認めない
  //         str=reject_str(str); 
  //         if(str===1) return false;

  //         // 顧客名と備考は空欄でもよい
  //         if(str==''&&((label[i]!='顧客名')||(label[i]!='備考'))){
  //           var p=document.createElement('p');
  
  //           p.classList.add('message');
  //           p.innerText=label[i]+'を入力してください。';
  //           message.appendChild(p);
    
  //           return false;

  //         }else{
  //           params.push('"'+str+'"');
  //         }
  
  //     }else{
  //       var str=document.getElementById(parent_tag_str+i).value;
  //       params.push(str);  
  //     }

  //   // カレンダーテーブルのとき
  //   }else if(table_name=='calendar'){
  //     // 文字列のとき
  //     if(label[i]=='予定'||label[i]=='メモ'){
  //       str=document.getElementById(parent_tag_str+i).value;
  //       str=reject_str(str);    
  //       if(str===1) return false;
        
  //       if(str==''&&(label[i]!='予定')){
  //         var p=document.createElement('p');

  //         p.classList.add('message');
  //         p.innerText=label[i]+'を入力してください。';
  //         message.appendChild(p);
  
  //         return false;

  //       }else{
  //         params.push('"'+str+'"');
  //       }

  //     // 日付はhiddenで渡される
  //     }else{
  //       str=document.getElementById(parent_tag_str+i).value;
  //       params.push('"'+str+'"');
  //     }

  //   }

  // }

  console.log('params are:');
  console.log(params);

  var query='insert into '+table_name+'(';
  
  for(var i=0;i<query_columns.length;i++){
      query+=query_columns[i];
        if(i!=query_columns.length-1) query+=',';
  }

  query+=') values(';

  for(var i=0;i<query_columns.length;i++){
    query+=params[i];
    if(i!=query_columns.length-1) query+=',';
  }

  query+=');';

  console.log('query:'+query);
  
  $.when(
    ajax_stmt_exec(table_name,query),
  ).done(function(results){
      
      if(table_name=='members'){

          create_members_input_form({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
            label:label,
            col:col,
            riyou:riyou,
            mode:mode,
          });
 
          // create_table({
          //   parent_tag_str:parent_tag_str,
          //   table_name:table_name,
          //   label:label,
          //   col:col,
          //   row:results
          // });

      }else if(table_name=='products'){

          create_products_input_form({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
            label:label,
            col:col,
            category:category,
            tax:tax,
            round:round,
            mode:mode,
          });

          // create_table({
          //   parent_tag_str:parent_tag_str,
          //   table_name:table_name,
          //   label:label,
          //   col:col,
          //   row:results
          // });    

      }else if(table_name=='calendar'){

        create_calendar_input_form({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          youbi:youbi
        });

      }

      create_table({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
        label:label,
        col:col,
        row:results
      });    

  });

}