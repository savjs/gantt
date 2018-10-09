const monthOlypic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //闰年每个月份的天数
const monthNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //非闰年

// 获取当天的年月日
export function getCurrentDay () {
  const currentDay = new Date()
  const currentDay_year = currentDay.getFullYear() //获取年份
  const currentDay_month = currentDay.getMonth() //获取月份，一月份的下标为0
  const currentDay_day = currentDay.getDate() //获取当前日期

  return {
    currentDay_year, currentDay_month, currentDay_day
  }
}

//根据年份判断某月有多少天(11,2018),表示2018年12月
export function daysMonth (month, year) {
  var tmp1 = year % 4;
  var tmp2 = year % 100;
  var tmp3 = year % 400;

  if ((tmp1 == 0 && tmp2 != 0) || (tmp3 == 0)) {
    return (monthOlypic[month]) //闰年
  } else {
    return (monthNormal[month]) //非闰年
  }
}

//根据年月获取当月第一天是周几
export function dayStart (month, year) {
  var tmpDate = new Date(year, month, 1)
  return (tmpDate.getDay())
}