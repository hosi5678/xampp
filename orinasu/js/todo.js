$(function(){
  'use strict';

  $('#todos').on('click','.update_todo',function(){
      // get id
      var id=$(this).parents('li').data('id');

      // console.log(id);
      // ajax
      $.post('./php_libs/_ajax.php',{
        id:id,
        mode:'update'
      },function(res){
        if(res.state==='1'){
          $('#todo_'+id).find('.toto_title').addClass('done');
        }else{
          $('#todo_'+id).find('.toto_title').removeClass('done');
        }
      })
  });
});