'use strict';

function create_graph({
  parent_tag_str,
  table_name,
}){

  console.log('--- in create graph ---');

  console.log('parent tag str:'+parent_tag_str);
  console.log('table name:'+table_name);

  var query;

  var selectValue=document.getElementById(parent_tag_str+0).value;

  console.log('select value:'+selectValue);

  if(selectValue=='term'){
    query='select sales_date,category,uriage from products order by sales_date asc;';
  }

  console.log(query);

  $.when(
    ajax_get_col('category'),
    ajax_select_from_table('category'),
    ajax_query_from_table(query),

  ).done(function(category_cols,category_rows,res){

    var category=new Array();
          
    category=getArrayFromRows({
      array:category,
      rows:category_rows,
      cols:category_cols
    });

    console.log(category);
    console.log('res:');
    console.log(res);

    if(res.length>0){
      var series=new Array();

      for(var i=0;i<res.length;i++){
        var name=arrayNum_to_String({array:category,num:res[i].category});
        var data=new Array();
        console.log(name);
        console.log(Date.parse(res[i]['sales_date']));
        var time=Date.parse(res[i]['sales_date']);
        var uriage=parseInt(res[i].uriage);
        data.push([time,uriage]);
        series.push({name:name,data:data});
      }

      console.log('series:');
      console.log(series);
      call_stockChart({parent_tag_str:parent_tag_str,series:series});
    }
  });

}