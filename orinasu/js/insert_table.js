'use strict';

function insert_table(event){

  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;

  var label=event.target.label;
  var col=event.target.col;
 
  var youbi;
  var riyou;

  var tax;
  var category;
  var round;

  var mode=event.target.mode;

  if(table_name=='members'){
    riyou=event.target.riyou;
  }else if(table_name=='products'){
    category=event.target.category;
    tax=event.target.tax;
    round=event.target.round;
  }else if(table_name='calendar'){
    youbi=event.target.youbi;
  }

  console.log('-----in insert table-----');
  console.log('table name:'+table_name);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('col:'); // 10
  console.log(col);
  console.log('label is:');
  console.log(label);
  console.log('event type:'+event.type);

  // mode='insert';
 
  var query_columns=new Array();

  for(var i=0;i<col.length;i++){
    if(col[i]=='id') continue;
      query_columns.push(col[i]);
  }

  console.log('query_columns:'+query_columns);
  console.log('query columns length:'+query_columns.length);

  // input 部品の値を取得
  var params=new Array();

  params=get_input_value({
    parent_tag_str:parent_tag_str,
    table_name:table_name,
    label:label,
    params:params
  });

  console.log('params are:');
  console.log(params);

  var query='insert into '+table_name+'(';
  
  for(var i=0;i<query_columns.length;i++){
      query+=query_columns[i];
        if(i!=query_columns.length-1) query+=',';
  }

  query+=') values(';

  for(var i=0;i<query_columns.length;i++){
    query+=params[i];
    if(i!=query_columns.length-1) query+=',';
  }

  query+=');';

  console.log('query:'+query);
  
  $.when(
    ajax_stmt_exec(table_name,query),
  ).done(function(results){
      
      if(table_name=='members'){

        create_members_input_form({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          riyou:riyou,
          mode:mode,
        });
 
      }else if(table_name=='products'){

        create_products_input_form({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          category:category,
          tax:tax,
          round:round,
          mode:mode,
        });

      }else if(table_name=='calendar'){

        var ymd=document.getElementById(table_name+1).value;
        console.log('ymd:'+ymd);
        var tmp=new Array();
        tmp=ymd.split('-');

        var year=parseInt(tmp[0]);
        var month=parseInt(remove_zero(tmp[1]))-1;

        console.log('year:'+year);
        console.log('month:'+(month+1));

        create_calendar({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          youbi:youbi,
          year:year,
          month:month
        });

      }

      var status=document.getElementById(parent_tag_str+'_status');
      status.innerText='記入が完了しました。';

      $('#'+parent_tag_str+'_status').show(2000,function(){
        $('#'+parent_tag_str+'_status').hide(2500);
      });

      create_table({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
        label:label,
        col:col,
        row:results
      });    

  });

}