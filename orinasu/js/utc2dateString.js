function utc2dateString(utc_msec) {
  d=new Date();
  d.setTime(utc_msec);
  return d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
}