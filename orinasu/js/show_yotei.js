'use strict';

function show_yotei(event){

  var id=event.target.id;
  var table_name=event.target.table_name;
  // var col='date';

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

  $.when(    
    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),
    // ajax_select_from_where(table_name+'_join')
    ajax_select_from_where({
      table_name:table_name,
      col:'date',
      key:id
    }),

  ).done(function(label,col,row){

    console.log(label);
    console.log(col);
    console.log(row);
    
  });


}