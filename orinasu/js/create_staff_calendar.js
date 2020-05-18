function create_staff_calendar(parent_tag_str,table_name,youbi){

    console.log('----- in create staff calendar----- ');

    console.log(parent_tag_str+'/'+table_name);

    console.log('youbi is:');
    console.log(youbi);

    var today=new Date();

    console.log(today.getFullYear());
    console.log(today.getMonth()+1);
    console.log(today.getDate());
    console.log(youbi[today.getDay()]);

}