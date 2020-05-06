// <ul></ul>のタグがあれば動く
//

function getAjaxPromise(sleep_sec) {
	var defer = new $.Deferred;
	$.post({
		url: '../libs/test-deferred-when.php',
		data: {
			'sleep_sec':sleep_sec
		},
		dataType: 'json' //'json', 
	}).done(function (data) {
		//	create_members_table(data); // この時点で何らかの処理を行う
		defer.resolve(data); //
	}).fail(function (XMLHttpRequest, textStatus, errorThrown) {
		console.log(XMLHttpRequest);
		console.log(textStatus);
		console.log(errorThrown);
	});
	return defer.promise();
}

$.when(
    getAjaxPromise(1), 
    getAjaxPromise(2), 
    getAjaxPromise(4), 
    getAjaxPromise(2), 
    getAjaxPromise(1))
  .done(function(data_1, data_2, data_3, data_4, data_5){
      $("ul").append("<li>" + data_1 + "</li>");
      $("ul").append("<li>" + data_2 + "</li>");
      $("ul").append("<li>" + data_3 + "</li>");
      $("ul").append("<li>" + data_4 + "</li>");
      $("ul").append("<li>" + data_5 + "</li>");
    });
 
