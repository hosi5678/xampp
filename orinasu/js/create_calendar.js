function create_calendar(parent_tag_str,year,month,day){

    console.log('in create calendar');

     // 画面の更新
     var parent_tag=document.getElementById(parent_tag_str+'_results');

     while(parent_tag.firstChild){
         parent_tag.removeChild(parent_tag.firstChild);
     }
 
    var form=document.createElement('form');
		 
		form.name=parent_tag_str;

    var div_title=document.createElement('div');
     
    var div=document.createElement('div');
        div.id='year';
        div.value=year;
        div.innerText=year+'年';
        div.style.display='inline-block';

    div_title.appendChild(div);

    var div=document.createElement('div');
      div.id='month';
      div.value=month;
      div.innerText=month+'月';
      div.style.display='inline-block';

    div_title.appendChild(div);

		form.appendChild(div_title);
		 
		 var div=document.createElement('div');
		 div.style.display='inline-block';
		 div.innerText='<<';

		 div.addEventListener('click',function(event){
			//  console.log(div.innerText);
			//  console.log(year);

			 month=month-1;

			 if(month==0){
				 month=12;
				 year=year-1;
			 }

			 create_calendar(parent_tag_str,year,month,day);
		 });

		div_title.appendChild(div);

		var div=document.createElement('div');
		div.style.display='inline-block';
		div.innerText='今月';

		div.addEventListener('click',function(event){
			// console.log(div.innerText);
			// console.log(year);

			var this_month=new Date();

			year=this_month.getFullYear();
			month=this_month.getMonth()+1;

			create_calendar(parent_tag_str,year,month,day);
		});

		div_title.appendChild(div);


		var div=document.createElement('div');
		div.style.display='inline-block';
		div.innerText='>>';

		div.addEventListener('click',function(event){
			console.log(div.innerText);
			console.log(year);

			month=month+1;

			if(month==13){
				month=month-12;
				year=year+1;
			}

			create_calendar(parent_tag_str,year,month,day);
		});

		div_title.appendChild(div);


    //  var p=document.createElement('p');

    //  p.innerText=(month+1)+'月';

    //  form.appendChild(p);

     parent_tag.appendChild(form);

}