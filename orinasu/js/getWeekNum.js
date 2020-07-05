function getWeekNum(day){
 
  return Math.floor((day.get('date') - day.get('day') + 12 ) / 7);
}
