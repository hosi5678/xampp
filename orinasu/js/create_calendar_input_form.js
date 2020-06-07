function create_calendar_input_form(parent_tag_str,table_name,youbi){

    // 画面の更新
    var parent_tag=childNodeClear(parent_tag_str+'_hyou');
    
    console.log('----- in create calendar input form ----- ');

    console.log('parent_tag_str:'+parent_tag_str);
    console.log('table_name:'+table_name);

    console.log('youbi is:');
    console.log(youbi);

    var curr=new Date();
    var currYear=curr.getFullYear();
		var currMonth=curr.getMonth();
		var currDate=curr.getDate();

    create_calendar({
      parent_tag_str:parent_tag_str,
      year:currYear,
			month:currMonth,
			date:currDate,
      youbi:youbi
    });
      
    var parent_tag=childNodeClear(parent_tag_str+'_params');

    // var form=document.createElement('form');
    // form.name=parent_tag_str+'_todo';

    var p=document.createElement('p');

    p.innerText='今日の予定';

    parent_tag.appendChild(p);

    var textarea=document.createElement('textarea');

    textarea.name=table_name+'_todo';
    textarea.rows=5;
    textarea.cols=80;

    // textarea.style.display='block';

    // form.appendChild(textarea);

    // parent_tag.appendChild(form);

    parent_tag.appendChild(textarea);

    var p=document.createElement('p');

    p.innerText='メモ';

    parent_tag.appendChild(p);


    var textarea=document.createElement('textarea');

    textarea.name=parent_tag_str+'_memo';
    textarea.rows=5;
    textarea.cols=80;

    parent_tag.appendChild(textarea);

    var a=document.createElement("a");

    a.href='#'+parent_tag_str;
    a.innerText='メモを書き込む';
    a.style.display='block';
    a.classList.add('a-insert');

    parent_tag.appendChild(a);


}