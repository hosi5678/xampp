function create_products_input_form(parent_tag_str,table_name){

    console.log('----- in create_products_input_form -----');
    console.log('parent_tag_str:'+parent_tag_str);
    console.log('table_name:'+table_name);

    var parent_tag=document.getElementById(parent_tag_str+'_params');
  
     $.when(
  
      ajax_stmt_exec(table_name+'_join',"select * from "+table_name+" limit 0;",'column'),
      ajax_stmt_exec(table_name,"select * from "+table_name+" limit 0;",'column'),
    //   ajax_stmt_exec('ri',"select * from "+table_name+" limit 0;",'column'),
    //   ajax_stmt_exec('riyou_keitai','select * from riyou_keitai;','assoc')
    //   ajax_stmt_exec('riyou_keitai',"select * from "+table_name+" limit 0;",'column'),
    //   ajax_stmt_exec('riyou_keitai','select * from riyou_keitai;','assoc')
  
      ).done(function(label,products_col){
        
        console.log('label:'+label);
      // 画面の更新
    //   while(parent_tag.firstChild){
    //     parent_tag.removeChild(parent_tag.firstChild);
    //   }
  
    //   var p=document.getElementById(parent_tag_str+'_title');
    //   p.innerText='新規登録';
    
    //   var form=document.createElement('form');
  
    //   var table=document.createElement('table');
    //   var thead=document.createElement('thead');
    //   var tbody=document.createElement('tbody');
  
    //   var tr=document.createElement('tr');
  
    //   for(var i=1;i<3;i++){
    //     var th=document.createElement('th');
    //       th.innerText=label[i];
    //       thead.appendChild(th);
  
    //       var td=document.createElement('td');
    //       var input=document.createElement('input');
    //       input.type='text';
    //       input.placeholder=label[i];
    //       input.id=table_name+i;
  
    //       td.appendChild(input);
    //       tr.appendChild(td);
    //       tbody.appendChild(tr);
  
    //   }
  
    //   table.appendChild(thead);
    //   table.appendChild(tbody);
  
    //   var riyou=new Array();
  
    //   for(var j=0;j<riyou_row.length;j++){
    //       for(var i=0;i<riyou_col.length;i++){
    //           if(i==0) continue;
    //             riyou.push(riyou_row[j][riyou_col[i]]);
    //       }
    //   }
  
    //   form.appendChild(table);
    //   parent_tag.appendChild(form);
  
    //   var table=document.createElement('table');
    //   var thead=document.createElement('thead');
    //   var tbody=document.createElement('tbody');
  
    //   var tr=document.createElement('tr');
  
    //   for(var j=3;j<label.length;j++){
    //     // if(j==3) continue; // 日曜日はスキップ
  
    //     var th=document.createElement('th');
    //     var td=document.createElement('td');
  
    //     if(label[j]=='日'){
    //       th.classList.add('td-hide');
    //       td.classList.add('td-hide');
    //     } 
  
    //     if(label[j]=='土') th.classList.add('td-sat');
  
    //     th.innerText=label[j];
    //     thead.appendChild(th);
  
    //     var select=document.createElement('select');
    //     select.id=table_name+j;
  
    //       for(var i=0;i<riyou.length;i++){
    //         if((j==label.length-1)&&((i==1)||i==3)) continue; // 土曜日の終日と午後はスキップ
  
    //         var option=document.createElement('option');
  
    //           option.innerText=riyou[i];
    //           option.value=i;
  
    //           select.appendChild(option);
             
    //         }
  
    //         td.appendChild(select);
  
    //       tr.appendChild(td);
  
    //       tbody.appendChild(tr);
  
    //   }
  
    //   var button=document.createElement("button");
  
    //   button.innerText='新規登録する';
    //   button.addEventListener('click',insert_table);
      
    //   button.col=member_col;
    //   button.table_name=table_name;
    //   button.prev='create_members_input_form';
    //   button.parent_tag_str=parent_tag_str;
  
    //   table.appendChild(thead);
    //   table.appendChild(tbody);
    //   form.appendChild(table);
    //   form.appendChild(button);
    //   parent_tag.appendChild(form);
  
    });
  
  }