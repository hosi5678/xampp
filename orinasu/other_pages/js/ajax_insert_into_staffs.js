function ajax_insert_into_staffs(){
//       var id = $('input[name="id"]:checked').val();

			name=$('#staff_name').val();

			$.post({
				url: '../../libs/ajax_insert_into_staffs.php',
		      data:{
					'name':name
				},

			dataType:'json' //'json', 

        }).done(function(data){
//				document.form1.password.value =data;
				
				var result;
					result=document.getElementById('result');

				while(result.firstChild){
  					result.removeChild(result.firstChild);
				} 

				var title;
					title=document.createElement('p');
					title.innerHTML="検索結果:";

					result.appendChild(title);

				var table;
					table=document.createElement('table');

				for(var i in data){
					var tr=document.createElement('tr');
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
/* original 
function ajax_select_from_users(){
//       var id = $('input[name="id"]:checked').val();
     			
			$.post({
				url: '../../libs/ajax_insert_into_users.php',
		      data:{
//					'id':id
				},

			dataType:'json' //'json', 

        }).done(function(data){
//				document.form1.password.value =data;
				
				var result;
					result=document.getElementById('result');

				while(result.firstChild){
  					result.removeChild(result.firstChild);
				} 

				var title;
					title=document.createElement('p');
					title.innerHTML="検索結果:";

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
*/
