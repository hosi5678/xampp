'use strict';

function setCalendarDay({
  td,
  year,
  month,
  date,
  parent_tag_str,
  table_name,
  label,
  col,
  youbi,
  class_str,
  memo,
}){

  console.log('--- in set calendar day ---');
  console.log('year:'+year);
  console.log('month:'+month);
  console.log('date:'+date);
  // console.log('parent tag str:'+parent_tag_str);


  let m=moment();

  let currYear=m.year();
  let currMonth=m.month()+1;
  let currDate=m.date();

  m=moment(new Date(year,month-1,date));
		let youbi_num=m.day();

  td.id=year+'-'+toDoubleDigits(month)+'-'+toDoubleDigits(date);

		console.log('td.id:'+td.id);
		console.log('youbi num:'+youbi_num);

  var p=document.createElement('p');
  p.classList.add('calendar-hizuke');
  p.innerText=date;


  // td.innerText=date;
  td.appendChild(p);

  var holidays = JapaneseHolidays.getHolidaysOf(year);

  // console.log('holiday:');
  // console.log(holidays);

  var holidays_thisMonth=new Array();

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

  if(youbi_num==0) td.classList.add('td-sun');
  if(youbi_num==6) td.classList.add('td-sat');

  td.classList.add('td-calendar');
  td.classList.add(class_str);
  
  // console.log('currMonth:'+currMonth);
  // console.log('holidays this month:');
  // console.log(holidays_thisMonth);
 
  for(let k=0;k<holidays_thisMonth.length;k++){

    if(holidays_thisMonth[k].date==td.id){

      td.classList.add('td-shukujitu');

      // 祝日のtooltipを表示
      td.title=holidays_thisMonth[k].name;
      
      $('#'+td.id).tooltip({
        show:{
          effect:"size",
          delay:50
        },		
        hide:{
          effect:"size",
          delay:50
        },                
        
        position:{
          my: "left center",
          at: "right center"
        }

      });
    }
  }

  // 今日の日付を着色する
  if(year==currYear&&month==currMonth&&date==currDate) td.classList.add('td-today');

  var p=document.createElement('p');
		p.classList.add('calendar-memo');
		
		// console.log('---- memo ----');
		// console.log(memo);

		p.innerText='';

  if(memo.length>0){

    for(var i=0;i<memo.length;i++){
      if(memo[i]['日付']==td.id){
        p.classList.add('memo-pink');
        p.innerText='●';
      }
    }

    create_exec({
      parent_tag_str:parent_tag_str,
      sub_tag_str:'_exec',
      table_name:table_name,
      label:label,
      col:col,
      mode:'update', // update table
      class_str:'a-mod',
      id:'"'+td.id+'"',
    });
                
  }else{

    create_exec({
      parent_tag_str:parent_tag_str,
      sub_tag_str:'_exec',
      table_name:table_name,
      label:label,
      col:col,
      mode:'insert', // insert
      class_str:'a-mod',
      id:'"'+td.id+'"',
      youbi:youbi,
    });
              
  }

  td.appendChild(p);

  td.addEventListener('click',function(){

    // console.log('this calendar:');

    let thisCalendar_trs=$(this).parent().parent().children();

    for(let j=0;j<thisCalendar_trs.length;j++){
      for(let i=0;i<thisCalendar_trs[j].children.length;i++){
        // console.log(thisCalendar_trs[j].children[i].id);
        let id=thisCalendar_trs[j].children[i].id;
        $('#'+id).removeClass('calendar-orange');
        // console.log(thisCalendar_trs[j].children[i].getComputedStyle());
      }
    }

    // console.log(thisCalendar.length);


    // console.log(thisCalendar[0]);
    // console.log(thisCalendar[0].children[1]);
    // console.log(thisCalendar[0].children.length);

    $(this).addClass('calendar-orange');


    show_yotei({
      id:td.id,
      parent_tag_str:parent_tag_str,
      table_name:table_name,
      label:label,
      col:col,
      youbi:youbi,
    })
  });

  return td;

}