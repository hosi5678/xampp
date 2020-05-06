function removeChild(param){

  while(param.firstChild){
    param.removeChild(param.firstChild);
  }

}