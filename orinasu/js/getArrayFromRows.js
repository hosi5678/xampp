'use strict';

function getArrayFromRows({rows,cols}){

  const array=new Array();

  for(let j=0;j<rows.length;j++){
    for(let i=0;i<cols.length;i++){
      if(cols[i]=='id') continue;
      array.push(rows[j][cols[i]]);
    }
  }

  return array;

}