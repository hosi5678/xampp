'use strict';
function create_gantt_input_form({          
  parent_tag_str,
  table_name,
  label,
  col,
	youbi,
	}){

	// localize,localize
	moment.locale('ja');
	const m=moment();

		const year=m.get('year');
		const month=m.get('month');
		const date=m.get('date');

	console.log('--- in create gantt chart ---');
	console.log(label);
	console.log(col);
	console.log(parent_tag_str);

	// const parent_tag=document.getElementById(parent_tag_str+'_hyou');

	// let a=document.createElement('a');
	// a.innerText='タイムラインの追加';

	// parent_tag.appendChild(a);

	create_h_calendar({
		parent_tag_str:parent_tag_str,
		table_name:table_name,
		year:year,
		month:month,
		date:date,
		youbi:youbi,
	});


}