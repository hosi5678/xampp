function product_price_calc(event){

  var parent_tag_str=event.target.parent_tag_str;
  var label=event.target.label;

  var tax=event.target.tax;
  var round=event.target.round;


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
  }

  alert(tax);
  alert(round);


  document.getElementsByName('calc')[0].value=tax;

}