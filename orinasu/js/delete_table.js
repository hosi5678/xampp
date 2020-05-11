function delete_table(event){

  console.log('----- in delete table -----');

  var table_name=event.target.table_name;
  var parent_tag_str=event.target.parent_tag_str;
  var prev=event.target.prev;
  var col=event.target.col;
  var id=event.target.id;

  // var tds=$(this).closest('tr').children();
  console.log('id:'+id);
  console.log('col is:')
  console.log(col);

  var query='delete from '+table_name+' where id='+id+';';

  console.log('id:'+id);
  console.log('prev:'+prev);
  console.log('query:'+query);

  $.when(
      ajax_stmt_exec(table_name,query,'assoc'),
    ).done(function(){

      var parent_tag=document.getElementById(parent_tag_str+'_params');

      while(parent_tag.firstChild){
        parent_tag.removeChild(parent_tag.firstChild);
      }
  
      var message_tag=document.getElementById(parent_tag_str+'_message');

      console.log('message tag:');
      console.log(message_tag);

      var p=document.createElement('p');
      p.innerText='削除しました。';

      message_tag.appendChild(p);

      var a=document.createElement('a');

      a.innerText='戻る';

      a.parent_tag_str=parent_tag_str;
      a.table_name=table_name;

      a.addEventListener('click',function(event){
        parent_tag_str=event.target.parent_tag_str;
        table_name=event.target.table_name;

        var message=document.getElementById(parent_tag_str+'_message');

        while(message.firstChild){
          message.removeChild(message.firstChild);
        }

        create_members_input_form(parent_tag_str,table_name);
        select_from_table(parent_tag_str,table_name);
    
      });

      message_tag.appendChild(a);

      // select_from_table(parent_tag_str,table_name);
  });

}