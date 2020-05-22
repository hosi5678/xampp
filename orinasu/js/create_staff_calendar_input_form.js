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

  	create_calendar(parent_tag_str,currYear,currMonth,youbi);

}