function add_staff(){

	var regist=document.getElementById("registration");

	while(regist.firstChild){
  		regist.removeChild(regist.firstChild);
	}

	var title=document.createElement('p');
		title.innerHTML='スタッフの新規登録';

	var input=document.createElement('input');
		input.type="text";
		input.id='staff_name';
 		input.placeholder="スタッフのお名前";

	var button=document.createElement('input');
		button.type='button';
		button.value='登録する';
		button.id='staff';

		button.addEventListener("click", function(e) {
			ajax_insert_into_staffs()
		});

		regist.appendChild(title);
		regist.appendChild(input);
		regist.appendChild(button);
}
