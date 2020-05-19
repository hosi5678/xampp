function create_staff_calendar(parent_tag_str,table_name,youbi){

    // 画面の更新
    var parent_tag=document.getElementById(parent_tag_str+'_results');

    while(parent_tag.firstChild){
        parent_tag.removeChild(parent_tag.firstChild);
    }
    

    console.log('----- in create staff calendar----- ');

    console.log(parent_tag_str+'/'+table_name);

    console.log('youbi is:');
    console.log(youbi);

    var today=new Date();
    var thisYear=today.getFullYear();
    var thisMonth=today.getMonth();
    var thisDate=today.getDate();

    var lastMonth_lastday=new Date(thisYear,thisMonth,0);


    console.log('今月のカレンダーの開始日:'+(lastMonth_lastday.getDate()-lastMonth_lastday.getDay()));
    console.log('今年は何年か?'+thisYear);
    console.log('今月は何月か？(js+1):'+(thisMonth+1));
    console.log('今日の何日か？:'+thisDate);
    // 曜日の取得
    console.log('今日の曜日:'+youbi[today.getDay()]);

    // 先月の末尾を取得する
    console.log('先月は何年か？'+lastMonth_lastday.getFullYear());
    console.log('先月は何月か？'+(lastMonth_lastday.getMonth()+1));

    console.log('先月の末尾:'+lastMonth_lastday.getDate());
    console.log('先月の末尾の曜日番号:'+lastMonth_lastday.getDay());


    // 今月の末尾を取得する
    var thisMonth_lastday=new Date(thisYear,(thisMonth+1),0);

    console.log('今月の末尾:'+thisMonth_lastday.getDate());
    console.log('今月の末尾は何年か？:'+thisMonth_lastday.getFullYear()); // ->今月の末尾は同年
    console.log('今月の末尾は何月か？:'+(thisMonth_lastday.getMonth()+1)); // ->今月の末尾は同月


    console.log('今月の末尾の曜日番号:'+thisMonth_lastday.getDay());

    // 今日の週番号を取得する
    console.log('今日の週番号:'+getWeekNum(today));

    // 今月が何週あるか調べる
    // var thismonth=new Date(thisYear,(thisMonth+1),0);

    console.log('今月が何週あるか:'+getWeekNum(thisMonth_lastday));

    var today = new Date();
    var holidays = JapaneseHolidays.getHolidaysOf(today.getFullYear());

    holidays.forEach(function(holiday) {

        if(holiday.month==(today.getMonth()+1)){
            console.log(
                today.getFullYear()+'/'+
                holiday.month+'/'+
                holiday.date+'/'+
                holiday.name
            );
    
        }

    });

        // 先月の末尾を取得する

        day=new Date();

        var day=new Date(day.getFullYear(),day.getMonth(),0); // getMonthに+1がないので、先月

        console.log('先月の末尾の日にち:'+day.getDate());

        console.log('曜日番号:'+day.getDay());

        console.log('今月のカレンダーの開始日:'+(day.getDate()-day.getDay()));

        var this_calendar_first_day=day.getDate()-day.getDay();

        console.log('曜日:'+youbi[day.getDay()]);

        console.log('test');

        var testDay=new Date(2019,13,1);

        console.log(testDay.getFullYear());
        console.log(testDay.getMonth()+1);
        console.log(testDay.getDate());


    // var form=document.createElement('form');
    // form.name=parent_tag_str;

    // var p=document.createElement('p');

    // p.innerText=today.getFullYear()+'年';

    // form.appendChild(p);

    // var p=document.createElement('p');

    // p.innerText=(today.getMonth()+1)+'月';

    // form.appendChild(p);

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
    //     // if()

    // }

    // tr.appendChild(td);

    // table.appendChild(tr);

    // form.appendChild(table);

    // parent_tag.appendChild(form);

}