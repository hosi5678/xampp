function ajax_update_members_set_where(id){

			surname=$('#member_surname').val();
			name=$('#member_name').val();
			start_date=$('#start_date').val();
/*		
			member_surname=$('#member_surname').val();
			member_name=$('#member_name').val();
			start_date=$('#start_date').val();
*/			
			console.log('in update js');
			console.log(id);
			console.log(surname);
			console.log(name);
			console.log(start_date);
		
	$.post({
		url: '../../libs/ajax_update_members_set_where.php',
		data:{
				'id':id,
				'surname':surname,
				'name':name,
				'start_date':start_date
		},
		dataType:'json' //'json', 
       }).done(function(data){

			create_members_table(data);
				
        }).fail(function(XMLHttpRequest,textStatus,errorThrown){
        	console.log(XMLHttpRequest);
        	console.log(textStatus);
         	console.log(errorThrown);
        })

}