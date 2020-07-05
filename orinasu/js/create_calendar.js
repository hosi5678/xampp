'use strict';

function create_calendar({parent_tag_str,table_name,year,month,youbi,label,col}){

	console.log('------in create calendar------');
	
	console.log('yaer:'+year);
	console.log('month:'+month);

		// localize,localize
		moment.locale('ja');

		// 現在時刻オブジェクト

		// // 今月の取得
		// const thisMonth_first=new Date(year,month,1);
		
		// // 先月の末尾を取得する
		// const prevMonth_last=new Date(year,month,0);

		// // 今月の末尾を取得する
		// const thisMonth_last=new Date(year,(month+1),0);
		 
		// // 来月の初日を取得する
		// const nextMonth_first=new Date(year,(month+1),1);


		// 今月初め
		const thisMonth_first=moment(new Date(year,month,1)).startOf('month');

		// 先月の最終日
		const prevMonth_last=moment(new Date(year,month,1)).add(-1,'month').endOf('month');

		// 来月の初日を取得する
		const nextMonth_first=moment(new Date(year,month,1)).add(1,'month').startOf('month');//.new Date(year,(month+1),1);

	// 今月末
	const thisMonth_last=moment(new Date(year,month,1)).endOf('month');

		
		const m=moment();

		// console.log('year:'+m.year());

		// console.log(m.format("LLLL"));

		// 現在の日付の取得
  let currYear=m.year();
		let currMonth=m.month();
		let currDate=m.date();
		
		let today=m.year()+'年'+(m.month()+1)+'月'+(m.date())+'日('+youbi[m.day()]+')';
		
  let title=childNodeClear(parent_tag_str+'_title');

		let p=document.createElement('p');

		p.innerText=today;

		title.appendChild(p);

		const sengetu_hiniti=prevMonth_last.get('date')-prevMonth_last.get('day');

		console.log('先月末(日):'+prevMonth_last.get('date'));
		console.log('今月の日にち:'+moment().daysInMonth());
		console.log('this moment month get month:'+m.get('month'));

		// 現カレンダーの先月の開始日
		let where_start_date;

		if(thisMonth_first.get('day')==0){
			where_start_date=m.year()+'-'
			+toDoubleDigits(m.get('month')+1)+'-'
			+toDoubleDigits(1);
		}else{
			where_start_date=prevMonth_last.get('year')+'-'
			+toDoubleDigits(prevMonth_last.get('month')+1)+'-'
			+toDoubleDigits(prevMonth_last.get('date')-prevMonth_last.get('day'));
		}
		
		console.log('where start date:'+where_start_date);

		// 現カレンダーの来月の末尾

		let where_end_date;

		if(thisMonth_last.get('day')==6){
			where_end_date=m.get('year')+'-'
			+toDoubleDigits(m.get('month')+1)+'-'
			+toDoubleDigits(m.daysInMonth());
		}else{
			where_end_date=nextMonth_first.get('year')+'-'
			+toDoubleDigits(nextMonth_first.get('month')+1)+'-'
			+toDoubleDigits(nextMonth_first.get('date')+(6-nextMonth_first.get('day')));
		}

		console.log('where end date:'+where_end_date);

		 // 画面の更新
		let parent_tag=childNodeClear(parent_tag_str+'_hyou');
 
  let div_title=document.createElement('div');
     		 
		let div=document.createElement('div');

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

		let a=document.createElement('a');

		a.innerText='今月';
		a.youbi=youbi;

		a.href='#';

		a.addEventListener('click',function(event){
	
			create_calendar({
				parent_tag_str:parent_tag_str,
				table_name:table_name,
				year:m.get('year'),
				month:m.get('month'),
				youbi:youbi,
				label:label,
				col:col
			});
		});

		div_title.appendChild(a);

	 div=document.createElement('div');
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

		div=document.createElement('div');

	 p=document.createElement('p');

		p.id='year';
		p.value=year;
		p.innerText=year+'年';
		p.style.display='inline';
	
		div.appendChild(p);

		p=document.createElement('p');

		p.id='month';
		p.value=month;
		p.innerText=(month+1)+'月';
		p.style.display='inline';

		div.appendChild(p);
		
		div_title.appendChild(div);
		
		parent_tag.appendChild(div_title);

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

		let thisMonthDate=1;

		$.when(ajax_select_from_memo({
			table_name:table_name,
			start_date:where_start_date,
			end_date:where_end_date
		})).done(function(memo){

			// カレンダー作成の処理
			for(let j=0;j<getWeekNum(thisMonth_last);j++){
				var tr=document.createElement('tr');
					// 最初の週の処理,先月
					if(j==0){
						if(prevMonth_last.get('day')!=6){
							for(var i=sengetu_hiniti;i<=prevMonth_last.get('date');i++){

								var td=document.createElement('td');

								td=setCalendarDay({
									td:td,
									year:prevMonth_last.get('year'),
									month:prevMonth_last.get('month')+1,
									date:i,
									parent_tag_str:parent_tag_str,
									table_name:table_name,
									label:label,
									col:col,
									youbi:youbi,
									class_str:'td-gray',
									memo:memo
								});

								tr.appendChild(td);
							}
						}

						// 最初の週の処理,今月(1-)
						for(let i=thisMonth_first.get('day');i<7;i++){

								var td=document.createElement('td');

								td=setCalendarDay({
									td:td,
									year:thisMonth_first.get('year'),
									month:thisMonth_first.get('month')+1,
									date:thisMonthDate,
									parent_tag_str:parent_tag_str,
									table_name:table_name,
									label:label,
									col:col,
									youbi:youbi,
									memo:memo
								});

								tr.appendChild(td);
								thisMonthDate=thisMonthDate+1;
						}

					// 今月(本体)の処理(1-30,31)
					}else{
						
						for(var i=0;i<7;i++){
							if(thisMonthDate<=thisMonth_last.get('date')){
								
								var td=document.createElement('td');

								td=setCalendarDay({
									td:td,
									year:thisMonth_first.get('year'),
									month:thisMonth_first.get('month')+1,
									date:thisMonthDate,
									parent_tag_str:parent_tag_str,
									table_name:table_name,
									label:label,
									col:col,
									youbi:youbi,
									memo:memo
								});

								tr.appendChild(td);
							}

							thisMonthDate=thisMonthDate+1;

						}

						// 来月の処理
						if(thisMonthDate>thisMonth_last.get('date')&&nextMonth_first.get('day')!=0){
							thisMonthDate=1;

							for(var i=nextMonth_first.get('day');i<7;i++){

								var td=document.createElement('td');

								td=setCalendarDay({
									td:td,
									year:nextMonth_first.get('year'),
									month:nextMonth_first.get('month')+1,
									date:thisMonthDate,
									parent_tag_str:parent_tag_str,
									table_name:table_name,
									label:label,
									col:col,
									youbi:youbi,
									class_str:'td-gray',
									memo:memo
								});
								
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

			parent_tag.appendChild(table);
	
		 parent_tag=childNodeClear(parent_tag_str+'_params');

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
	
			childNodeClear(parent_tag_str+'_exec');
	
			var a=document.createElement("a");
	
			a.href='#'+parent_tag_str;
			a.style.display='block';
			a.classList.add('a-insert');

			let today=m.get('year')+'-'+toDoubleDigits(m.get('month')+1)+'-'+toDoubleDigits(m.get('date'));

			if(memo.length>0){
					for(var r=0;r<memo.length;r++){
					if((today==memo[r]["日付"])&&(memo[r]["メモ"]!="")){

								create_exec({
									parent_tag_str:parent_tag_str,
									sub_tag_str:'_exec',
									table_name:table_name,
									label:label,
									col:col,
									mode:'update', // modify
									class_str:'a-mod',
									id:'"'+today+'"',
							});
			
							// 合致したら抜ける
							break;
							
						}else{

							create_exec({
								parent_tag_str:parent_tag_str,
								sub_tag_str:'_exec',
								table_name:table_name,
								label:label,
								col:col,
								mode:'insert', // modify
								class_str:'a-insert',
								id:'"'+today+'"',
								youbi:youbi,
						});

						}
					}
			}else{

				create_exec({
					parent_tag_str:parent_tag_str,
					sub_tag_str:'_exec',
					table_name:table_name,
					label:label,
					col:col,
					mode:'insert', // modify
					class_str:'a-insert',
					youbi:youbi,
			});

			}
					 

		 parent_tag=childNodeClear(parent_tag_str+'_results');

			create_table({
				parent_tag_str:parent_tag_str,
				table_name:table_name,
				label:label,
				col:col,
				row:memo
			});
	
		}); // ajax 終わり

		
}