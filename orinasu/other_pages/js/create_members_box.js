function create_members_box(title_text,p_text,button_text,type,id){

	var param=document.getElementById("param");

	while(param.firstChild){
  		param.removeChild(param.firstChild);
	}

	var div=document.createElement('div');

	var p=document.createElement('p');
	p.innerHTML=title_text;
	div.appendChild(p);

	var p=document.createElement('p');
	p.innerHTML=p_text;
	p.style.display='inline-block';

	div.appendChild(p);

	var input=document.createElement('input');
		input.type="text";
		input.id='member_surname';
 		input.placeholder="姓";
		input.required=true;
		input.style.display="inline-block";
		input.style.marginLeft="20px";
		input.style.width="150px";
		input.style.height='30px';
		input.style.display='inline-block';
		
	div.appendChild(input);

	var input=document.createElement('input');
		input.type="text";
		input.id='member_name';
 		input.placeholder="名";
		input.required=true;
		input.style.display="inline-block";
//		input.classList.add("menu");
		input.style.marginLeft="10px";
		input.style.width="150px";
		input.style.height='30px';
		input.style.display='inline-block';

	div.appendChild(input);
	param.appendChild(div);

	var div=document.createElement('div');

	var p=document.createElement('p');
	p.innerHTML='利用開始日';
	p.style.display='inline-block';

	div.appendChild(p);

	var date=document.createElement('input');
		date.type='date';
		date.id='start_date';
		date.style.marginLeft="0px";
		date.style.display='inline-block';

	div.appendChild(date);
	param.appendChild(div);

	var div=document.createElement('div');

	var button=document.createElement('input');
		button.type='button';
		button.value=button_text;
		button.id='insert_member';
		button.style.width="200px";
		button.style.height='30px';
				
		if(type==1){
				button.addEventListener("click",function(e) {
					ajax_insert_into_members();
				});
		}else if(type==2){
				button.addEventListener("click",function(e) {
					console.log('in create members box js');
					console.log(id);
					ajax_update_members_set_where(id);
				});
		}
		
		div.appendChild(button);
				
		param.appendChild(div);
}