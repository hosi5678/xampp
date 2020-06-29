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
  }else if(selectValue=='category'){
    query='select category, sum(uriage) as "uriage" from products group by category order by category asc;';
  }else if(selectValue=='tanka'){
				query=' select category,tanka,sum(uriage) as "uriage" from products group by category order by tanka asc;';
		}

  // console.log(query);

  $.when(
    ajax_get_col('category'),
    ajax_select_from_table('category'),
    ajax_query_from_table(query),

  ).done(function(category_cols,category_rows,res){
          
    console.log('--- results---');
    console.log(res);

    const category=getArrayFromRows({
      rows:category_rows,
      cols:category_cols
    });

				const series=new Array();
				const xaxis=new Array();

    if(selectValue=='term'){

      for(let i=0;i<category.length;i++){
      		series.push({name:category[i],data:new Array()});
						}

						if(res.length>0){							
							for(let j=0;j<res.length;j++){

        let time=Date.parse(res[j].sales_date);
        let uriage=parseInt(res[j].uriage);

          for(let i=0;i<category.length;i++){
            if(arrayNum_to_String({array:category,num:res[j].category})==series[i].name){
                series[i].data.push([time,uriage]);
            }
          }
        }
						}
						
    }else if(selectValue=='category'){
	
						for(let i=0;i<category.length;i++){
							series.push(0);
						}

						for(let j=0;j<res.length;j++){
							series[j]=parseInt(res[j].uriage);
						}

				}else if(selectValue=='tanka'){

						let tmp=new Array();

						if(res.length>0){
							for(let j=0;j<res.length;j++){
									xaxis.push(parseInt(res[j].tanka));

									let uriage=parseInt(res[j].uriage);
         tmp.push(uriage);
            
								}
								
								series.push({name:'売上',data:tmp})

						}
							console.log('xaxis:');
								console.log(xaxis);
								console.log('series');
								console.log(series);
				}

    if(selectValue=='term'){
      call_stockChart({parent_tag_str:parent_tag_str,series:series});
    }else if(selectValue=='category'){
      call_barChart({parent_tag_str:parent_tag_str,series:series,xaxis:category});
    }else if(selectValue=='tanka'){
					 call_lineChart({parent_tag_str:parent_tag_str,series:series,xaxis:xaxis});
				}

  });

}