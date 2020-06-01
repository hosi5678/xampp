'use strict';

function create_calendar({parent_tag_str,year,month,date,youbi}){

    console.log('in create calendar');

		console.log('youbi is:');
		console.log(youbi);

		var thisMonth=new Date(year,month,1);
		
		// 先月の末尾を取得する
		var prevMonth_lastday=new Date(year,month,0);

		// 今月の末尾を取得する
		var currMonth_lastday=new Date(year,(month+1),0);
		 
		// 来月の初日を取得する
		var nextMonth_firstday=new Date(year,(month+1),1);

		// var curr=new Date();
		// var currYear=curr.getFullYear();
		// var currMonth=curr.getMonth();
		// var currDate=curr.getDate();

		 // 画面の更新
		 var parent_tag=childNodeClear(parent_tag_str+'_hyou');

    //  var parent_tag=document.getElementById(parent_tag_str+'_hyou');

    // while(parent_tag.firstChild){
    //   parent_tag.removeChild(parent_tag.firstChild);
    // }
 
    var form=document.createElement('form');
		 
		form.name=parent_tag_str;

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
				 year:year,
				 month:month,
				 youbi:youbi
			});
			
		 });

		div_title.appendChild(div);

		var a=document.createElement('a');

		a.innerText='今月';
		a.youbi=youbi;

		a.href='#';

		a.addEventListener('click',function(event){

			var curr=new Date();
			var currYear=curr.getFullYear();
			var currMonth=curr.getMonth();
			var currDate=curr.getDate();
	
			create_calendar({
				parent_tag_str:parent_tag_str,
				year:currYear,
				month:currMonth,
				date:currDate,
				youbi:youbi
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
				year:year,
				month:month,
				youbi:youbi
			});

		});

		div_title.appendChild(div);

		parent_tag.appendChild(div_title);

		parent_tag.appendChild(form);

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
		
		form.appendChild(div_title);

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

		for(var j=0;j<getWeekNum(currMonth_lastday);j++){
			var tr=document.createElement('tr');

				// 最初の週の処理,先月
				if(j==0){
					if(prevMonth_lastday.getDay()!=6){
						for(var i=(prevMonth_lastday.getDate()-prevMonth_lastday.getDay());i<=prevMonth_lastday.getDate();i++){
							var td=document.createElement('td');

							td.classList.add('td-gray');
							td.classList.add('td-calendar');

							td.id=prevMonth_lastday.getFullYear()+'-'+(prevMonth_lastday.getMonth()+1)+'-'+i;

							td.innerText=i;

							tr.appendChild(td);
						}
					}

					// 最初の週の処理,今月
					for(var i=thisMonth.getDay();i<7;i++){

							var td=document.createElement('td');

							td.classList.add('td-calendar');

							if(i==0) td.classList.add('td-sun');	
							if(i==6) td.classList.add('td-sat');

							// thisMonth.getFullYear()==currYear&&thisMonth.getMonth()==currMonth&&thisMonthDate==currDate
							td.id=thisMonth.getFullYear()+'-'+(thisMonth.getMonth()+1)+'-'+thisMonthDate;

							if(thisMonth.getFullYear()==year&&thisMonth.getMonth()==month&&thisMonthDate==date){
								td.classList.add('td-today');
							} 

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

							tr.appendChild(td);
							thisMonthDate=thisMonthDate+1;
					}

					// 今月の処理
				}else if(j<(getWeekNum(currMonth_lastday))){
					
					for(var i=0;i<7;i++){
						if(thisMonthDate<=currMonth_lastday.getDate()){
							
							var td=document.createElement('td');

							td.classList.add('td-calendar');

							if(i==0) td.classList.add('td-sun');	
							if(i==6) td.classList.add('td-sat');

							if(thisMonth.getFullYear()==year&&thisMonth.getMonth()==month&&thisMonthDate==date){
								td.classList.add('td-today');
							} 

							td.id=thisMonth.getFullYear()+'-'+(thisMonth.getMonth()+1)+'-'+thisMonthDate;

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

							td.id=nextMonth_firstday.getFullYear()+'-'+(nextMonth_firstday.getMonth()+1)+'-'+thisMonthDate;
							tr.appendChild(td);
							thisMonthDate=thisMonthDate+1;
						}
					}
				}

			tbody.appendChild(tr);
		}

		table.appendChild(tbody);
 
		form.appendChild(table);

		parent_tag.appendChild(form);

}