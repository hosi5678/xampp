function select_from_like(event){

  var table_name=event.target.table_name;
  var col=event.target.col;
  var parent_tag_str=event.target.parent_tag_str;
  var label=event.target.label;
  var id=event.target.id;
  var riyou=event.target.riyou;

  var parent_tag=document.getElementById(parent_tag_str+'_like');
  
  console.log('-----in select from like function(before ajax) -----');
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('table_name:'+table_name);
  console.log('col:'+col);
  console.log('id:'+id);


  while(parent_tag.firstChild){
    parent_tag.removeChild(parent_tag.firstChild);
  }

  var key=document.getElementById(id).value;

  console.log(key);




  $.when(
    // ajaxは単体で使わない。whenと使う
    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),
    ajax_select_like(table_name,col,key),
    // ajax_get_col('youbi'),
    // ajax_select_from_table('youbi'),
    // ajax_get_col('riyou_keitai'),
    // ajax_select_from_table('riyou_keitai'),
    
    // ajax_get_col('category'),
    // ajax_select_from_table('category'),

    // ajax_get_col('tax'),
    // ajax_select_from_table('tax'),

    // ajax_get_col('round_type'),
    // ajax_select_from_table('round_type')

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
    
                if(label[i]=='id'||label[i]=='備考') continue;
                    
                if(label[i]=='姓'||label[i]=='名') continue;
    
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



      // var category=new Array();

      // category=getArrayFromRows({
      //   array:category,
      //   cols:category_col,
      //   rows:category_row
      // })

      // var round=new Array();

      // round=getArrayFromRows({
      //   array:round,
      //   cols:round_col,
      //   rows:round_row,
      // });

      // var tax=new Array();

      // tax=getArrayFromRows({
      //   array:tax,
      //   cols:tax_col,
      //   rows:tax_row
      // });

      // for(var j=0;j<row.length;j++){

      //   for(var i=0;i<label.length;i++){

      //     if(label[i]=='id'||label[i]=='備考') continue;

      //     // 書き換えの処理
      //     if(table_name=='members'){
      //       if(label[i]=='姓'||label[i]=='名') continue;

      //       for(var r=0;r<riyou.length;r++){
      //         if(row[j][label[i]]==r){
      //           row[j][label[i]]= riyou[r]; 
      //         }
      //       }

      //     }else if(table_name=='products'){
      //       if(label[i]=='カテゴリー'){
      //         for(var r=0;r<category.length;r++){
      //           if(row[j][label[i]]==r){
      //             row[j][label[i]]= category[r]; 
      //           }
      //         }

      //       }else if(label[i]=='消費税'){
      //         for(var r=0;r<tax.length;r++){
      //           if(row[j][label[i]]==r){
      //             row[j][label[i]]= tax[r]; 
      //           }
      //         }
              

      //       }else if(label[i]=='端数処理'){
      //         for(var r=0;r<round.length;r++){
      //           if(row[j][label[i]]==r){
      //             row[j][label[i]]= round[r]; 
      //           }
      //         }
      //       }
      //     }

      //   }

      // }
    
      // create_table({parent_tag_str:parent_tag_str,table_name:table_name,label:label,col:col,row:row,riyou:riyou});

  });

}