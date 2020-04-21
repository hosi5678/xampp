function getWeekNum(day){
 
  var out = `第${Math.floor((day.getDate() - day.getDay() + 12) / 7)}週目`;
  console.log(out);

  return Math.floor((day.getDate() - day.getDay() + 12 ) / 7);
}
