'use strict';

function create_calendar_input_form({
  parent_tag_str:parent_tag_str,
  table_name:table_name,
  label:label,
  col:col,
  youbi:youbi
}){

    // 画面の更新
    // var parent_tag=childNodeClear(parent_tag_str+'_hyou');
    
    console.log('----- in create calendar input form ----- ');

    // console.log('parent_tag_str:'+parent_tag_str);
    // console.log('table_name:'+table_name);

    // console.log('label is:');
    // console.log(label);

    // console.log('col is:');
    // console.log(col);

		// localize,localize
		moment.locale('ja');

    const m=moment();
    
    create_calendar({
      parent_tag_str:parent_tag_str,
      table_name:table_name,
      year:m.get('year'),
			month:m.get('month'),
      youbi:youbi,
      label:label,
      col:col
    });
      
}