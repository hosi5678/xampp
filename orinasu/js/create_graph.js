'use strict';

function create_graph({
	parent_tag_str,
	table_name,
}){

	console.log('--- in create graph ---');

	let query;

	const yokojiku=document.getElementById(parent_tag_str+0).value;
	const tatejiku=document.getElementById(parent_tag_str+1).value;

	console.log('tatejiku:'+tatejiku);
	console.log('yokojiku:'+yokojiku);

	if(tatejiku=='uriage'){
		if(yokojiku=='term'){
			query='select sales_date,category,sum(uriage) as "uriage" from products group by sales_date order by sales_date asc;';
		}else if(yokojiku=='category'){
			query='select category, sum(uriage) as "uriage" from products group by category order by category asc;';
		}else if(yokojiku=='tanka'){
			query=' select category,tanka,sum(uriage) as "uriage" from products group by category order by tanka asc;';
		}
	}else if(tatejiku=='kosuu'){
		if(yokojiku=='term'){
			query='select sales_date,category,sum(kosuu) as "kosuu" from products group by sales_date order by sales_date asc;';
		}else if(yokojiku=='category'){
			query='select category, sum(kosuu) as "kosuu" from products group by category order by category asc;';
		}else if(yokojiku=='tanka'){
			query=' select category,tanka,sum(kosuu) as "kosuu" from products group by category order by tanka asc;';
		}

	}

	$.when(
		ajax_get_col('category'),
		ajax_select_from_table('category'),
		ajax_query_from_table(query),

	).done(function(category_cols,category_rows,res){
					
		console.log('--- results---');
		console.log(res);
		console.log(tatejiku);

		const category=getArrayFromRows({
			rows:category_rows,
			cols:category_cols
		});

				const series=new Array();
				const xaxis=new Array();

		if(yokojiku=='term'){

			for(let i=0;i<category.length;i++){
					series.push({name:category[i],data:new Array()});
				}

			if(res.length>0){							
				for(let j=0;j<res.length;j++){

					let time=Date.parse(res[j].sales_date);
					let tate=parseInt(res[j][tatejiku]);

					for(let i=0;i<category.length;i++){
						if(arrayNum_to_String({array:category,num:res[j].category})==series[i].name){
								series[i].data.push([time,tate]);
						}
					}
				}
			}
						
		}else if(yokojiku=='category'){
	
						for(let j=0;j<category.length;j++){
							series.push(0);
						}

						for(let j=0;j<category.length;j++){
							for(let i=0;i<res.length;i++){
								if(category[j]==arrayNum_to_String({array:category,num:res[i].category})){
									series[j]+=parseInt(res[i][tatejiku]);
								}
							}
						}

				}else if(yokojiku=='tanka'){

						let tmp=new Array();

						if(res.length>0){
							for(let j=0;j<res.length;j++){
									xaxis.push(parseInt(res[j].tanka));

									let tate=parseInt(res[j][tatejiku]);
				 				tmp.push(tate);
						
								}
								
								let title;
								if(tatejiku=='uriage'){
										title='売上';
								}else if(tatejiku=='kosuu'){
										title='個数';
								}

								series.push({name:title,data:tmp})

						}
				}

		let yAxis_title;
		let tanni;
		console.log('tatejiku:'+tatejiku);

		if(tatejiku=='uriage'){
				yAxis_title='売上(円)';
				tanni='円';
		}else if(tatejiku=='kosuu'){
				yAxis_title='個数';
				tanni='個';
		}

		console.log('yAxis:'+yAxis_title);		

		if(yokojiku=='term'){
			call_stockChart({parent_tag_str:parent_tag_str,series:series,yAxis_title:'期間ごとの'+yAxis_title,tanni:tanni});
		}else if(yokojiku=='category'){
			call_barChart({parent_tag_str:parent_tag_str,series:series,xaxis:category,yAxis_title:'カテゴリーごとの'+yAxis_title,tanni:tanni});
		}else if(yokojiku=='tanka'){
			call_lineChart({parent_tag_str:parent_tag_str,series:series,xaxis:xaxis,yAxis_title:'単価ごとの'+yAxis_title,tanni:tanni});
		}

	});

}