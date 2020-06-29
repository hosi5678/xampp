'use strict';
function call_barChart({parent_tag_str,series,xaxis}){

		console.log('--- in barChart---');
		console.log(series);
		console.log('xaxis:'+xaxis);

		Highcharts.setOptions({
			global:{
					useUTC: false
			}
		});

		chart=new Highcharts.Chart({

			chart:{
					renderTo:parent_tag_str+'_container',
					width:900,
					height:400,
			},
			title: {
					text: '売上状況',
			},
			subtitle: {
			},
			xAxis: {
					categories:xaxis,
			},
			yAxis: {
					title: {
							text: '総売上(円)'
					},
					plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
					}]
			},
			tooltip: {
					valueSuffix: '円',
			},
			// legend: {
			// 		layout: 'vertical',
			// 		align: 'right',
			// 		verticalAlign: 'middle',
			// 		borderWidth: 0
			// },

			series:[
				{
					type:'column',
					name:'売上',
					data:series
				}
			],
	});

}