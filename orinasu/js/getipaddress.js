function getipaddress(){

	let ipaddress;

			$(function(){
//				$('.radio').on("click",function(){
						password = $(this).val(); //選択したメニューの値
							$.post({
								url: '../libs/ajax_getipaddress.php',
									data:{
										// 'password':password
									},
									dataType:'json', // in case of data type is array,dataType:'json'
							}).done(function(data){
  									// alert(data);
								alert(data);
							}).fail(function(XMLHttpRequest, textStatus, errorThrown){
            				alert(errorThrown);
							})
//   			})
			})

}