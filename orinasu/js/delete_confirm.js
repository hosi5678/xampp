'use strict';

function delete_confirm(event){

    var table_name=event.target.table_name;
    var parent_tag_str=event.target.parent_tag_str;
    var label=event.target.label;
    var col=event.target.col;
  
    console.log('----- in delete confirmation -----');
  
    console.log('table_name:'+table_name);
    console.log('parent_tag_str:'+parent_tag_str);
  
    console.log('label is:');
    console.log(label);
  
    console.log('col is:');
    console.log(col);

    childNodeClear(parent_tag_str+'_title');
    childNodeClear(parent_tag_str+'_hyou');
    childNodeClear(parent_tag_str+'_params');
    childNodeClear(parent_tag_str+'_results');
    childNodeClear(parent_tag_str+'_exec');

    // idの取得
  
    var tds=$(this).closest('tr').children();
  
    var id;
  
    for(var i=0;i<label.length;i++){
      if(label[i]=='id'){
        id=tds[i].innerText;
      }     
    }
  
    console.log('id:'+id);

  var parent_tag=document.getElementById(parent_tag_str+'_params');

  var memo;

  for(var i=0;i<label.length;i++){
    if(label[i]=='日付'){
      memo=tds[i].innerText;
    }     
  }

  var p=document.createElement('p');

  p.innerHTML='メモ : '+memo+'のメモを<span class="delete-alert">削除</span>します。よろしいですか？';
  p.classList.add('delete-message');

  parent_tag.appendChild(p);

  var a=document.createElement('a');

  a.innerText='キャンセル';
  a.style.display='inline-block';
  a.classList.add('a-cancel');
  a.table_name=table_name;
  a.parent_tag_str=parent_tag_str;

  a.addEventListener('click',function(event){

      $.when(

        ajax_get_col(table_name+'_join'),
        ajax_get_col(table_name),

        ajax_get_col('youbi'),
        ajax_select_from_table('youbi'),
  
      ).done(function(label,col,youbi_cols,youbi_rows){

        var mode='insert';

        var youbi=new Array();
          
          youbi=getArrayFromRows({
            array:youbi,
            rows:youbi_rows,
            cols:youbi_cols
          });

          var curr=new Date();
          var currYear=curr.getFullYear();
          var currMonth=curr.getMonth();
          
          create_calendar({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
            year:currYear,
            month:currMonth,
            youbi:youbi,
            label:label,
            col:col
          });

      });

  });

  parent_tag.appendChild(a);

  var a=document.createElement('a');

  a.innerText='削除する';

  a.addEventListener('click',delete_table);
  a.style.display='inline-block';
  a.classList.add('a-delete');
  a.id=id;
  a.table_name=table_name;
  a.prev='delete_confirm';
  a.label=label;
  a.parent_tag_str=parent_tag_str;

  parent_tag.appendChild(a);

  

}