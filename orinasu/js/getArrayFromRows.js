function getArrayFromRows(array,cols,rows){

  for(var j=0;j<rows.length;j++){
    for(var i=0;i<cols.length;i++){
      if(cols[i]=='id') continue;
      array.push(rows[j][cols[i]]);
    }
  }

  return array;

}