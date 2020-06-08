'use strict';

function show_yotei(event){

  var id=event.target.id;
  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;

  var col='date';
  var key=id;

  console.log('---show yotei---');
  console.log('id:'+id);
  console.log('table_name:'+table_name);

  var ymd=new Array();

  ymd=id.split('-');

  console.log(ymd);

  var year=ymd[0];
  var month=ymd[1];
  var date=ymd[2];

  console.log('year:'+year);
  console.log('month:'+month);
  console.log('date:'+date);

  // var query='select * from '+table_name+' where date='+id+';';

  $.when(    
    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),
    // ajax_select_from_where({table_name,query})
    ajax_select_from_where({
      table_name:table_name,
      col:col,
      key:key
    }),

  ).done(function(label,col,row){

    console.log(label);
    console.log(col);
    console.log(row);
    console.log(row[0]['メモ'])

    for(var i=0;i<label.length;i++){
      if(label[i]=='メモ'||label[i]=='予定'){
        document.getElementById(parent_tag_str+i).value=row[0][label[i]];
      }

    }
    
  });


}