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
    query='select sales_date,category,sum(uriage) as uriage from products group by category order by sales_date asc;';
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
    console.log(res);

    console.log(Date.parse(res[0]['sales_date'])*1000)
  });

}