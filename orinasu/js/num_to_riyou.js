function num_to_riyou(num,riyou){

    // console.log('--- in num to youbi ---');

    for(var i=0;i<riyou.length;i++){
        if(num==i){
            return riyou[i].content;
        }

    }
}