function add_user(){

	document.getElementById("param").style.height='250px';
	document.getElementById("result").style.height='250px';


	var param=document.getElementById("param");

	while(param.firstChild){
  		param.removeChild(param.firstChild);
	}

	var title=document.createElement('p');
		title.innerHTML='ユーザの新規登録';

	var input=document.createElement('input');
		input.type="text";
		input.id='user_name';
 		input.placeholder="ユーザのお名前";

	var button=document.createElement('input');
		button.type='button';
		button.value='登録する';
		button.id='user';

		button.addEventListener("click", function(e) {
			ajax_insert_into_users()
		});

		param.appendChild(title);
		param.appendChild(input);
		param.appendChild(button);
}
