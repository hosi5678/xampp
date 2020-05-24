function create_members_update_form(event){

  'use strict';

  console.log('----- in create members update form: -----');

  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;
  // id=event.target.id;
  // prev=event.target.prev;

  // console.log('parent tag str:'+parent_tag_str);
  // console.log('table_name:'+table_name);
  // // console.log('id:'+id);
  // console.log('prev:'+prev);

  var tds=$(this).closest('tr').children();

  var tds_val=new Array();

  for(var i=0;i<tds.length;i++){
    tds_val.push(tds[i].innerText);
  }

  console.log('tds val:');
  console.log(tds_val);

   $.when(

    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),

    ajax_get_col('youbi'),
    ajax_select_from_table('youbi'),

    ajax_get_col('riyou_keitai'),
    ajax_select_from_table('riyou_keitai'),

    ).done(function(label,col,youbi_col,youbi_row,riyou_col,riyou_row){

      console.log('----- in create members update form(after ajax):------');

      console.log('label:');
      console.log(label);
      console.log('col:');
      console.log(col);
      console.log('tds_val:');
      console.log(tds_val);
      console.log('parent_tag_str:'+parent_tag_str);

      // var parent_tag=document.getElementById(parent_tag_str+'_params');
      var parent_tag=document.getElementById(parent_tag_str+'_params');

      // 画面の更新
      while(parent_tag.firstChild){
        parent_tag.removeChild(parent_tag.firstChild);
      }

      var p=document.createElement('p');
      p.innerText='メンバー情報の修正';
  
      parent_tag.appendChild(p);
    // riyou情報の作成
      var riyou=new Array();
      riyou=getArrayFromRows(riyou,riyou_col,riyou_row);

      var youbi=new Array();
      youbi=getArrayFromRows(youbi,youbi_col,youbi_row);

      console.log('riyou is:');
      console.log(riyou);

      console.log('youbi is:');
      console.log(youbi);

      create_members_input_form({parent_tag_str:parent_tag_str,table_name:table_name,label:label,col:col,riyou:riyou});

      // 書き換え

      // titleの書き換え
      var form_title=document.getElementById('form-title');
      form_title.innerText='メンバー情報の修正';

      // 各カラムの上書き

      console.log('上書き');

      var id;

      for(var i=0;i<label.length;i++){

        if(label[i]=='id'){
            id=tds_val[i];
            continue;
        } 

        if(label[i]=='姓'||label[i]=='名'||label[i]=='備考'){
          document.getElementById(parent_tag_str+i).value=tds_val[i];
        }

        if(label[i]=='月'||label[i]=='火'||label[i]=='水'||label[i]=='木'||label[i]=='金'||label[i]=='土'){

          for(var k=0;k<document.getElementById(parent_tag_str+i).options.length;k++){
            if(document.getElementById(parent_tag_str+i).options[k].innerText==tds_val[i]){
              // document.getElementById(parent_tag_str+i).options[k].selected = true;
              // console.log('k:'+k);

              // // console.log('label[i]:'+label[i]);
              // console.log('riyou[k]:'+riyou[k]);
              // console.log('tds_val[i]:'+tds_val[i]);
              // console.log(parent_tag_str+i);


              // console.log('doc option[k] inner:'+document.getElementById(parent_tag_str+i).options[k].innerText);
              // document.getElementById(parent_tag_str+i).options[k].value);
              document.getElementById(parent_tag_str+i).options[k].selected=true;
              // console.log('length:'+document.getElementById(parent_tag_str+i).options.length);

            }

            // document.getElementById(parent_tag_str+i).options[k].innerText=riyou[k];
            // document.getElementById(parent_tag_str+i).options[k].value=k;

          }

        }


      }

      var exec=document.getElementById(parent_tag_str+'_exec');

      // 画面の更新
      while(exec.firstChild){
        exec.removeChild(exec.firstChild);
      }

      var a=document.createElement("a");

      a.href='#'+parent_tag_str;

      a.innerText='修正する';
      a.addEventListener('click',update_table);
      a.parent_tag_str=parent_tag_str;
      a.table_name=table_name;
      a.label=label;
      a.col=col;
      a.id=id;

      exec.appendChild(a);


    // formの作成
    // var form=document.createElement('form');
    // form.name='form_members_update';

    // var table=document.createElement('table');
    // var thead=document.createElement('thead');
    // var tbody=document.createElement('tbody');

    // var tr=document.createElement('tr');

    // var id;

    // for(var i=0;i<label.length;i++){
      
    //   if(label[i]=='id'){
    //     id=tds_val[i];
    //     continue;
    //   } 

    //   if(label[i]=='姓'||label[i]=='名'){
    //     var th=document.createElement('th');

    //       th.innerText=label[i];
    //       thead.appendChild(th);
    //       var td=document.createElement('td');

    //       var input=document.createElement('input');
    //       input.type='text';
    //       input.id=parent_tag_str+i;
    //       input.value=tds_val[i];

    //       td.appendChild(input);

    //       tr.appendChild(td);

    //   }
    // }

    // tbody.appendChild(tr);
    
    // table.appendChild(thead);
    // table.appendChild(tbody);

    // form.appendChild(table);
    // parent_tag.appendChild(form);

    // var table=document.createElement('table');
    // var thead=document.createElement('thead');
    // var tbody=document.createElement('tbody');
    // var tr=document.createElement('tr');

    // for(var i=0;i<label.length;i++){
      
    //     if(label[i]=='id') continue;
    //     if(label[i]=='姓'||label[i]=='名') continue;
    //     // if(label[i]=='日') continue;
    //     if(label[i]=='備考') continue;

    //     var th=document.createElement('th');
        
    //     if(label[i]=='土'){
    //       th.classList.add('td-sat');
    //     }
        
    //     th.innerText=label[i];
    //     thead.appendChild(th);
        
    //     var td=document.createElement('td');

    //     if(label[i]=='日'){
    //       th.classList.add('td-hide');
    //       td.classList.add('td-hide');
    //     }

    //     var select=document.createElement('select');
    //     select.id=parent_tag_str+i;

    //     for(var k=0;k<riyou.length;k++){
    //       if((label[i]=='土')&&((riyou[k]=='終日')||(riyou[k]=='午後'))) continue;

    //       var option=document.createElement('option');

    //       if(label[i]=='日'){
    //         if(riyou[k]=tds_val[i]){
    //           option.innerText=riyou[k];
    //           option.value=k;
    //           select.appendChild(option);

    //           break;
    //         }
    //       }
  
    //       if(riyou[k]==tds_val[i]){
    //         option.selected=true;
    //       }

    //         option.innerText=riyou[k];
    //         option.value=k;

    //         select.appendChild(option);
  
    //       }
          
    //       td.appendChild(select);      
    //       tr.appendChild(td)

    // }

    // tbody.appendChild(tr);

    // table.appendChild(thead);
    // table.appendChild(tbody);

    // form.appendChild(table);
    // parent_tag.appendChild(form);

    // var p=document.createElement('p');
    // p.innerText='備考欄';

    // form.appendChild(p);

    // for(var i=0;i<label.length;i++){
    //   if(label[i]=='備考'){
    //       var textarea=document.createElement('textarea');
    //       textarea.name='bikou';
    //       textarea.rows=5;
    //       textarea.cols=80;

    //       textarea.value=tds_val[i];
    //   }
    // }

    // form.appendChild(textarea);
    // parent_tag.appendChild(form);

    // var div=document.createElement('div');

    // var a=document.createElement("a");

    // a.style.display='inline-block';
    // a.classList.add('a-cancel');

    // a.parent_tag_str=parent_tag_str;
    // a.table_name=table_name;

    // a.href='#'+parent_tag_str;
    // a.innerText='戻る';

    // a.addEventListener('click',function(event){
    //   create_members_input_form({parent_tag_str:parent_tag_str,table_name:table_name,label:label,col:col,riyou:riyou});

    //   create_table({parent_tag_str:parent_tag_str,table_name:table_name,label:label,col:col,riyou:riyou,row:results});

    // });

    // div.appendChild(a);

    // // form.appendChild(a);

    // var a=document.createElement("a");

    // a.style.display='inline-block';
    // a.classList.add('a-mod');

    // a.href='#'+parent_tag_str;
    // a.innerText='修正する';
    // a.addEventListener('click',update_table);

    // a.table_name=table_name;
    // a.parent_tag_str=parent_tag_str;
    // a.col=member_col;
    // a.label=label;
    // a.prev='create_members_input_form';
    // a.id=id;

    // div.appendChild(a);

    // form.appendChild(div);
    
    // parent_tag.appendChild(form);

  });

}