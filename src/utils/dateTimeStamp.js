export function dateTimeStamp (hisTime, nowTime){
  const now =nowTime?nowTime:new Date().getTime();
  const   diffValue = now - hisTime;
  let    result='';
  const    minute = 1000 * 60;
  const    hour = minute * 60;
  const   day = hour * 24;
  const    halfamonth = day * 15;
  const    month = day * 30;
  const   year = month * 12;

  const   _year = diffValue/year;
  const    _month =diffValue/month;
  const    _week =diffValue/(7*day);
  const   _day =diffValue/day;
  const   _hour =diffValue/hour;
  const   _min =diffValue/minute;

  if(_year>=1) result = parseInt(_year) + "年前";
  else if(_month>=1) result = parseInt(_month) + "月前";
  else if(_week>=1) result = parseInt(_week) + "周前";
  else if(_day>=1) result = parseInt(_day) +"天前";
  else if(_hour>=1) result = parseInt(_hour) +"小时前";
  else if(_min>=1) result = parseInt(_min) +"分钟前";
  else result="刚刚";
  return result;
}
