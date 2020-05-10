function update_table(event){

  console.log('----- in update_table -----');

  var id=event.target.id;
  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;
  var col=event.target.col;
  var label=event.target.label;

  console.log('id:'+id);
  console.log('parent_tag_str:'+parent_tag_str);
  console.log('table_name:'+table_name);
  console.log('col is:');
  console.log(col);
  console.log('label is:');
  console.log(label);

  var update_val=new Array();

  var message=document.getElementById(parent_tag_str+'_message');

  while(message.firstChild){
    message.removeChild(message.firstChild);
  }

  for(var i=0;i<label.length;i++){
    if(label[i]=='id') continue;
    
    if(label[i]=='姓'||label[i]=='名'){
      var str=document.getElementById(parent_tag_str+i).value;
 
      str=reject_str(str);

      if(str==1){
        return false;
      }

       // 名前が空欄のとき
       if(str==''){
        var p=document.createElement('p');
          p.classList.add('message');
          p.innerText=label[i]+'を入力してください。'
          message.appendChild(p);

        return false;
      }

      update_val.push('"'+str+'"');

    // 備考の取り出しは別になる。
    }else if(label[i]=='備考'){

      var str=document.forms["form1"].elements["bikou"].value;

      str=reject_str(str);

      if(str==1){
        return false;
      }

      update_val.push('"'+str+'"');

    // それ以外は曜日となる。
    }else{
      update_val.push(document.getElementById(table_name+i).value);
    }

  }

  console.log('update val is:');
  console.log(update_val);

  // $.when(

  //   ajax_stmt_exec(table_name,"select * from "+table_name+" limit 0;",'column'),

  //   ).done(function(col_name){
     
  //     var update_val=new Array();

  //     for(var i=0;i<col_name.length;i++){
  //         if(i==0) continue;
          
  //         if(i==1||i==2){
  //           update_val.push('"'+document.getElementById(table_name+i).value+'"');

  //         }else{
  //           update_val.push(document.getElementById(table_name+i).value);
  //         }
      
  //       }

      query_label=new Array();

      // col.shift(); // idを除去,shiftは不可。

      for(var i=0;i<col.length;i++){
        if(col[i]=='id') continue;
        query_label.push(col[i]);
      }

      var query='update '+table_name+' set ';

      for(var i=0;i<query_label.length;i++){
        // if(query_label[i]=='id') continue;

        query+=query_label[i]+'='+update_val[i];

        if(i!=query_label.length-1){
          query+=',';
        }else{
          query+=' where id='+id+';';
        }

      }

      console.log('query:'+query);

      $.when(
        ajax_stmt_exec(table_name,query,'assoc'),
      ).done(function(){
        select_from_table(parent_tag_str,table_name);
      });

  // });

}