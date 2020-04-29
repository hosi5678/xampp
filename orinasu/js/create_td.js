function create_td(){
  // tr
  var tr=arguments[0];

  // console.log(arguments.length);
  //  console.log(arguments[0]);
  
  for(i=1;i<arguments.length;i++){

    var td=document.createElement('td');
    td.innerText=arguments[i];

    tr.appendChild(td);

  }

  return tr;

}