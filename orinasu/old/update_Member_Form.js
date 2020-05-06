function update_Member_Form(tag_name_str,youbi,riyou,id,myouji,namae,mon,tue,wed,thu,fri,sat){

  var tag_name=document.getElementById(tag_name_str);

  removeChild(tag_name);

  var form=document.createElement('form');
  // form.id=id;

  var table=document.createElement('table');
  var tr=document.createElement('tr');
  // tr.id=id;

  var td=document.createElement('td');

  var myouji_txt=document.createElement('input');
  myouji_txt.id='myouji';

  myouji_txt.type='text';
  myouji_txt.value=myouji;

  td.appendChild(myouji_txt);
  tr.appendChild(td);

  var td=document.createElement('td');
  var namae_txt=document.createElement('input');

  namae_txt.id='namae';
  namae_txt.type='text';
  namae_txt.value=namae;

  td.appendChild(namae_txt);
  tr.appendChild(td);

  table.appendChild(tr);

  form.appendChild(table);

  tag_name.appendChild(form);

  var table=document.createElement('table');

  var tr=document.createElement('tr');

  for(var i=0;i<youbi.length;i++){
      if(i==0) continue;

      var td=document.createElement('td');
      var select=document.createElement('select');

      select.id='day0'+i;

      for(var j=0;j<riyou.length;j++){
          if((youbi[i].content==='土') & ((riyou[j].content==='終日')|((riyou[j].content==='午後')))) continue; 
          var option=document.createElement('option');
          option.value=j;
        //  console.log(riyou_keitai[j].content);
          option.innerText=riyou[j].content;

          if(i==1){
            if(riyou[j].content==mon) option.selected=true;
          }

          if(i==2){
            if(riyou[j].content==tue) option.selected=true;
          }

          if(i==3){
            if(riyou[j].content==wed) option.selected=true;
          }

          if(i==4){
            if(riyou[j].content==thu) option.selected=true;
          }

          if(i==5){
            if(riyou[j].content==fri) option.selected=true;
          }

          if(i==6){
            if(riyou[j].content==sat) option.selected=true;
          }

          option.value=j;

          select.appendChild(option);

          td.appendChild(select);

          tr.appendChild(td);
          table.appendChild(tr);

          form.appendChild(table);
          tag_name.appendChild(form);

      }

  }

  var div=document.createElement('div');

  var input=document.createElement('input');
  input.type='button';
  input.value='修正する';
  input.style = 'width: 100px;height: 20px';
 // input.style.display='inline-block';
  input.addEventListener('click',ajax_update_members);

  input.id=id;

  div.appendChild(input);
  form.appendChild(div);

  // var input=document.createElement('input');
  // input.type='hidden';
  // input.id='hidden';
  // input.value=id;

  // div.appendChild(input);
  // form.appendChild(div);

  tag_name.appendChild(form);
  
}

