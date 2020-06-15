'use strict';

function select_equal(event){

  console.log('----- in select_equal -----');

  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;

  var label=event.target.label;
  var col=event.target.col;

  var youbi=event.target.youbi;

  var key=document.getElementById(parent_tag_str+'_kensaku').value;

  console.log('key:'+key);
  console.log('table_name:'+table_name);
  console.log('label:'+label);
  console.log('col:'+col);

  for(var i=0;i<label.length;i++){
    if(key==label[i]){
      key=col[i];
      break;
    };
  }

  console.log('key:'+key);

  $.when(
    // ajaxは単体で使わない。whenと使う
    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),
    ajax_select_equal_key({table_name:table_name,col:key,key:'!=0'}),

    ).done(function(label,col,row){

      console.log('-----in select from like function(after ajax) -----');

      if(table_name=='members'){

        $.when(
          ajax_get_col('youbi'),
          ajax_select_from_table('youbi'),

          ajax_get_col('riyou_keitai'),
          ajax_select_from_table('riyou_keitai'),

        ).done(function(youbi_col,youbi_row,riyou_col,riyou_row){

            var youbi=new Array();

            youbi=getArrayFromRows({
                array:youbi,
                cols:youbi_col,
                rows:youbi_row
            });

            var riyou=new Array();

            riyou=getArrayFromRows({
                array:riyou,
                cols:riyou_col,
                rows:riyou_row
            });

            for(var j=0;j<row.length;j++){

              for(var i=0;i<label.length;i++){
    
                if(label[i]=='id'||label[i]=='姓'||label[i]=='名'||label[i]=='備考') continue;
                        
                // 曜日を数値から文字列に変換(上書き)
                for(var r=0;r<riyou.length;r++){
                    if(row[j][label[i]]==r){
                      row[j][label[i]]= riyou[r]; 
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

      }
    }
  );


}