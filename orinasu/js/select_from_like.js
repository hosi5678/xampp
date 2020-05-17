function select_from_like(event){

  var table_name=event.target.table_name;
  var col=event.target.col;
  var parent_tag_str=event.target.parent_tag_str;
  var label=event.target.label;

  var parent_tag=document.getElementById(parent_tag_str+'_like');
  
  console.log('-----in select from like function(before ajax) -----');
  console.log('parent_tag_str:'+parent_tag_str+'_like');
  console.log('table_name:'+table_name);
  // console.log('col:'+col);

  while(parent_tag.firstChild){
    parent_tag.removeChild(parent_tag.firstChild);
  }

  var key;

  for(var i=0;i<label.length;i++){
    if(label[i]=='姓'||label[i]=='商品名'){
        key=document.getElementById(parent_tag_str+i).value;
    }
  }

  $.when(
    // ajaxは単体で使わない。whenと使う
    ajax_get_col(table_name+'_join'),
    ajax_get_col(table_name),
    ajax_select_like(table_name,col,key),
    ajax_get_col('youbi'),
    ajax_select_from_table('youbi'),
    ajax_get_col('riyou_keitai'),
    ajax_select_from_table('riyou_keitai'),
    
    ajax_get_col('category'),
    ajax_select_from_table('category'),

    ajax_get_col('tax'),
    ajax_select_from_table('tax'),

    ajax_get_col('round_type'),
    ajax_select_from_table('round_type')

    ).done(function(label,col,row,youbi_col,youbi_row,riyou_col,riyou_row,category_col,category_row,tax_col,tax_row,round_col,round_row){

      console.log('-----in select from like function(after ajax) -----');
      // console.log('label is');
      // console.log(label);
      // console.log('col is');
      // console.log(col);

      // console.log('row is');
      // console.log(row);

      // console.log('youbi col is');
      // console.log(youbi_col);

      // console.log('youbi row is');
      // console.log(youbi_row);
 
      // console.log('category col is');
      // console.log(category_col);

      // console.log('category row is');
      // console.log(category_row);

      var mode='like';

      var youbi=new Array();

      for(var i=0;i<youbi_row.length;i++){
        for(var k=0;k<youbi_col.length;k++){
          if(youbi_col[k]=='id') continue;
          youbi.push(youbi_row[i][youbi_col[k]]);
        }
      }

      // console.log('youbi is:');
      // console.log(youbi);

      var riyou=new Array();

      for(var i=0;i<riyou_row.length;i++){
        for(var k=0;k<riyou_col.length;k++){
          if(riyou_col[k]=='id') continue;
          riyou.push(riyou_row[i][riyou_col[k]]);
        }
      }

      // console.log('riyou is:');
      // console.log(riyou);

      var category=new Array();

      for(var i=0;i<category_row.length;i++){
        for(var k=0;k<category_col.length;k++){
          if(category_col[k]=='id') continue;
          category.push(category_row[i][category_col[k]]);
        }
      }

      // console.log('category is:');
      // console.log(category);

      var round=new Array();

      for(var i=0;i<round_row.length;i++){
        for(var k=0;k<round_col.length;k++){
          if(round_col[k]=='id') continue;
          round.push(round_row[i][round_col[k]]);
        }
      }

      // console.log('round is:');
      // console.log(round);

      var tax=new Array();

      for(var i=0;i<tax_row.length;i++){
        for(var k=0;k<tax_col.length;k++){
          if(tax_col[k]=='id') continue;
          tax.push(tax_row[i][tax_col[k]]);
        }
      }

      // console.log('tax is:');
      // console.log(tax);


      // row_join=new Array();

      for(var j=0;j<row.length;j++){

        // row_tmp=new Array();

        for(var i=0;i<label.length;i++){

          if(label[i]=='id'||label[i]=='備考') continue;

          // 書き換えの処理
          if(table_name=='members'){
            if(label[i]=='姓'||label[i]=='名') continue;

            for(var r=0;r<riyou.length;r++){
              if(row[j][label[i]]==r){
                row[j][label[i]]= riyou[r]; 
              }
            }

          }else if(table_name=='products'){
            if(label[i]=='カテゴリー'){
              for(var r=0;r<category.length;r++){
                if(row[j][label[i]]==r){
                  row[j][label[i]]= category[r]; 
                }
              }

            }else if(label[i]=='消費税'){
              for(var r=0;r<tax.length;r++){
                if(row[j][label[i]]==r){
                  row[j][label[i]]= tax[r]; 
                }
              }
              

            }else if(label[i]=='端数処理'){
              for(var r=0;r<round.length;r++){
                if(row[j][label[i]]==r){
                  row[j][label[i]]= round[r]; 
                }
              }
            }
          }

        }

      }

      // console.log('----- select like row:------ ');
      // console.log(row);
    
      create_table(parent_tag_str,table_name,label,col,row,mode);

  });

}