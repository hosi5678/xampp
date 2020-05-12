function product_price_calc(event){

  var parent_tag_str=event.target.parent_tag_str;
  var label=event.target.label;

  // tax,roundは配列
  var tax=event.target.tax;
  var round=event.target.round;

  var tanka;
  var kosuu;
  var tyousei;

  for(var i=0;i<label.length;i++){
 
    if(label[i]=='消費税'){
      for(var k=0;k<tax.length;k++){
        if(k==document.getElementById(parent_tag_str+i).value){
          tax=tax[k];
        }
      }
    }

    if(label[i]=='端数処理'){
      for(var k=0;k<round.length;k++){
        if(k==document.getElementById(parent_tag_str+i).value){
          round=round[k];
        }
      }
    }

    if(label[i]=='商品単価'){
      tanka=document.getElementById(parent_tag_str+i).value;
    }

    if(label[i]=='販売個数'){
      kosuu=document.getElementById(parent_tag_str+i).value;
    }

    if(label[i]=='調整額'){
      tyousei=document.getElementById(parent_tag_str+i).value;
    }
  }

  // alert(tax);
  // alert(round);

  var price=tanka*kosuu*(1+tax/100);

  if(round=='四捨五入'){
    price=Math.round(price);
  }else if(round=='切り上げ'){
    price=Math.ceil(price);
  }else if(round=='切り捨て'){
    price=Math.floor(price);
  }

  price=price+parseInt(tyousei);

  document.getElementsByName('calc')[0].value=price;

  // 確認用
  // document.form_products_insert.bikou.value=tax+'/'+round+'/'+tanka+'/'+kosuu+'/'+tyousei+'/'+price;
  // var str=document.form_members_update.bikou.value;
}