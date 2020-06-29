'use strict';

function show_yotei({
  id,
  parent_tag_str,
  table_name,
  label,
  col,
  youbi
}){

  var key=id;

  childNodeClear(parent_tag_str+'_message');

  console.log('---show yotei---');
  // console.log('id:'+id);
  // console.log('table_name:'+table_name);
  // console.log('parent_tag_str:'+parent_tag_str);

  var ymd=new Array();

  ymd=id.split('-');

  console.log(ymd);

  var year=ymd[0];
  var month=ymd[1];
  var date=ymd[2];

  var thisDate=new Date(year,month-1,date);
  var youbiNum=thisDate.getDay();

  var title=childNodeClear(parent_tag_str+'_title');
  title.innerText=year+'年'+remove_zero(month)+'月'+remove_zero(date)+'日'+'('+youbi[youbiNum]+')';

  console.log('year:'+year);
  console.log('month:'+month);
  console.log('date:'+date);

  for(var i=0;i<label.length;i++){
    if(label[i]=='日付'){
      document.getElementById(parent_tag_str+i).value=year+'-'+month+'-'+date;
    }
  }

  $.when(    
    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),

    ajax_select_from_where({
      table_name:table_name,
      col:'date',
      key:key
    }),

  ).done(function(label,col,row){

    // 内容を一旦クリア
    for(var i=0;i<label.length;i++){
      if(label[i]=='メモ'||label[i]=='予定'){
        document.getElementById(parent_tag_str+i).value='';
      }
    }

    if(row.length>0){

      for(var i=0;i<label.length;i++){
        if(label[i]=='メモ'||label[i]=='予定'){
          document.getElementById(parent_tag_str+i).value=row[0][label[i]];
        }
      }

      var exec=create_exec({
        parent_tag_str:parent_tag_str,
        sub_tag_str:'_exec',
        table_name:table_name,
        label:label,
        col:col,
        mode:'update', // update table
        class_str:'a-mod',
        id:'"'+id+'"',
      });


      var a=document.createElement("a");

      a.href='#'+parent_tag_str;

      a.innerText='戻る';

      a.addEventListener('click',

        function(event){
          create_calendar_input_form({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
            label:label,
            col:col,
            youbi:youbi
          })
        }
      );

      exec.appendChild(a);

    }else{

      create_exec({
        parent_tag_str:parent_tag_str,
        sub_tag_str:'_exec',
        table_name:table_name,
        label:label,
        col:col,
        mode:'insert', 
        class_str:'a-insert',
        youbi:youbi,
    });

    }
    
  });


}