function reject_str(str){

  try{

    if((str.indexOf('insert') != -1)||
       (str.indexOf('create') != -1)||
       (str.indexOf('alter') != -1)||
       (str.indexOf('begin') != -1)||
       (str.indexOf('start') != -1)||
        (str.indexOf('delete') != -1)||
        (str.indexOf('update') != -1)||
        (str.indexOf('database') != -1)||
        (str.indexOf('table') != -1)||
        (str.indexOf('view') != -1)||
        (str.indexOf('transaction') != -1)||
        (str.indexOf('from') != -1)||
        (str.indexOf('drop') != -1)||
        (str.indexOf('show') != -1)||
        (str.indexOf('change') != -1)||
        (str.indexOf('query') != -1)||
        (str.indexOf('root') != -1)||
        (str.indexOf(';') != -1)||
        (str.indexOf('*') != -1)||
        (str.indexOf('"') != -1)||
        (str.indexOf("'") != -1)||
        (str.indexOf('into') != -1) )
    {
      throw new Error('cannot use sql statement.');
    }else{
      return str;
    }
  }catch(e){
    console.log(e.message);
    return 1;
  }

}
//     var str=document.getElementById(table_name+ids[i]).value;

      // if((str.indexOf('insert') != -1)||
      //    (str.indexOf('create') != -1)||
      //    (str.indexOf('delete') != -1)||
      //    (str.indexOf('update') != -1)||
      //    (str.indexOf('database') != -1)||
      //    (str.indexOf('table') != -1)||
      //    (str.indexOf('view') != -1)||
      //    (str.indexOf('from') != -1)||
      //    (str.indexOf('drop') != -1)||
      //    (str.indexOf('into') != -1) )
      // {
      //   return false;
      // }
