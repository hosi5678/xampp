function ajax_select_from_staffs(){
//       var id = $('input[name="id"]:checked').val();

     		var param;
			param=document.getElementById('param');

			while(param.firstChild){
  				param.removeChild(param.firstChild);
			}
    			
			$.post({
				url: '../../libs/ajax_select_from_staffs.php',
		      data:{
					},

			dataType:'json' //'json', 

        }).done(function(data){
//				document.form1.password.value =data;
				
				document.getElementById("param").style.height='0px';
				document.getElementById("result").style.height='500px';

				var result;
					result=document.getElementById('result');

				while(result.firstChild){
  					result.removeChild(result.firstChild);
				} 

				var	title=document.createElement('p');
					title.innerHTML="スタッフ一覧";

					result.appendChild(title);


				var	table=document.createElement('table');

				for(var i in data){

					var tr=document.createElement('tr');

					var td=document.createElement('td');
					td.innerHTML=data[i].surname;
					tr.appendChild(td);

					var td=document.createElement('td');
					td.innerHTML=data[i].name;

					tr.appendChild(td);
					table.appendChild(tr);
				}

					result.appendChild(table);
				
        }).fail(function(XMLHttpRequest,textStatus,errorThrown){
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
        })
    
}