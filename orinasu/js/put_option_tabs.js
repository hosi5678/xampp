//function put_option_tabs(){
function put_option_tabs(result,tag_name){

  var tag_name = document.getElementById(tag_name);
  console.log('in option tabs');
 
  var select=document.createElement('select');

  var option=document.createElement('option');
  option.innerHTML='選択してください';

  select.appendChild(option);

  for(var i=0;i<result.length;i++){
    if(result[i].content==='日') continue;

    var option=document.createElement('option');
    option.value=i;
    option.innerHTML=result[i].content;
    select.appendChild(option);
  }

  tag_name.appendChild(select);

}
