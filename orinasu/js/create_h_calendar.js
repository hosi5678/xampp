'use strict';
function create_h_calendar({		
  parent_tag_str,
  table_name,
  year,
  month,
  date,
  youbi,
}){

  	// localize,localize
	moment.locale('ja');

  console.log('--- in create h calendar ---');
	console.log('year:'+year);
	console.log('month:'+(month+1));
	console.log('date:'+date);
  // console.log(youbi);
  
  const parent_tag=childNodeClear(parent_tag_str+'_hyou');

	let a=document.createElement('a');
	a.style.display='block';
	a.innerText='タイムラインの追加';

	parent_tag.appendChild(a);

  a=document.createElement('a');
  a.classList.add('calendar-left-arrow');
  a.innerText='◀';

  a.addEventListener('click',function(event){

    year=event.target.year;
    month=event.target.month;
    date=event.target.date;

    date=date-15;

    const prev_m=moment(new Date(year,month,date));

    create_h_calendar({		
      parent_tag_str:parent_tag_str,
      table_name:table_name,
      year:prev_m.get('year'),
      month:prev_m.get('month'),
      date:prev_m.get('date'),
      youbi:youbi,
    });
  });

  a.year=year;
  a.month=month;
  a.date=date;
  a.youbi=youbi;

  parent_tag.appendChild(a);

  a=document.createElement('a');
  a.innerText='今日';

  a.addEventListener('click',function(event){

    const today=moment();

    create_h_calendar({		
      parent_tag_str:parent_tag_str,
      table_name:table_name,
      year: today.get('year'),
      month:today.get('month'),
      date: today.get('date'),
      youbi:youbi,
    });
  });

  a.year=year;
  a.month=month;
  a.date=date;
  a.youbi=youbi;

  parent_tag.appendChild(a);

  a=document.createElement('a');
  a.classList.add('calendar-right-arrow');
  a.innerText='▶';

  a.addEventListener('click',function(event){

    year=event.target.year;
    month=event.target.month;
    date=event.target.date;

    date=date+15;

    const next_m=moment(new Date(year,month,date));

    create_h_calendar({		
      parent_tag_str:parent_tag_str,
      table_name:table_name,
      year: next_m.get('year'),
      month:next_m.get('month'),
      date: next_m.get('date'),
      youbi:youbi,
    });
  });

  a.year=year;
  a.month=month;
  a.date=date;
  a.youbi=youbi;

  parent_tag.appendChild(a);

  const today=moment();

  const m=moment(new Date(year,month,date));
  const thisDate=m.clone();

  const firstDate=moment(new Date(year,month,date-15));
  const lastDate=moment(new Date(year,month,date+15));

  console.log('firstDate year:'+firstDate.get('year'));
  console.log('firstDate month:'+(firstDate.get('month')+1));
  console.log('firstDate date:'+(firstDate.get('date')));

  console.log('lastDate year:'+  lastDate.get('year'));
  console.log('lastDate month:'+(lastDate.get('month')+1));
  console.log('lastDate date:'+( lastDate.get('date')));

  const div_body=document.createElement('div');
  
  let div_year=document.createElement('div');
  div_year.classList.add('h-calendar-year');

  let p=document.createElement('p');
  p.innerText=firstDate.get('year')+'年';
  p.classList.add('h-p-year');

  div_year.appendChild(p);

  let div_month=document.createElement('div');
  div_month.classList.add('h-calendar-month');

  p=document.createElement('p');
  p.innerText=(firstDate.get('month')+1)+'月';
  p.classList.add('h-p-month');

  div_month.appendChild(p);

  let div_date;//=document.createElement('div');
  // div_date.classList.add('h-calendar-date');

  // p=document.createElement('p');
  // p.innerText=year+'/'+(month+1);

  // div_month.appendChild(p);

  for(let i=firstDate;i<=lastDate;){

    year=i.get('year');
    month=i.get('month');
    date=i.get('date');

    div_date=document.createElement('div');
    div_date.classList.add('h-calendar-date');

    if(year==today.get('year')&&month==today.get('month')&&date==today.get('date')){
      div_date.classList.add('td-today');
    }

    if(i.get('day')==0){
      div_date.classList.add('td-sun');
    }

    if(i.get('day')==6){
      div_date.classList.add('td-sat');
    }
    // console.log(year+'/'+(month+1)+'/'+date);
    const holidays=getHolidays({year:year,month:month+1});

    // console.log(holidays);
    // div_date.innerText=(month+1)+'/'+date;
    div_date.innerText=date;
    div_date.classList.add('h-p-day');

    div_date.id='h-'+year+'-'+toDoubleDigits(month+1)+'-'+toDoubleDigits(date);

    for(let k=0;k<holidays.length;k++){
      if(div_date.id=='h-'+holidays[k].date){
        
        div_date.classList.add('td-shukujitu');

        div_date.title=holidays[k].name;
      
        $('#'+div_date.id).tooltip({
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

    div_month.appendChild(div_date);
    div_year.appendChild(div_month);
    div_body.appendChild(div_year);

    date=date+1;

    i=moment(new Date(year,month,date));

    const first_year=i.get('year');
    const first_month=0;
    const first_date=1;
    const first=moment(new Date(first_year,first_month,first_date));

    // 年始で新しい年度のブロックを作る
    if(i.isSame(first)){
      div_year=document.createElement('div');
      div_year.classList.add('h-calendar-year');
      p=document.createElement('p');
      p.classList.add('h-p-year');
      p.innerText=(i.get('year'))+'年';
      div_year.appendChild(p);
    }

    // 年始と月初めで新しい月のブロックを作る
    if(i.get('month')>month||i.isSame(first)){     

      div_month=document.createElement('div');
      div_month.classList.add('h-calendar-month');
      p=document.createElement('p');
      p.innerText=(i.get('month')+1)+'月';
      p.classList.add('h-p-month');
      div_month.appendChild(p);
    }

  }

  parent_tag.appendChild(div_body);

}