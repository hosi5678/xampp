function create_Members_Table(tag_name_str,youbi,riyou,members){


  var tag_name=document.getElementById(tag_name_str);

  removeChild(tag_name);

  var table=document.createElement('table');

  var tr=document.createElement('tr');

  tr=create_td(tr,
    "No",
    "姓",
    "名",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土"

    );

    table.appendChild(tr);

  for(var i=0;i<members.length;i++){
    
    var tr=document.createElement('tr');

      tr=create_td(tr,
                (i+1),
                members[i].myouji,
                members[i].namae,
                num_to_riyou(members[i].mon,riyou),
                num_to_riyou(members[i].tue,riyou),
                num_to_riyou(members[i].wed,riyou),
                num_to_riyou(members[i].thu,riyou),
                num_to_riyou(members[i].fri,riyou),
                num_to_riyou(members[i].sat,riyou)
           
                );

    // var tr=document.createElement('tr');

    tr.id=members[i].id;



    var td=document.createElement('td');
    
    var button=document.createElement('button');
    button.textContent='修正する';

    // button.addEventListener('click',update_Member_Form);
    button.addEventListener('click',function(){

      var id=$(this).closest('tr')[0].id;
      var myouji=$(this).closest('tr').children('td')[1].innerText;
      var namae=$(this).closest('tr').children('td')[2].innerText;
      var mon=$(this).closest('tr').children('td')[3].innerText;
      var tue=$(this).closest('tr').children('td')[4].innerText;
      var wed=$(this).closest('tr').children('td')[5].innerText;
      var thu=$(this).closest('tr').children('td')[6].innerText;
      var fri=$(this).closest('tr').children('td')[7].innerText;
      var sat=$(this).closest('tr').children('td')[8].innerText;


      $.when(
        ajax_select_from_table('youbi','content'),
        ajax_select_from_table('riyou_keitai','content')
      ).done(function(res_1,res_2){

        // console.log(id);
       // console.log($(this).closest('tr')[0].id);
          update_Member_Form('create',res_1,res_2,id,myouji,namae,mon,tue,wed,thu,fri,sat);
      });


    },false);

    button.style.width='80px';
    button.style.height='20px';

    td.appendChild(button);

    tr.appendChild(td);

    var td=document.createElement('td');
    td.innerText='x';
    td.addEventListener('click',ajax_delete_from_members);

    tr.appendChild(td);

    table.appendChild(tr);
      
  }
  
  tag_name.appendChild(table);
}