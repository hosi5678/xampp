'use strict';

function create_members_update_form(event){


  console.log('----- in create members update form: -----');

  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;
  var mode=event.target.mode;
  var label=event.target.label;
  var col=event.target.col;


  // id=event.target.id;
  // prev=event.target.prev;

  // console.log('parent tag str:'+parent_tag_str);
  // console.log('table_name:'+table_name);
  // // console.log('id:'+id);
  // console.log('id:'+id);

  console.log('update mode:'+mode);

  var tds=$(this).closest('tr').children();

  var tds_val=new Array();

  for(var i=0;i<tds.length;i++){
    tds_val.push(tds[i].innerText);
  }

  console.log('tds val:');
  console.log(tds_val);

   $.when(

    // ajax_get_col(table_name+'_join'),
    // ajax_get_col(table_name),

    ajax_get_col('youbi'),
    ajax_select_from_table('youbi'),

    ajax_get_col('riyou_keitai'),
    ajax_select_from_table('riyou_keitai'),

    ).done(function(youbi_col,youbi_row,riyou_col,riyou_row){

      console.log('----- in create members update form(after ajax):------');

      console.log('label:');
      console.log(label);
      console.log('col:');
      console.log(col);
      console.log('tds_val:');
      console.log(tds_val);
      console.log('parent_tag_str:'+parent_tag_str);
      console.log('mode:'+mode);

      var parent_tag=document.getElementById(parent_tag_str+'_params');

      // 画面の更新
      while(parent_tag.firstChild){
        parent_tag.removeChild(parent_tag.firstChild);
      }

      var p=document.createElement('p');
      p.innerText='メンバー情報の修正';
  
      parent_tag.appendChild(p);

      var riyou=new Array();
      riyou=getArrayFromRows(riyou,riyou_col,riyou_row);

      var youbi=new Array();
      youbi=getArrayFromRows(youbi,youbi_col,youbi_row);

      console.log('riyou is:');
      console.log(riyou);

      console.log('youbi is:');
      console.log(youbi);

      var mode='update';

      console.log('mode:'+mode);

      create_members_input_form({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
        label:label,
        col:col,
        riyou:riyou,
        mode:mode
      });

      // update(書き換え)

      // titleの書き換え
      if(mode='update'){

      
      var form_title=document.getElementById('form-title');
      form_title.innerText='メンバー情報の修正';

      // // 各カラムの上書き

      // console.log('上書き');

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
              document.getElementById(parent_tag_str+i).options[k].selected=true;

            }

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
      a.addEventListener('click',function(event){
        update_table({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          id:id
        })
      });
      
      a.parent_tag_str=parent_tag_str;
      a.table_name=table_name;
      a.label=label;
      a.col=col;
      a.id=id;

      exec.appendChild(a);

      var a=document.createElement("a");

      a.href='#'+parent_tag_str;

      a.innerText='戻る';

      var mode='insert';

      a.addEventListener('click',

        function(event){
          create_members_input_form({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
            label:label,
            col:col,
            riyou:riyou,
            mode:mode
            })
        }
      );

      exec.appendChild(a);
      }

  });

}