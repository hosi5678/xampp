function about_users(){

	common_change_borders();

	var param=document.getElementById("param");

	while(param.firstChild){
  		param.removeChild(param.firstChild);
	}

	var div=document.createElement('div');

	var p=document.createElement('p');
	p.innerHTML='新規登録';
	div.appendChild(p);

	var p=document.createElement('p');
	p.innerHTML='新規メンバーの氏名';
	p.style.display='inline-block';

	div.appendChild(p);

	var input=document.createElement('input');
		input.type="text";
		input.name='member_surname';
 		input.placeholder="姓";
		input.required=true;
		input.style.display="inline-block";
//		input.classList.add("menu");
		input.style.marginLeft="20px";
		input.style.width="150px";
		input.style.height='30px';
		input.style.display='inline-block';
		
	div.appendChild(input);

	var input=document.createElement('input');
		input.type="text";
		input.name='member_name';
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
		date.name='start_date';
		date.style.marginLeft="0px";
		date.style.display='inline-block';

	div.appendChild(date);
	param.appendChild(div);

	var div=document.createElement('div');

	var button=document.createElement('input');
		button.type='button';
		button.value='登録する';
		button.id='user';
		button.style.width="200px";
		button.style.height='30px';

		button.addEventListener("click",function(e) {
			ajax_insert_into_users()
		});

		div.appendChild(button);
		param.appendChild(div);

		ajax_select_from_users();

}
