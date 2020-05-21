function create_staff_calendar_input_form(parent_tag_str,table_name,youbi){

    // 画面の更新
    var parent_tag=document.getElementById(parent_tag_str+'_results');

    while(parent_tag.firstChild){
        parent_tag.removeChild(parent_tag.firstChild);
    }
    
    console.log('----- in create staff calendar----- ');

    console.log(parent_tag_str+'/'+table_name);

    console.log('youbi is:');
    console.log(youbi);

    var curr=new Date();
    var currYear=curr.getFullYear();
    var currMonth=curr.getMonth();
    var currDate=curr.getDate();

    var prevMonth_lastday=new Date(currYear,currMonth,0);

    console.log('今月のカレンダーの開始日:'+(prevMonth_lastday.getDate()-prevMonth_lastday.getDay()));
    console.log('今年は何年か?'+currYear);
    console.log('今月は何月か？(js+1):'+(currMonth+1));
    console.log('今日の何日か？:'+currDate);
    // 曜日の取得
    console.log('今日の曜日:'+youbi[curr.getDay()]);

    // 先月の末尾を取得する
    console.log('先月は何年か？'+prevMonth_lastday.getFullYear());
    console.log('先月は何月か？'+(prevMonth_lastday.getMonth()+1));

    console.log('先月の末尾:'+prevMonth_lastday.getDate());
    console.log('先月の末尾の曜日番号:'+prevMonth_lastday.getDay());

    // 今月の末尾を取得する
    var currMonth_lastday=new Date(currYear,(currMonth+1),0);

    console.log('今月の末尾:'+currMonth_lastday.getDate());
    console.log('今月の末尾は何年か？:'+currMonth_lastday.getFullYear()); // ->今月の末尾は同年
    console.log('今月の末尾は何月か？:'+(currMonth_lastday.getMonth()+1)); // ->今月の末尾は同月

    console.log('今月の末尾の曜日番号:'+currMonth_lastday.getDay());

    console.log('今日の週番号:'+getWeekNum(curr));

    console.log('今月が何週あるか:'+getWeekNum(currMonth_lastday));

    var holidays = JapaneseHolidays.getHolidaysOf(curr.getFullYear());

        holidays.forEach(function(holiday) {
            if(holiday.month==(curr.getMonth()+1)){
                console.log(
                    curr.getFullYear()+'/'+
                    holiday.month+'/'+
                    holiday.date+'/'+
                    holiday.name
                );          
            }
        });

        // 先月の末尾を取得する

        var testDay=new Date(2019,13,1);

        console.log(testDay.getFullYear());
        console.log(testDay.getMonth()+1);
        console.log(testDay.getDate());

        create_calendar(parent_tag_str,currYear,currMonth,currDate);

    // var table=document.createElement('table');

    // var tr=document.createElement('tr');

    // for(var i=0;i<day.getDay()+1;i++){
    //     var td=document.createElement('td');
    //     td.innerText=today.getMonth()+'/'+(this_calendar_first_day+i);
    //     tr.appendChild(td);
    // }

    // for(var i=1;i<thisMonth_lastday.getDate();i++){
    //     var td=document.createElement('td');
    //     td.innerText=today.getMonth()+1+'/'+i;
    //     tr.appendChild(td);

    //     var inc_day=new Date(today.getFullYear(),today.getMonth(),i);

    //     if(inc_day.getDay()==6){
    //         console.log('--true--');
    //         console.log(inc_day.getFullYear());
    //         console.log(inc_day.getDate());
    //         // var tr=document.createElement('tr');
    //     }

    // }

    // tr.appendChild(td);

    // table.appendChild(tr);

    // form.appendChild(table);


}