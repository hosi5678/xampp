'use strict';

function create_members_update_form(event){

  console.log('----- in create members update form: -----');

  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;
  var mode=event.target.mode;
  var label=event.target.label;
  var col=event.target.col;

  console.log('update mode:'+mode);

  console.log('event type:'+event.type);

  var tds=$(this).closest('tr').children();

  var tds_val=new Array();

  for(var i=0;i<tds.length;i++){
    tds_val.push(tds[i].innerText);
  }

  console.log('tds val:');
  console.log(tds_val);

    $.when(

      ajax_get_col('youbi'),
      ajax_select_from_table('youbi'),

      ajax_get_col('riyou_keitai'),
      ajax_select_from_table('riyou_keitai'),

    ).done(function(youbi_col,youbi_row,riyou_col,riyou_row){

      var mode='update';

      console.log('----- in create members update form(after ajax):------');

      console.log('label:');
      console.log(label);
      console.log('col:');
      console.log(col);
      console.log('tds_val:');
      console.log(tds_val);
      console.log('parent_tag_str:'+parent_tag_str);
      console.log('mode:'+mode);

      childNodeClear(parent_tag_str+'_status');

      var parent_tag=childNodeClear(parent_tag_str+'_title');

      var p=document.createElement('p');
      p.innerText='メンバー情報の修正';
  
      parent_tag.appendChild(p);

      var riyou=new Array();

      riyou=getArrayFromRows({
        array:riyou,
        cols:riyou_col,
        rows:riyou_row
      });

      var youbi=new Array();

      youbi=getArrayFromRows({
        array:youbi,
        cols:youbi_col,
        rows:youbi_row
      });

      console.log('riyou is:');
      console.log(riyou);

      console.log('youbi is:');
      console.log(youbi);

      console.log('mode:'+mode);

      create_members_input_form({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
        label:label,
        col:col,
        riyou:riyou,
        mode:mode,
        youbi:youbi,
      });

      // update(書き換え)

      // titleの書き換え
      if(mode=='update'){

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

      create_exec({
        parent_tag_str:parent_tag_str,
        sub_tag_str:'_exec',
        table_name:table_name,
        label:label,
        col:col,
        mode:'update', // update table
        class_str:'a-mod',
        id:id,
      });

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
            youbi:youbi,
            mode:mode,
            })
        }
      );

        exec.appendChild(a);

      }

    });

}