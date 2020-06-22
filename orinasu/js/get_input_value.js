'use strict';

function get_input_value({parent_tag_str,table_name,label,params}){

  console.log('---get_input_value---');
  
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('table_name:'+table_name);

  console.log('label:');
  console.log(label);

  console.log('params:');
  console.log(params);

  var status=childNodeClear(parent_tag_str+'_status');
  
  var str;

  for(var i=0;i<label.length;i++){

    if(label[i]=='id') continue;

    // メンバーテーブルのとき
    if(table_name=='members'){

      // 文字列のとき
      if((label[i]=='姓')||
         (label[i]=='名')||
         (label[i]=='備考')){

        str=document.getElementById(parent_tag_str+i).value;

        // sql injectionは認めない
        str=reject_str(str);

        if(str===1) return false;

        // 名と備考は空欄でも良い
        if(str==''&&(label[i]=='姓')){

          var p=document.createElement('p');
          p.classList.add('message');
          p.innerText=label[i]+'を入力してください。';
          status.appendChild(p);
  
          return false;

        }else{
          params.push('"'+str+'"');
        }

      }else{
        var str=document.getElementById(parent_tag_str+i).value;
        params.push(str);  
      }

    // 商品テーブルのとき
    }else if(table_name=='products'){
      // 文字列のとき
      if((label[i]=='商品名')||
         (label[i]=='顧客名')||
         (label[i]=='販売場所')||
         (label[i]=='販売日')||
         (label[i]=='備考')){

          str=document.getElementById(parent_tag_str+i).value;
 
          // sql injectionは認めない
          str=reject_str(str); 
          if(str===1) return false;

          // 顧客名と備考は空欄でもよい
          if(str==''&&((label[i]=='商品名')||(label[i]=='販売日'))){

            var p=document.createElement('p');
  
            p.classList.add('message');
            p.innerText=label[i]+'を入力してください。';
            status.appendChild(p);
    
            return false;

          }else{
            params.push('"'+str+'"');
          }
  
      }else{
        var str=document.getElementById(parent_tag_str+i).value;
        params.push(str);  
      }

    // カレンダーテーブルのとき
    }else if(table_name=='calendar'){
      // 文字列のとき
      if(label[i]=='予定'||label[i]=='メモ'){
        str=document.getElementById(parent_tag_str+i).value;
        str=reject_str(str);    
        if(str===1) return false;
        
        // 予定が入力されていないとき
        if(str==''&&(label[i]!='予定')){
          var p=document.createElement('p');

          p.classList.add('message');
          p.innerText=label[i]+'を入力してください。';
          status.appendChild(p);
  
          return false;

        }else{
          params.push('"'+str+'"');
        }

      // 日付はhiddenで渡される
      }else{
        str=document.getElementById(parent_tag_str+i).value;
        params.push('"'+str+'"');
      }

    }

  }

  return params;

}