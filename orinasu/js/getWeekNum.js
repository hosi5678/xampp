function getWeekNum(day){
 
  // console.log(`第${Math.floor((day.getDate() - day.getDay() + 12) / 7)}週目`);
  // console.log(Math.floor((day.getDate() - day.getDay() + 12) / 7));

  return Math.floor((day.getDate() - day.getDay() + 12 ) / 7);
}
