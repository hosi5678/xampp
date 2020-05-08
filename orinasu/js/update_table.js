function update_table(event){

  var id=event.target.id;
  var parent_tag_str=event.target.parent_tag_str;
  var table_name=event.target.table_name;

  $.when(

    ajax_stmt_exec(table_name,"select * from "+table_name+" limit 0;",'column'),

    ).done(function(col_name){
        // alert(table_name);
        // alert(col_name);
        // alert(id+col_name.length);
     
      var update_val=new Array();

      for(var i=0;i<col_name.length;i++){
          if(i==0) continue;
          
          if(i==1||i==2){
            update_val.push('"'+document.getElementById(table_name+i).value+'"');

          }else{
            update_val.push(document.getElementById(table_name+i).value);
          }
      
        }

        // alert(update_val);

        col_name.shift(); // idを除去

        // alert(col_name);
      // console.log(update_val);

      // "update members set myouji=?,namae=?,sun=?,mon=?,tue=?,wed=?,thu=?,fri=?,sat=? where id=?;"

      var query='update '+table_name+' set ';

      // console.log(query);

      for(var i=0;i<col_name.length;i++){

        query+=col_name[i]+'='+update_val[i];

        if(i!=col_name.length-1){
          query+=',';
        }else{
          query+=' where id='+id+';';
        }

      }

      // console.log(query);
      // alert(parent_tag_str);

      $.when(
        ajax_stmt_exec(table_name,query,'assoc'),
      ).done(function(){
        select_from_table(parent_tag_str,table_name);
      });

  });

}