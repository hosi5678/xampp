function ajax_update_members(){
  
  console.log('-- in update from members --');

  var defer = new $.Deferred;

  // var id=$(this).closest('form')[0].id;
  var id=document.getElementById('hidden').value;

  var riyou_keitai=new Array();

  var myouji=document.getElementById('myouji').value;
  var namae=document.getElementById('namae').value;

  // 日曜日の値をここで代入する(辻褄をあわせている。)
  riyou_keitai.push("0");

  for(var i=0;i<7;i++){

      if(i==0) continue;

      var str='day0'+i;
      riyou_keitai.push(document.getElementById(str).value);

  }

  // console.log('id='+id);
  // console.log(myouji);
  // console.log(namae);
  // console.log(riyou_keitai[1]);
  // console.log(riyou_keitai[2]);
  // console.log(riyou_keitai[3]);
  // console.log(riyou_keitai[4]);
  // console.log(riyou_keitai[5]);
  // console.log(riyou_keitai[6]);

  $.post({
    url: '../php_libs/ajax_update_members.php',
      data:{
       // 'table_name':table_name,
       'id':id,
       'myouji':myouji,
       'namae':namae,
        'sun':riyou_keitai[0],
        'mon':riyou_keitai[1],
        'tue':riyou_keitai[2],
        'wed':riyou_keitai[3],
        'thu':riyou_keitai[4],
        'fri':riyou_keitai[5],
        'sat':riyou_keitai[6]

     },

      dataType:'json', 

  }).done(function(result){
  
    console.log('update from members result:');
    console.log(result.length);

    ajax_create_Members_Table("select");

    defer.resolve(result);
//         put_option_tabs(result,tag_name);

  }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
  })

  return defer.promise();

}