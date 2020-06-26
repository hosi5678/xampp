'use strict';
function arrayNum_to_String({array,num}){

  var str='';

  if(array.length==0){
    return false;
  }else{

    for(var i=0;i<array.length;i++){
      if(i==num){
        str=array[i];
      }
    }

    return str;

  }

}