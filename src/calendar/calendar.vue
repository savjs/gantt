<!--
  @author blacklisten
  @date 2018-10-08
  @description 甘特图日历组件
-->

<template>
  <div class="calendar">
    <div class="calendar-header">
      <h1 class="green" id="calendar-title">{{monthName[currentDay.currentDay_month]}}</h1>
      <h2 class="green" id="calendar-year">{{currentDay.currentDay_year}}</h2>
      <a href="" id="pre"></a>
      <a href="" id="next"></a>
    </div>
    <div class="calendar-title"></div>
  </div>
</template>
<script>
import * as CALENDAR_UTIL from './utils.js'
export default {
  data() {
    return {
      monthOlypic: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], //闰年每个月份的天数
      monthNormal: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], //非闰年
      monthName: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ],
      currentDay: {}
    };
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    this.currentDay = CALENDAR_UTIL.getCurrentDay()
  }
};
</script>
<style scoped>
.calendar {
  margin: 45px;
  width: 450px;
  height: 350px;
  background: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
}

#calendar-title {
  font-size: 25px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  padding: 14px 0 0 0;
}

#calendar-year {
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
}

#pre {
  position: absolute;
  top: 0px;
  left: 0px;
  background: url(prev.png) no-repeat 50% 50%;

  /*没规定大小时，图片显示 0X0*/
  width: 60px;
  height: 70px;
}

#next {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url(next.png) no-repeat 50% 50%;
  width: 60px;
  height: 70px;
}

.body-list ul {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
}

.body-list ul li {
  list-style: none;
  /*
            display:inline-block; 
            width: 13.3%;
            */

  /*100/7 = 14.28%*/
  display: block;
  width: 14.28%;
  float: left;

  /*规定行高，垂直居中*/
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  text-align: center;
}

.green {
  color: #6ac13c;
}

.lightgrey {
  /*浅灰色显示过去的日期*/
  color: #a8a8a8;
}

.darkgrey {
  /*深灰色显示将来的日期*/
  color: #565656;
}

/*日期当天用绿色背景绿色文字加以显示*/
.greenbox {
  border: 1px solid #6ac13c;
  background: #e9f8df;
}
</style>


