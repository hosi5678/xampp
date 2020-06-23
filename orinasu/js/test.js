'use strict';

// 簡単なテスト用
function test(event){

  var a=event.target.a;

  console.log('--- in test func---');

  console.log('test event type:'+event.type);
  console.log('a:'+a);

  // var input=document.createElement('input');

  // var div=document.getElementById("select");

  // var a=document.createElement('button');

  // a.innerText='クリックする';

  // // a.href='#';

  // a.addEventListener('click',function (event) {
  //     input.value='test';

  //   });

  //  div.appendChild(input);
  //  div.appendChild(a); 

}