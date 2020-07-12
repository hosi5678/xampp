'use strict';
function getHolidays({year,month}){

  // console.log('---in get Holidays---');

  const holidays = JapaneseHolidays.getHolidaysOf(year);

  // console.log('holidays:');
  // console.log('year:'+year);
  // console.log('month:'+month);
  // console.log(holidays);

  let holidays_thisMonth=new Array();

  holidays.forEach(function(holiday) {
    if(holiday.month==(month)){
        holidays_thisMonth.push({
          date:
          year+'-'
          +toDoubleDigits(holiday.month)+'-'
          +toDoubleDigits(holiday.date),

          name:holiday.name
        });	
    }
  });

  return holidays_thisMonth;

}