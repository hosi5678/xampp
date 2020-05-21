function create_calendar(parent_tag_str,year,month,day){

    console.log('in create calendar');

     // 画面の更新
     var parent_tag=document.getElementById(parent_tag_str+'_results');

     while(parent_tag.firstChild){
         parent_tag.removeChild(parent_tag.firstChild);
     }
 
     var form=document.createElement('form');
     form.name=parent_tag_str;

     var div_title=document.createElement('div');
     
     var div=document.createElement('div');
        div.id='year';
        div.innerText=year;
        div.style.display='inline-block';

     div_title.appendChild(div);

     var div=document.createElement('div');
        div.id='month';
        div.innerText=month;
        div.style.display='inline-block';

    div_title.appendChild(div);

     form.appendChild(div_title);

    //  var p=document.createElement('p');

    //  p.innerText=(month+1)+'月';

    //  form.appendChild(p);

     parent_tag.appendChild(form);

}