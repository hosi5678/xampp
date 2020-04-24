function ajax_delete_from_members_where_id(id){

	$.post({
		url: '../../libs/ajax_delete_from_members_where_id.php',
		data:{
				'id':id
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
