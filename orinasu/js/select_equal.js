'use strict';

function select_equal(event){

  console.log('----- in select_equal -----');

  const parent_tag_str=event.target.parent_tag_str;
  const table_name=event.target.table_name;

  const label=event.target.label;
  const col=event.target.col;

  const id=event.target.id;

  let key;
  let condition;
  
  if(parent_tag_str=='members'){
    key=document.getElementById(parent_tag_str+'_kensaku').value;
    for(var i=0;i<label.length;i++){
      if(key==label[i]){
        key=col[i];
        break;
      };
    }
    condition='!=0';

  }else if(parent_tag_str=='products'){
    let val=document.getElementById(id).value;
    if(typeof val=='string') val='"'+val+'"';
    key=col+'='+val;
    condition='';
  }

  console.log('key:'+key);
  console.log('table_name:'+table_name);
  console.log('label:'+label);
  console.log('col:'+col);
  console.log('youbi:');

  console.log('key:'+key);

  $.when(
    // ajaxは単体で使わない。whenと使う
    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),
    ajax_select_equal_key({table_name:table_name,col:key,key:condition}),

    ).done(function(label,col,row){

      console.log('-----in select from like function(after ajax) -----');

      if(table_name=='members'){

        $.when(
          ajax_get_col('youbi'),
          ajax_select_from_table('youbi'),

          ajax_get_col('riyou_keitai'),
          ajax_select_from_table('riyou_keitai'),

        ).done(function(youbi_col,youbi_row,riyou_col,riyou_row){

            let youbi=new Array();
            let riyou=new Array();

            youbi=getArrayFromRows({
                cols:youbi_col,
                rows:youbi_row
            });

            riyou=getArrayFromRows({
                cols:riyou_col,
                rows:riyou_row
            });

            for(let j=0;j<row.length;j++){

              for(let i=0;i<youbi.length;i++){
    
                if(youbi[i]=='日') continue;
                        
                // 曜日を数値から文字列に変換(上書き)
                for(let r=0;r<riyou.length;r++){
                    if(row[j][youbi[i]]==r){
                      row[j][youbi[i]]= riyou[r]; 
                    }
                }
    
              }
    
            }

            create_table({
              parent_tag_str:parent_tag_str,
              table_name:table_name,
              label:label,
              col:col,
              row:row,
            });
    
        });

      }else if(table_name=='products'){
        create_table({
          parent_tag_str:parent_tag_str,
          table_name:table_name,
          label:label,
          col:col,
          row:row,
        });
  
      }



    }
  );


}