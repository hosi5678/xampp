'use strict';

function create_calendar({parent_tag_str,table_name,year,month,youbi,label,col}){

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
		
		var today=currYear+'年'+(currMonth+1)+'月'+(currDate)+'日('+youbi[curr.getDay()]+')';
		
		// console.log('today:'+today);

    var title=childNodeClear(parent_tag_str+'_title');

		var p=document.createElement('p');

		p.innerText=today;

		title.appendChild(p);

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
						+toDoubleDigits(holiday.month)+'-'
						+toDoubleDigits(holiday.date),
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

		$.when(ajax_select_from_memo({
			table_name:table_name,
			start_date:where_start_date,
			end_date:where_end_date
		})).done(function(memo){

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
								td.label=label;
								td.col=col;

								// もし今日がメモの日付と合致したら
								if(memo.length>0){
									for(var p=0;p<memo.length;p++){
										if(memo[p]['日付']==td.id){
											td.innerText+='\n●';
										}	
									}
								
									var exec=childNodeClear(parent_tag_str+'_exec');
									var a=document.createElement('a');
									a.innerText='メモを修正する';
									a.classList.add('a-mod');
									a.addEventListener('click',update_table);
									a.id='"'+td.id+'"';
									a.parent_tag_str=parent_tag_str;
									a.table_name=table_name;
									a.col=col;
									a.label=label;
														
									exec.appendChild(a);
														
								}else{
									var exec=childNodeClear(parent_tag_str+'_exec');
									var a=document.createElement('a');
									a.innerText='メモを記入する';
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

								tr.appendChild(td);
							}
						}

						// 最初の週の処理,今月(1-)
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
								td.table_name=table_name;
								td.parent_tag_str=parent_tag_str;
								td.youbi=youbi;
								td.label=label;
								td.col=col;

								// もし今日がメモの日付と合致したら
								if(memo.length>0){
									for(var p=0;p<memo.length;p++){
										if(memo[p]['日付']==td.id){
											var p=document.createElement('p');
											p.classList.add('p-memo');
											p.innerText='●';
											td.appendChild(p);
										}	
									}

									var exec=childNodeClear(parent_tag_str+'_exec');
									var a=document.createElement('a');
									a.innerText='メモを修正する';
									a.classList.add('a-mod');
									a.addEventListener('click',update_table);
									a.id='"'+td.id+'"';
									a.parent_tag_str=parent_tag_str;
									a.table_name=table_name;
									a.col=col;
									a.label=label;
						
									exec.appendChild(a);
						
								}else{
									var exec=childNodeClear(parent_tag_str+'_exec');
									var a=document.createElement('a');
									a.innerText='メモを記入する';
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

								// パラメータが今日なら色を塗る
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
								td.label=label;
								td.col=col;

								// もし今日がメモの日付と合致したら
								if(memo.length>0){
									for(var p=0;p<memo.length;p++){
										if(memo[p]['日付']==td.id){
											var p=document.createElement('p');
											p.classList.add('p-memo');
											p.innerText='●';
											td.appendChild(p);
										}	
									}

									var exec=childNodeClear(parent_tag_str+'_exec');
									var a=document.createElement('a');

									a.innerText='メモを修正する';
									a.classList.add('a-mod');
									a.addEventListener('click',update_table);
									a.id='"'+td.id+'"';
									a.parent_tag_str=parent_tag_str;
									a.table_name=table_name;
									a.col=col;
									a.label=label;
						
									exec.appendChild(a);
						
								}else{
									var exec=childNodeClear(parent_tag_str+'_exec');
									var a=document.createElement('a');
									a.innerText='メモを記入する';
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
								td.label=label;

								// もし今日がメモの日付と合致したら
								if(memo.length>0){
									for(var p=0;p<memo.length;p++){
										if(memo[p]['日付']==td.id){
											var p=document.createElement('p');
											p.classList.add('p-memo');
											p.innerText='●';
											td.appendChild(p);
										}	
									}
								
									var exec=childNodeClear(parent_tag_str+'_exec');
									var a=document.createElement('a');
									a.innerText='メモを修正する';
									a.classList.add('a-mod');
									a.addEventListener('click',update_table);
									a.id='"'+td.id+'"';
									a.parent_tag_str=parent_tag_str;
									a.table_name=table_name;
									a.col=col;
									a.label=label;
														
									exec.appendChild(a);
														
								}else{
									var exec=childNodeClear(parent_tag_str+'_exec');
									var a=document.createElement('a');
									a.innerText='メモを記入する';
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
								
								tr.appendChild(td);
								thisMonthDate=thisMonthDate+1;
							}
						}
					}
					tbody.appendChild(tr);
			}
			
			console.log('memo:');
			console.log(memo);

			table.appendChild(tbody);

			var parent_tag=document.getElementById(parent_tag_str+'_hyou');

			parent_tag.appendChild(table);
	
			var parent_tag=childNodeClear(parent_tag_str+'_params');

			var form=document.createElement('form');
			 
			form.name=parent_tag_str+'_insert';
	
			for(var i=0;i<label.length;i++){
	
				if(label[i]=='id') continue;

				if(label[i]=='日付'){
					var input=document.createElement('input');
					input.type='hidden';
					input.id=parent_tag_str+i;
					input.value=year+'-'+toDoubleDigits(month+1)+'-'+toDoubleDigits(currDate);
					form.appendChild(input);
				}
	
				if(label[i]=='予定'){
	
					var p=document.createElement('p');
					p.id=parent_tag_str+'_'+col[i];
	
					p.innerText=label[i];
					form.appendChild(p);
	
					var textarea=document.createElement('textarea');
	
					textarea.id=parent_tag_str+i;
					textarea.rows=5;
					textarea.cols=80;
					textarea.style.display='block';
					textarea.name=col[i];
					form.appendChild(textarea);
	
				}
	
				if(label[i]=='メモ'){
	
					var p=document.createElement('p');
					p.id=parent_tag_str+'_'+col[i];
	
					p.innerText=label[i];
					form.appendChild(p);
	
					var textarea=document.createElement('textarea');
	
					textarea.id=parent_tag_str+i;
					textarea.rows=5;
					textarea.cols=80;
					textarea.style.display='block';
					textarea.name=col[i];

					for(var r=0;r<memo.length;r++){
						if(((currYear+'-'+toDoubleDigits(currMonth+1)+'-'+toDoubleDigits(currDate))==memo[r]["日付"])&&(memo[r]["メモ"]!="")){
							textarea.value=memo[r]["メモ"];
						}
					}

					textarea.addEventListener('click',select_from_like);
          textarea.addEventListener('keyup',select_from_like);

					textarea.id=parent_tag_str+i;
          textarea.col=col[i];
          textarea.table_name=table_name;
          textarea.parent_tag_str=parent_tag_str;
          textarea.label=label;

					form.appendChild(textarea);
	
				}
			 
			}
	
			parent_tag.appendChild(form);
	
			var exec=childNodeClear(parent_tag_str+'_exec');
	
			var a=document.createElement("a");
	
			a.href='#'+parent_tag_str;
			a.style.display='block';
			a.classList.add('a-insert');

			if(memo.length>0){
				for(var r=0;r<memo.length;r++){
					if(((currYear+'-'
						 +toDoubleDigits(currMonth+1)+'-'
						 +toDoubleDigits(currDate))==memo[r]["日付"])&&(memo[r]["メモ"]!="")){
							a.innerText='メモを編集する';
							a.classList.add('a-mod');
							a.addEventListener('click',update_table);
							a.table_name=table_name;
							a.parent_tag_str=parent_tag_str;
							a.label=label;
							a.col=col;
							a.id='"'+currYear+'-'+toDoubleDigits(currMonth+1)+'-'+toDoubleDigits(currDate)+'"';
							a.mode='update';
							
						}else{
							a.innerText='メモを記入する';
							a.classList.add('a-insert');
							a.addEventListener('click',insert_table);
							a.parent_tag_str=parent_tag_str;
							a.table_name=table_name;
							a.label=label;
							a.col=col;
							a.youbi=youbi;
							a.mode='insert';

						}
				}
			}else{
				a.innerText='メモを記入する';
				a.classList.add('a-insert');
				a.addEventListener('click',insert_table);
				a.parent_tag_str=parent_tag_str;
				a.table_name=table_name;
				a.label=label;
				a.col=col;
				a.youbi=youbi;
				a.mode='insert';

			}
					 
			exec.appendChild(a);

			var parent_tag=childNodeClear(parent_tag_str+'_results');

			create_table({
				parent_tag_str:parent_tag_str,
				table_name:table_name,
				label:label,
				col:col,
				row:memo
			});
	
		}); // ajax 終わり

		
}