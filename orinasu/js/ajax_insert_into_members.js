function ajax_insert_into_members(){

  //var elem =document.getElementById('day01');

  var riyou_keitai=new Array();

  var myouji=document.getElementById('myouji').value;
  var namae=document.getElementById('namae').value;

  // 日曜日の値をここで代入する(辻褄をあわせている。)
  riyou_keitai.push("0");

  for(var i=1;i<7;i++){
      var str='day0'+i;
      riyou_keitai.push(document.getElementById(str).value);

  }

  console.log("---in insert into members---");
  
  console.log(riyou_keitai);
  
  var defer = new $.Deferred;
  //var column='content';

   // console.log("ajax_select_from_table : "+ table_name);

        $.post({
          url: '../php_libs/ajax_insert_into_members.php',
            data:{
             // 'table_name':table_name,
             'myouji':myouji,
             'namae':namae,
              'sun':riyou_keitai[0],
              'mon':riyou_keitai[1],
              'tue':riyou_keitai[2],
              'wed':riyou_keitai[3],
              'thu':riyou_keitai[4],
              'fri':riyou_keitai[5],
              'sat':riyou_keitai[6],

            },

            dataType:'json', 

        }).done(function(result){
        
          console.log('insert into members result:');
          console.log(result.length);

       //   ajax_create_Member_Form("select");
  
          defer.resolve(result);
 //         put_option_tabs(result,tag_name);

        }).fail(function(XMLHttpRequest, textStatus, errorThrown){
              console.log(XMLHttpRequest);
              console.log(textStatus);
              console.log(errorThrown);
        })

        return defer.promise();

}