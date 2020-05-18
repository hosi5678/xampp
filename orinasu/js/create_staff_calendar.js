function create_staff_calendar(parent_tag_str,table_name,youbi){

    console.log('----- in create staff calendar----- ');

    console.log(parent_tag_str+'/'+table_name);

    console.log('youbi is:');
    console.log(youbi);

    var today=new Date();

    console.log('今年:'+today.getFullYear());
    console.log('今月(js+1):');
    console.log(today.getMonth()+1);
    console.log('今日の日にち:'+today.getDate());
    // 曜日の取得
    console.log('今日の曜日:'+youbi[today.getDay()]);

    // 今月の末尾を取得する
    today=new Date();

    var thismonth_lastday=new Date(today.getFullYear(),today.getMonth()+1,0);

    console.log('今月の末尾:'+thismonth_lastday.getDate());
    console.log('今月の末尾の曜日番号:'+thismonth_lastday.getDay());
  

    // 今日の週番号を取得する
    console.log('今日の週番号:'+getWeekNum(new Date()));

    // 今月が何週あるか調べる
    var today=new Date();
    var thismonth=new Date(today.getFullYear(),today.getMonth()+1,0);

    console.log('今月が何週あるか:'+getWeekNum(thismonth));

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

        console.log('曜日:'+youbi[day.getDay()]);

}