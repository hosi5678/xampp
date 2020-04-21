function dateToIso8601Week(date){
  // 引数のDateと同じ週の木曜日を計算
  // 259200000 = 3days * 24hour * 60min * 60s * 1000ms
  // 604800000 = 1week * 7days * 24hour * 60min * 60s * 1000ms
  const thursday = new Date(Math.ceil((date.getTime() - 259200000) / 604800000) * 604800000);

  // 木曜日と同じ年の1月1日を計算
  const firstDayOfYear = new Date(thursday.getFullYear(), 0, 1);

  // 木曜日がその年の第何週かを計算する
  const weekOfYear = Math.floor((thursday.getTime() - firstDayOfYear.getTime()) / 604800000) + 1;

  // 曜日をISO 8601に直す (jsは0=日～6=金、ISO 8601は1=月～7=日)
  const dayOfWeek = date.getDay() !== 0 ? date.getDay() : 7;

  // yyyy-Www-D 形式に直す
  return `${thursday.getFullYear()}-W${('0' + weekOfYear).slice(-2)}-${dayOfWeek}`;
}

// input: 2018-12-31
// output: 2019-W01-1
// console.log(dateToIso8601Week(new Date(2020, 4, 32)));