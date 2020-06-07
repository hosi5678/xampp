function create_calendar_input_form({
  parent_tag_str:parent_tag_str,
  table_name:table_name,
  label:label,
  col:col,
  youbi:youbi
}){

    // 画面の更新
    var parent_tag=childNodeClear(parent_tag_str+'_hyou');
    
    console.log('----- in create calendar input form ----- ');

    console.log('parent_tag_str:'+parent_tag_str);
    console.log('table_name:'+table_name);

    console.log('label is:');
    console.log(label);

    console.log('col is:');
    console.log(col);

    var curr=new Date();
    var currYear=curr.getFullYear();
		var currMonth=curr.getMonth();
    var currDate=curr.getDate();
    
    var today=currYear+'年'+(currMonth+1)+'月'+currDate+'日('+youbi[curr.getDay()]+')';

    create_calendar({
      parent_tag_str:parent_tag_str,
      table_name:table_name,
      year:currYear,
			month:currMonth,
			date:currDate,
      youbi:youbi
    });
      
    var parent_tag=childNodeClear(parent_tag_str+'_params');

    // var form=document.createElement('form');
    // form.name=parent_tag_str+'_todo';

    var form=document.createElement('form');
    form.name='form_'+parent_tag_str+'_insert';

    for(var i=0;i<label.length;i++){

      if(label[i]=='id') continue;

      if(label[i]=='日付'){
        var input=document.createElement('input');

        input.type='hidden';
        input.id='calendar'+(i);
        input.value=currYear+'-'+(currMonth+1)+'-'+currDate;
        form.appendChild(input);
      }

      if(label[i]=='予定'){
        var p=document.createElement('p');

        p.innerText='今日'+today+'の予定';
        form.appendChild(p);

        var textarea=document.createElement('textarea');

        textarea.id='calendar'+(i);
        textarea.rows=5;
        textarea.cols=80;
        textarea.style.display='block';
        textarea.name='todo';
        form.appendChild(textarea);

      }

      if(label[i]=='メモ'){
        var p=document.createElement('p');

        p.innerText='今日のメモ';
        form.appendChild(p);

        var textarea=document.createElement('textarea');

        textarea.id='calendar'+(i);
        textarea.rows=5;
        textarea.cols=80;
        textarea.style.display='block';
        textarea.name='memo';
        form.appendChild(textarea);

      }
     
    }

    var exec=childNodeClear(parent_tag_str+'_exec');

    var a=document.createElement("a");

    a.href='#'+parent_tag_str;
    a.innerText='メモを書き込む';
    a.style.display='block';
    a.classList.add('a-insert');

    a.addEventListener('click',insert_table);
        
    a.parent_tag_str=parent_tag_str;
    a.table_name=table_name;
    a.label=label;
    a.col=col;
    a.youbi=youbi;
    a.mode='insert';
 
    exec.appendChild(a);

    parent_tag.appendChild(form);


}