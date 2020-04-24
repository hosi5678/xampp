//function put_option_tabs(){
function put_option_tabs(data){

  var select = document.getElementById('select');
  console.log('in option tabs');
  console.log(data);
  console.log(data.length);

  for(var i=0;i<data.length;i++){
    console.log(data[i].id);
    console.log(data[i].youbi);
  }
//  data.forEach(([key,value]) => {
//    console.log(key);
//    console.log(value);
//  });

}
