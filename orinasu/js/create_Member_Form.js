function create_Member_Form(tag_name_str,youbi,riyou_keitai){

// console.log('in create member form');
// console.log(youbi);
// console.log(riyou_keitai);

  var tag_name=document.getElementById(tag_name_str);

  removeChild(tag_name);

  var form=document.createElement('form');
  form.name='form1';

  var table=document.createElement('table');
  var tr=document.createElement('tr');

  var td=document.createElement('td');
  var myouji=document.createElement('input');
  myouji.type='text';
  myouji.id='myouji';
  myouji.placeholder='姓';
  td.appendChild(myouji);
  tr.appendChild(td);

  var namae=document.createElement('input');
  namae.type='text';
  namae.id='namae';
  namae.placeholder='名';

  var td=document.createElement('td');

  td.appendChild(namae);
  tr.appendChild(td);

  table.appendChild(tr);

  form.appendChild(table);

  var table=document.createElement('table');

  var tr=document.createElement('tr');

  for(var i=0;i<youbi.length;i++){
    // 日曜日は表示しない
    if(youbi[i].content==='日') continue;
    
       var td=document.createElement('td');

        td.innerText=youbi[i].content;

        tr.appendChild(td);

        var td=document.createElement('td');
        var select=document.createElement('select');
        select.id='day0'+i;

        for(var j=0;j<riyou_keitai.length;j++){
            if((youbi[i].content==='土') & ((riyou_keitai[j].content==='終日')|((riyou_keitai[j].content==='午後'))))continue; 
            var option=document.createElement('option');
            option.value=j;
          //  console.log(riyou_keitai[j].content);
            option.innerText=riyou_keitai[j].content;

            select.appendChild(option);

            td.appendChild(select);

            tr.appendChild(td);
        }

      }

      table.appendChild(tr);
      form.appendChild(table);

    // var td=document.createElement('td');

    var input=document.createElement('input');
    input.type='button';
    input.value='登録する';
    input.style = 'width: 100px;height: 20px';
   // input.style.display='inline-block';
    input.addEventListener('click',ajax_insert_into_members);

    // td.appendChild(input);
    // tr.appendChild(td);

    form.appendChild(input);

    tag_name.appendChild(form);
  
}