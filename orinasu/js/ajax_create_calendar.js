function ajax_create_calendar(tag_name_str){

  $.when(
      ajax_select_from_table('youbi','content'),

      ).done(function(youbi){
    
          console.log('in ajax create calendar');
          console.log(tag_name_str);
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
                //           var today = new Date();
                //           var holidays = JapaneseHolidays.getHolidaysOf(today.getFullYear());
                    
                //           holidays.forEach(function(holiday) {
                //               console.log(
                //                   today.getFullYear()+':'+
                //                   holiday.month+':'+
                //                   holiday.date+':'+
                //                   holiday.name
                //               );
                //           });

          var today=new Date();
          
          var thisMonth=new Date(today.getFullYear(),today.getMonth(),0);
          
          console.log('先月の末日の曜日番号:'+thisMonth.getDay());
          console.log('先月の末日の日にち:'+thisMonth.getFullYear()+'/'+(thisMonth.getMonth()+1)+'/'+thisMonth.getDate());
          console.log('先月のカレンダーの開始日:'+(thisMonth.getDate()-thisMonth.getDay()));

          var tag_name=document.getElementById(tag_name_str);

          var div=document.createElement('div');
          div.innerText='<<';
          div.style.display='inline-block';
          tag_name.appendChild(div);
        
          var today=new Date();
        
          var div=document.createElement('div');
          div.innerText=today.getFullYear()+'年'+(today.getMonth()+1)+'月';
          div.style.display='inline-block';
          tag_name.appendChild(div);
        
          var div=document.createElement('div');
          div.innerText='>>';
          div.style.display='inline-block';
          tag_name.appendChild(div);
        
          var div=document.createElement('div');
          div.style.display='inline-block';
          var select=document.createElement('select');
        
          var option=document.createElement('option');
          option.id='select01';
          option.value=0;
          option.innerText='土曜日で折り返す';
          select.appendChild(option);
          div.appendChild(select);
          tag_name.appendChild(div);
        
          var option=document.createElement('option');
          option.id='select02';
          option.value=1;
          option.innerText='折り返しなし';
          select.appendChild(option);
          div.appendChild(select);
          tag_name.appendChild(div);
        
          // var table=document.createElement('table');
          select.youbi=youbi; // eventParamは任意の名前である。

          // create_calendar(tag_name_str,youbi);
          select.addEventListener('change',create_calendar);

      });
}