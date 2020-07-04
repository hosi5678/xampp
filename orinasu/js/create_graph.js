'use strict';

function create_graph({
	parent_tag_str,
	table_name,
}){

	console.log('--- in create graph ---');

	let query;

	const selectValue=document.getElementById(parent_tag_str+0).value;

	console.log('select value:'+selectValue);

	if(selectValue=='term'){
		query='select sales_date,category,sum(uriage) as "uriage" from products group by sales_date order by sales_date asc;';
	}else if(selectValue=='category'){
		query='select category, sum(uriage) as "uriage" from products group by category order by category asc;';
	}else if(selectValue=='tanka'){
		query=' select category,tanka,sum(uriage) as "uriage" from products group by category order by tanka asc;';
	}

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
	
						for(let j=0;j<category.length;j++){
							series.push(0);
						}

						for(let j=0;j<category.length;j++){
							for(let i=0;i<res.length;i++){
								if(category[j]==arrayNum_to_String({array:category,num:res[i].category})){
									series[j]+=parseInt(res[i].uriage);
								}
							}
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