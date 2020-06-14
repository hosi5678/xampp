'use strict';

function remove_zero(str){

    var num;

    // 文字列が空のとき
    if(str==''){
        return false;
    }

    if(str.length==1){
      return parseInt(num);
    }else{

    	for(var i=0;i<str.length;i++){
        if(str[i]=='0') continue;
        	num=str[i];
			}

			return parseInt(num);

	}

}