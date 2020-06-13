'use strict';

function show_yotei(event){

  var id=event.target.id;
  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;
  var youbi=event.target.youbi;
  var label=event.target.label;

  var col='date';
  var key=id;

  console.log('---show yotei---');
  console.log('id:'+id);
  console.log('table_name:'+table_name);
  console.log('parent_tag_str:'+parent_tag_str);

  var ymd=new Array();

  ymd=id.split('-');

  console.log(ymd);

  var year=ymd[0];
  var month=ymd[1];
  var date=ymd[2];

  var thisDate=new Date(year,month-1,date);
  var youbiNum=thisDate.getDay();

  var title=childNodeClear(parent_tag_str+'_title');
  title.innerText=year+'年'+month+'月'+date+'日'+'('+youbi[youbiNum]+')';

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
      col:col,
      key:key
    }),

  ).done(function(label,col,row){

    console.log(label);
    console.log(col);
    console.log(row);

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

      var title=childNodeClear(parent_tag_str+'_exec');
      var a=document.createElement('a');
      a.innerText='メモを修正する';
      a.addEventListener('click',update_table);
      a.id=id;
      a.table_name=table_name;

      title.appendChild(a);

    }else{
      var title=childNodeClear(parent_tag_str+'_exec');
      var a=document.createElement('a');
      a.innerText='メモを記入する';
      a.addEventListener('click',insert_table);
      a.id=id;
      a.table_name=table_name;

      title.appendChild(a);

    }
    
  });


}