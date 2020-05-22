function create_calendar(parent_tag_str,year,month,youbi){

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

		var curr=new Date();
		var currYear=curr.getFullYear();
		var currMonth=curr.getMonth();
		var currDate=curr.getDate();

		 
     // 画面の更新
     var parent_tag=document.getElementById(parent_tag_str+'_results');

    while(parent_tag.firstChild){
      parent_tag.removeChild(parent_tag.firstChild);
    }
 
    var form=document.createElement('form');
		 
		form.name=parent_tag_str;

    var div_title=document.createElement('div');
     		 
		 var div=document.createElement('div');
		 div.style.display='inline-block';
		 div.innerText='<<';
		 div.youbi=youbi;

		 div.addEventListener('click',function(event){

			month=month-1;

			if(month<0){
				month=11;
				year=year-1;
			}

			 create_calendar(parent_tag_str,year,month,youbi);
		 });

		div_title.appendChild(div);

		var div=document.createElement('div');
		div.style.display='inline-block';
		div.innerText='今月';
		div.youbi=youbi;

		div.addEventListener('click',function(event){
	
			create_calendar(parent_tag_str,currYear,currMonth,youbi);

		});

		div_title.appendChild(div);

		var div=document.createElement('div');
		div.style.display='inline-block';
		div.innerText='>>';
		div.youbi=youbi;

		div.addEventListener('click',function(event){
			console.log(div.innerText);
			console.log(year);

			month=month+1;

			if(month==12){
				month=month-12;
				year=year+1;
			}

			create_calendar(parent_tag_str,year,month,youbi);

		});

		div_title.appendChild(div);

		parent_tag.appendChild(div_title);

		parent_tag.appendChild(form);

		var p=document.createElement('p');
		p.id='year';
		p.value=year;
		p.innerText=year+'年';
		p.style.display='inline';
	
		div_title.appendChild(p);

		var p=document.createElement('p');

		p.id='month';
		p.value=month;
		p.innerText=(month+1)+'月';
		p.style.display='inline';

		div_title.appendChild(p);
		
		form.appendChild(div_title);

		 
		 console.log('今月のカレンダーの開始日:'+(prevMonth_lastday.getDate()-prevMonth_lastday.getDay()));
		 console.log('今日は何年か?'+year);
		 console.log('今月は何月か？(curr+1):'+(month+1));
		 console.log('今日は何日か？:'+thisMonth.getDate());
		 // 曜日の取得
		 console.log('今日の曜日:'+youbi[thisMonth.getDay()]);
 
		 // 先月の末尾を取得する
		 console.log('先月は何年か？'+prevMonth_lastday.getFullYear());
		 console.log('先月は何月か？'+(prevMonth_lastday.getMonth()+1));
 
		 console.log('先月の末尾:'+prevMonth_lastday.getDate());
		 console.log('先月の末尾の曜日番号:'+prevMonth_lastday.getDay());
 
 
		 console.log('今月の末尾:'+currMonth_lastday.getDate());
		 console.log('今月の末尾は何年か？:'+currMonth_lastday.getFullYear()); // ->今月の末尾は同年
		 console.log('今月の末尾は何月か？:'+(currMonth_lastday.getMonth()+1)); // ->今月の末尾は同月
 
		 console.log('今月の末尾の曜日番号:'+currMonth_lastday.getDay());
 
		 console.log('今日の週番号:'+getWeekNum(thisMonth));
 
		 console.log('今月が何週あるか:'+getWeekNum(currMonth_lastday));
 
		 var holidays = JapaneseHolidays.getHolidaysOf(thisMonth.getFullYear());
 
			holidays.forEach(function(holiday) {
				if(holiday.month==(thisMonth.getMonth()+1)){
					console.log(
						thisMonth.getFullYear()+'/'+
						holiday.month+'/'+
						holiday.date+'/'+
						holiday.name
					);          
				}
			});

		console.log(nextMonth_firstday.getFullYear());

		var table=document.createElement('table');

		console.log('prev-prev:'+(prevMonth_lastday.getDate()-prevMonth_lastday.getDay()));
		console.log('prev last:'+prevMonth_lastday.getDate());
		console.log('getWeekNum:'+getWeekNum(currMonth_lastday));

		var thisMonthDate=1;

		for(var j=0;j<getWeekNum(currMonth_lastday);j++){
			var tr=document.createElement('tr');

				// 最初の週の処理
				if(j==0){
					if(prevMonth_lastday.getDay()!=6){
						for(var i=(prevMonth_lastday.getDate()-prevMonth_lastday.getDay());i<=prevMonth_lastday.getDate();i++){
							var td=document.createElement('td');
							td.innerText=(prevMonth_lastday.getMonth()+1)+'/'+i;
							tr.appendChild(td);
						}
					}

					for(var i=thisMonth.getDay();i<7;i++){
							var td=document.createElement('td');
							td.innerText=(thisMonth.getMonth()+1)+'/'+thisMonthDate;
							tr.appendChild(td);
							thisMonthDate=thisMonthDate+1;
					}

					// 途中の週の処理
				}else if(j<(getWeekNum(currMonth_lastday))){
					
					var tmp_date=new Date(year,month,thisMonthDate);

					for(var i=0;i<7;i++){
						if(thisMonthDate<=currMonth_lastday.getDate()){
							var td=document.createElement('td');
							td.innerText=(thisMonth.getMonth()+1)+'/'+thisMonthDate;
							tr.appendChild(td);
						}
						thisMonthDate=thisMonthDate+1;
					}

					if(thisMonthDate>currMonth_lastday.getDate()&&nextMonth_firstday.getDay()!=0){
						thisMonthDate=1;
						for(var i=nextMonth_firstday.getDay();i<7;i++){
							var td=document.createElement('td');
							td.innerText=(nextMonth_firstday.getMonth()+1)+'/'+thisMonthDate;
							tr.appendChild(td);
							thisMonthDate=thisMonthDate+1;
						}
					}
				}

			table.appendChild(tr);
		}
 
		form.appendChild(table);

		parent_tag.appendChild(form);

}