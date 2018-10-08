
export function formats (format) {
  var o = {
    'M+': this.getMonth() + 1, // month
    'd+': this.getDate(), // day
    'h+': this.getHours(), // hour
    'm+': this.getMinutes(), // minute
    's+': this.getSeconds(), // second
    'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
    'S': this.getMilliseconds() // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) { format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)) }
  }
  return format
}

// console.log(new Date().format('yyyy-MM-dd hh:mm:ss'))例如：2018-05-17 18:21:31
export function getDays (days) {
  var date = new Date(days || null)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var d = new Date(year, month, 0)
  return d.getDate()
}
