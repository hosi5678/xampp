'use strict';

function toDoubleDigits(num){
 
  // 数値を文字列に変換
  num += "";

  // 1文字なら"0"を付加
  if (num.length === 1) {
    num = "0" + num;
  }

  return num;     

}