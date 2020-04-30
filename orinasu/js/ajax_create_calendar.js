function ajax_create_calendar(tag_name_str){

  $.when(
      ajax_select_from_table('youbi','content'),

      ).done(function(youbi){
    
            console.log(youbi);
                    
          // 今月の初日の曜日番号を取得する
          var day=new Date();

          console.log('今日は'+day.getFullYear()+'年'+(day.getMonth()+1)+'月'+day.getDate()+'日'+youbi[day.getDay()].content+'曜日');

          console.log('今月初日の曜日:'+youbi[day.getDay()].content);
          
          // 先月の末尾を取得する
          console.log('先月末日:'+new Date(day.getFullYear(),day.getMonth(),0));

          // 今月の末尾を取得する 
          console.log('今月の末日'+new Date(day.getFullYear(),day.getMonth()+1,0));
          
          // 曜日番号を取得する
          console.log('今月の末日の曜日:'+youbi[day.getDay()].content);
          
          // 今日の週番号を取得する
          console.log('今日の週番号:'+getWeekNum(new Date()));
          
          // 今月が何週あるか調べる
          var day=new Date();
          var day=new Date(day.getFullYear(),day.getMonth()+1,0);
          console.log('今月は何週あるのか？:'+getWeekNum(day));
          
          // holiday
              var today = new Date();
              var holidays = JapaneseHolidays.getHolidaysOf(today.getFullYear());
          
              holidays.forEach(function(holiday) {
                  console.log(
                      today.getFullYear()+':'+
                      holiday.month+':'+
                      holiday.date+':'+
                      holiday.name
                  );
              });

      });

}