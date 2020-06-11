'use strict';

function create_calendar({parent_tag_str,table_name,year,month,youbi,label,col}){

		// var parent_tag_str='calendar';
		// var table_name='calendar';

    console.log('------in create calendar------');

		console.log('youbi is:');
		console.log(youbi);

		console.log('label is:');
		console.log(label);

		console.log('col is:');
		console.log(col);

		console.log('year:'+year+' / month:'+(month+1));

		console.log('table name:'+table_name);

		// 現在の日付の取得
		var curr=new Date();
    var currYear=curr.getFullYear();
		var currMonth=curr.getMonth();
		var currDate=curr.getDate();

		console.log('curr year:'+currYear+' / curr month:'+(currMonth+1)+' / '+currDate);

		
		var today=currYear+'年'+(currMonth+1)+'月'+currDate+'日('+youbi[curr.getDay()]+')';
		
		console.log('today:'+today);

    var title=childNodeClear(parent_tag_str+'_title');

		title.innerText=today;
		
		// 今月の取得
		var thisMonth=new Date(year,month,1);
		
		// 先月の末尾を取得する
		var prevMonth_lastday=new Date(year,month,0);

		// 今月の末尾を取得する
		var currMonth_lastday=new Date(year,(month+1),0);
		 
		// 来月の初日を取得する
		var nextMonth_firstday=new Date(year,(month+1),1);

		// 現カレンダーの先月の開始日
		var where_start_date;

		if(thisMonth.getDay()==0){
			where_start_date=thisMonth.getFullYear()+'-'
			+toDoubleDigits(thisMonth.getMonth()+1)+'-'
			+toDoubleDigits(1);
		}else{
			where_start_date=prevMonth_lastday.getFullYear()+'-'
			+toDoubleDigits(prevMonth_lastday.getMonth()+1)+'-'
			+toDoubleDigits(prevMonth_lastday.getDate()-prevMonth_lastday.getDay());
		}
		
		console.log('where start date:'+where_start_date);

		// 現カレンダーの来月の末尾

		var where_end_date;

		if(currMonth_lastday.getDay()==6){
			where_end_date=currMonth_lastday.getFullYear()+'-'
			+toDoubleDigits(currMonth_lastday.getMonth()+1)+'-'
			+toDoubleDigits(currMonth_lastday.getDate());
		}else{
			where_end_date=nextMonth_firstday.getFullYear()+'-'
			+toDoubleDigits(nextMonth_firstday.getMonth()+1)+'-'
			+toDoubleDigits(nextMonth_firstday.getDate()+(6-nextMonth_firstday.getDay()));
		}

		console.log('where end date:'+where_end_date);

		 // 画面の更新
		var parent_tag=childNodeClear(parent_tag_str+'_hyou');
 
    var div_title=document.createElement('div');
     		 
		var div=document.createElement('div');

		div.classList.add('calendar-left-arrow');
		div.style.display='inline-block';
		div.innerText='◀';
		div.youbi=youbi;

		div.addEventListener('click',function(event){

			month=month-1;

			if(month<0){
				month=11;
				year=year-1;
			}

			create_calendar({
				parent_tag_str:parent_tag_str,
				table_name:table_name,
				year:year,
				month:month,
				youbi:youbi,
				label:label,
				col:col
			});
			
		});

		div_title.appendChild(div);

		var a=document.createElement('a');

		a.innerText='今月';
		a.youbi=youbi;

		a.href='#';

		a.addEventListener('click',function(event){
	
			create_calendar({
				parent_tag_str:parent_tag_str,
				table_name:table_name,
				year:currYear,
				month:currMonth,
				youbi:youbi,
				label:label,
				col:col
			});
		});

		div_title.appendChild(a);

		var div=document.createElement('div');
		div.style.display='inline-block';
		div.classList.add('calendar-right-arrow');
		div.innerText='▶';
		div.youbi=youbi;

		div.addEventListener('click',function(event){
			console.log(div.innerText);
			console.log(year);

			month=month+1;

			if(month==12){
				month=month-12;
				year=year+1;
			}

			create_calendar({
				parent_tag_str:parent_tag_str,
				table_name:table_name,
				year:year,
				month:month,
				youbi:youbi,
				label:label,
				col:col
			});

		});

		div_title.appendChild(div);

		parent_tag.appendChild(div_title);

		// parent_tag.appendChild(form);

		var div=document.createElement('div');

		var p=document.createElement('p');

		p.id='year';
		p.value=year;
		p.innerText=year+'年';
		p.style.display='inline';
	
		div.appendChild(p);

		var p=document.createElement('p');

		p.id='month';
		p.value=month;
		p.innerText=(month+1)+'月';
		p.style.display='inline';

		div.appendChild(p);
		
		div_title.appendChild(div);
		
		parent_tag.appendChild(div_title);

		var holidays = JapaneseHolidays.getHolidaysOf(thisMonth.getFullYear());

		var holidays_thisMonth=new Array();
 
		holidays.forEach(function(holiday) {

				if(holiday.month==(thisMonth.getMonth()+1)){
					holidays_thisMonth.push({
						date:
						thisMonth.getFullYear()+'-'
						+holiday.month+'-'
						+holiday.date,
						name:
						holiday.name
					});	
				}
		});

		var table=document.createElement('table');
		var thead=document.createElement('thead');
		var tbody=document.createElement('tbody');

		for(var i=0;i<youbi.length;i++){
			var th=document.createElement('th');

			if(youbi[i]=='日') th.classList.add('td-sun');
			if(youbi[i]=='土') th.classList.add('td-sat');

				th.innerText=youbi[i];
				thead.appendChild(th);
		}

		table.appendChild(thead);

		var thisMonthDate=1;

//  $.when(ajax関数群).done(function(引数){その後の処理});

		$.when(ajax_select_from_memo({table_name:table_name,start_date:where_start_date,end_date:where_end_date}))
		.done(function(memo){

			for(var j=0;j<getWeekNum(currMonth_lastday);j++){
				var tr=document.createElement('tr');
					// 最初の週の処理,先月
					if(j==0){
						if(prevMonth_lastday.getDay()!=6){
							for(var i=(prevMonth_lastday.getDate()-prevMonth_lastday.getDay());i<=prevMonth_lastday.getDate();i++){

								var td=document.createElement('td');

								td.classList.add('td-gray');
								td.classList.add('td-calendar');
								
								td.id=prevMonth_lastday.getFullYear()+'-'
								+toDoubleDigits(prevMonth_lastday.getMonth()+1)+'-'
								+toDoubleDigits(i);

								td.innerText=i;

								td.addEventListener('click',show_yotei);

								td.id=td.id;
								td.table_name=table_name;
								td.parent_tag_str=parent_tag_str;
								td.youbi=youbi;

								tr.appendChild(td);
							}
						}

						// 最初の週の処理,今月
						for(var i=thisMonth.getDay();i<7;i++){

								var td=document.createElement('td');

								td.classList.add('td-calendar');

								if(i==0) td.classList.add('td-sun');	
								if(i==6) td.classList.add('td-sat');

								td.id=thisMonth.getFullYear()+'-'+toDoubleDigits(thisMonth.getMonth()+1)+'-'+toDoubleDigits(thisMonthDate);

								if(year==currYear && month==currMonth && thisMonthDate==currDate) td.classList.add('td-today');

								for(var k=0;k<holidays_thisMonth.length;k++){
									if(holidays_thisMonth[k].date==td.id){
										td.classList.add('td-shukujitu');

										td.title=holidays_thisMonth[k].name;
										
										$('#'+td.id).tooltip({
											show: {
												effect:"size",
												delay:50
											},		
											hide: {
												effect:"size",
												delay:50
											}
										});

									}
								}

								td.innerText=thisMonthDate;

								td.addEventListener('click',show_yotei);

								td.id=td.id;
								td.table_name=table_name;
								td.parent_tag_str=parent_tag_str;
								td.youbi=youbi;

								for(var p=0;p<memo.length;p++){
									for(var q=0;q<label.length;q++){
										if(label[q]=='日付'){
											if(memo[p][label[q]]==td.id){
												console.log('td-memo:matched.')
												td.innerText+='\n●';
											}
									}
									}
								}


								tr.appendChild(td);
								thisMonthDate=thisMonthDate+1;
						}

					// 今月(本体)の処理(1-30,31)
					}else if(j<(getWeekNum(currMonth_lastday))){
						
						for(var i=0;i<7;i++){
							if(thisMonthDate<=currMonth_lastday.getDate()){
								
								var td=document.createElement('td');

								td.classList.add('td-calendar');

								if(i==0) td.classList.add('td-sun');	
								if(i==6) td.classList.add('td-sat');

								if(year==currYear && month==currMonth && thisMonthDate==currDate) td.classList.add('td-today');

								td.id=thisMonth.getFullYear()+'-'
								+toDoubleDigits(thisMonth.getMonth()+1)+'-'
								+toDoubleDigits(thisMonthDate);

								for(var k=0;k<holidays_thisMonth.length;k++){
									if(holidays_thisMonth[k].date==td.id){
										td.classList.add('td-shukujitu');
										td.title=holidays_thisMonth[k].name;
										
										$('#'+td.id).tooltip({
											show:{
												effect:"size",
												delay:50
											},		
											hide:{
												effect:"size",
												delay:50
											}
										});
									}
								}

								td.innerText=thisMonthDate;

								td.addEventListener('click',show_yotei);

								td.id=td.id;
								td.parent_tag_str=parent_tag_str;
								td.table_name=table_name;
								td.youbi=youbi;

								for(var p=0;p<memo.length;p++){
									for(var q=0;q<label.length;q++){
										if(label[q]=='日付'){
											if(memo[p][label[q]]==td.id){
												console.log('td-memo:matched.')
												td.innerText+='\n●';
											}
									}
									}
								}

								tr.appendChild(td);
							}
							thisMonthDate=thisMonthDate+1;
						}

						// 来月の処理
						if(thisMonthDate>currMonth_lastday.getDate()&&nextMonth_firstday.getDay()!=0){
							thisMonthDate=1;
							for(var i=nextMonth_firstday.getDay();i<7;i++){
								var td=document.createElement('td');
								td.classList.add('td-gray');
								td.classList.add('td-calendar');

								td.innerText=thisMonthDate;

								td.id=nextMonth_firstday.getFullYear()+'-'
								+toDoubleDigits(nextMonth_firstday.getMonth()+1)+'-'
								+toDoubleDigits(thisMonthDate);

								td.addEventListener('click',show_yotei);

								td.id=td.id;
								td.table_name=table_name;
								td.parent_tag_str=parent_tag_str;
								td.youbi=youbi;

								for(var p=0;p<memo.length;p++){
									for(var q=0;q<label.length;q++){
										if(label[q]=='日付'){
											if(memo[p][label[q]]==td.id){
												console.log('td-memo:matched.')
												td.innerText+='\n●';
											}
									}
									}
								}


								tr.appendChild(td);
								thisMonthDate=thisMonthDate+1;
							}
						}
					}
				tbody.appendChild(tr);
			}
			console.log('memo:');
			console.log(memo);

			
		});

		table.appendChild(tbody);

		parent_tag.appendChild(table);

		var parent_tag=childNodeClear(parent_tag_str+'_params');

		var form=document.createElement('form');
		 
		form.name=parent_tag_str+'_insert';

		var input;

		for(var i=0;i<label.length;i++){

      if(label[i]=='id') continue;

      if(label[i]=='予定'){

        var p=document.createElement('p');
        p.id=parent_tag_str+'_'+col[i];

        p.innerText='今日の予定';
        form.appendChild(p);

        var textarea=document.createElement('textarea');

        textarea.id=parent_tag_str+i;
        textarea.rows=5;
        textarea.cols=80;
        textarea.style.display='block';
        textarea.name='yotei';
        form.appendChild(textarea);

      }

      if(label[i]=='メモ'){

        var p=document.createElement('p');
        p.id=parent_tag_str+'_'+col[i];

        p.innerText='メモ';
        form.appendChild(p);

        var textarea=document.createElement('textarea');

        textarea.id=parent_tag_str+i;
        textarea.rows=5;
        textarea.cols=80;
        textarea.style.display='block';
        textarea.name='memo';
        form.appendChild(textarea);

      }
     
    }

		parent_tag.appendChild(form);

		var exec=childNodeClear(parent_tag_str+'_exec');

    var a=document.createElement("a");

    a.href='#'+parent_tag_str;
    a.innerText='メモを書き込む';
    a.style.display='block';
    a.classList.add('a-insert');

    a.addEventListener('click',insert_table);
        
    a.parent_tag_str=parent_tag_str;
    a.table_name=table_name;
    a.label=label;
    a.col=col;
    a.youbi=youbi;
		a.mode='insert';
 
		exec.appendChild(a);
		
}