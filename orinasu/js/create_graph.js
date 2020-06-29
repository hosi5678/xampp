'use strict';

function create_graph({
  parent_tag_str,
  table_name,
}){

  console.log('--- in create graph ---');

  // console.log('parent tag str:'+parent_tag_str);
  // console.log('table name:'+table_name);

  let query;

  const selectValue=document.getElementById(parent_tag_str+0).value;

  console.log('select value:'+selectValue);

  if(selectValue=='term'){
    query='select sales_date,category,uriage from products order by sales_date asc;';
  }

  // console.log(query);

  $.when(
    ajax_get_col('category'),
    ajax_select_from_table('category'),
    ajax_query_from_table(query),

  ).done(function(category_cols,category_rows,res){
          
    const category=getArrayFromRows({
      rows:category_rows,
      cols:category_cols
    });

    const series=new Array();

    for(let i=0;i<category.length;i++){
      // オブジェクトをプッシュしていく。
      series.push({name:category[i],data:new Array()});
    }

    if(res.length>0){
      for(let j=0;j<res.length;j++){
        for(let i=0;i<category.length;i++){
      
          if(arrayNum_to_String({array:category,num:res[j].category})==series[i].name){
            let time=Date.parse(res[j].sales_date);
            let uriage=parseInt(res[j].uriage);
    
            series[i].data.push([time,uriage]);
          }
        }

      }
    }

    call_stockChart({parent_tag_str:parent_tag_str,series:series});

  });

}