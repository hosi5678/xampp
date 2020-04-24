function create_members_table(data){
				var result=document.getElementById('result');

				while(result.firstChild){
  					result.removeChild(result.firstChild);
				} 

				var title=document.createElement('p');
					title.innerHTML="利用者一覧";

					result.appendChild(title);

				var table;
					table=document.createElement('table');

				for(var i in data){
				
					var tr=document.createElement('tr');
					
					tr.id=data[i].id;
					
					var td=document.createElement('td');
					td.innerHTML=parseInt(i)+1; //data[i].id;
					tr.appendChild(td);

					var td=document.createElement('td');
					td.innerHTML=data[i].surname;
					tr.appendChild(td);
					
					var td=document.createElement('td');
					td.innerHTML=data[i].name;
					tr.appendChild(td);
					
					var td=document.createElement('td');
					td.innerHTML=data[i].start_date;
					tr.appendChild(td);
					
					var td=document.createElement('td');
						
					td.innerHTML='削除する';
					td.classList.add('remove');
										
					td.addEventListener('click',function(e) {
						
							id=$(this).parent().attr('id');
							name=$(this).prev().prev().text()+' '+$(this).prev().text();
							start_date=$(this).prev().prev().prev().text();
														
							ajax_delete_from_members_where_id(id,name);
						
					});				

					
					tr.appendChild(td);
					
					var td=document.createElement('td');
					td.innerHTML='修正する';
					td.classList.add('update');	
					
					td.addEventListener('click',function(e) {
						
							id=$(this).parent().attr('id');
							/*
							surname=$(this).prev().prev().prev().prev().text();
							name=$(this).prev().prev().prev().text();
							start_date=$(this).prev().prev().text();
							*/	
							
							console.log('in create members table js');
							console.log(id);
							
							create_members_box("メンバーの修正","名前の修正","修正",2,id);
								
							// ajax_update_members_set_where(id);
						
					});
					
					tr.appendChild(td);				

					table.appendChild(tr);
				}

					result.appendChild(table);
}
