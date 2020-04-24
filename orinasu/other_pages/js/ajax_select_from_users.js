function ajax_select_from_users(){
//       var id = $('input[name="id"]:checked').val();
     			
			$.post({
				url: '../../libs/ajax_select_from_users.php',
		      data:{
//					'id':id
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

				var title;
					title=document.createElement('p');
					title.innerHTML="利用者一覧";

					result.appendChild(title);

				var table;
					table=document.createElement('table');

				for(var i in data){
					// alert(data[i].name);
					var tr=document.createElement('tr');
					var td=document.createElement('td');
					td.innerHTML=data[i].name;
					tr.appendChild(td);
					table.appendChild(tr);
				}

					result.appendChild(table);
				
        }).fail(function(XMLHttpRequest,textStatus,errorThrown){
            console.log(errorThrown);
        })
    
}