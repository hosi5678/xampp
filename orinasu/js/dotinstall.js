'use strict';

function dotinstall(){

  const parent_tag=document.getElementById('test');

  parent_tag.innerText='test';
  parent_tag.classList.add('test-div');

  tippy(parent_tag,
    {
      content:'this is tooltip',
      placement:'top',
      animation:'scale',
      duration:500,
      arrow:true,
    });

    $('#test').draggable({
      start:function(event,ui){
        // console.log('start event start');
        // console.log(event,ui);
      },
      drag : function (event , ui) {
        console.log("drag event start" );
        // console.log(event , ui);
        var pos=ui.helper.position();
        console.log('left:'+pos.left);
        console.log('top:'+pos.top);
      } ,
    });

    $('#test').resizable();

  // console.log('---- within dot install---');

  // const obj={x:100,y:100,};

  // console.log(obj);

  // const d=[2019,11,14];
  // console.log(d.join('-'));

  // const numbers=[1,4,7,8,10];

  // const updated_scores=numbers.filter(number=>{
  //     return number%2===0;
  //   }
  // );

  // // const sum=function(a,b,c){return a+b+c;};

  // // const total=sum(1,2,3)+sum(3,4,5);

  //   console.log(updated_scores);

  // // const とletのみ
  // let price=150;

  // console.log(price*140);
  // console.log(price*160);
  // console.log(typeof 'string');
  // console.log(typeof 5);
  // console.log(typeof null);

}