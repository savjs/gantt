<!--
  @author blacklisten
  @date 2018-10-08
  @description 甘特图日历组件
-->

<template>
  <div class="calendar">
    <div class="title">
      <h1 class="green calendar-title"> {{currentDay.currentDay_year}} - {{monthName[currentDay.currentDay_month]}}</h1>
      <h2 class="green calendar-year"></h2>
      <div class="pre page-turning" @click="pre">上一页</div>
      <div class="next page-turning" @click="next">下一页</div>
    </div>
    <div class="content">
      <!-- <div class="lightgrey body-list">
        <ul>
          <li>星期天</li>
          <li>星期一</li>
          <li>星期二</li>
          <li>星期三</li>
          <li>星期四</li>
          <li>星期五</li>
          <li>星期六</li>
        </ul>
      </div> -->
      <div class="darkgrey content-list">
        <ul class="days" v-html="refreshDate()"></ul>
      </div>
    </div>
  </div>
</template>
<script>
import * as CALENDAR_UTIL from './calendar-utils.js'
export default {
  data() {
    return {
      monthName: [
        "01月",
        "02月",
        "03月",
        "04月",
        "05月",
        "06月",
        "07月",
        "08月",
        "09月",
        "10月",
        "11月",
        "12月"
      ],
      currentDay: {}
    };
  },
  computed: {
  },
  methods: {
    refreshDate () {
      //获取以上各个部分的id
      let {currentDay_year, currentDay_month, currentDay_day} = this.currentDay
      let currentDay_date = new Date()
      let str = ''
      let totalDay = CALENDAR_UTIL.daysMonth(currentDay_month, currentDay_year)
      let firstDay = CALENDAR_UTIL.dayStart(currentDay_month, currentDay_year)
      // for (var i = 0; i < firstDay; i++) {
      //   str += "<li></li>"
      // }

      let myClass
      for (let i = 1; i <= totalDay; i++) {
        if ((currentDay_year < currentDay_date.getFullYear()) || 
        (currentDay_year === currentDay_date.getFullYear() && currentDay_month < currentDay_date.getMonth()) ||
        (currentDay_year === currentDay_date.getFullYear() && currentDay_month === currentDay_date.getMonth() && i < currentDay_day)) {
          myClass = "class='lightgrey'"
        } else if (currentDay_year === currentDay_date.getFullYear() && currentDay_month === currentDay_date.getMonth() && i === currentDay_day) {
          myClass = "class='green greenbox'"
        } else {
          myClass = "class='darkgrey'"
        }
        str += "<li " + myClass + ">" + i + "</li>"
      }
      return str 
    },
    pre () {
      this.currentDay.currentDay_month--
      if (this.currentDay.currentDay_month < 0) this.currentDay.currentDay_year-- && (this.currentDay.currentDay_month = 11)
      this.refreshDate()
    },
    next () {
      this.currentDay.currentDay_month++
      if (this.currentDay.currentDay_month > 11) this.currentDay.currentDay_year++ && (this.currentDay.currentDay_month = 0)
      this.refreshDate()
    }
  },
  mounted () {
    this.currentDay = CALENDAR_UTIL.getCurrentDay()
  }
};
</script>
<style scoped>
.calendar {
  /* height: 350px; */
  overflow: auto;
  background: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
}

.title {
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
}

.calendar-title {
  font-size: 25px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  padding: 14px 0 0 0;
}

.calendar-year {
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
}

.page-turning {
  position: absolute;
  color: red;
  /*没规定大小时，图片显示 0X0*/
  width: 60px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 0px;
}

.pre {
  left: 0px;
}
.pre:hover {
  background-color: #6ac13c;
}

.next {
  right: 0px;
}
.next:hover {
  background-color: #6ac13c;
}

.content-list ul {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
  height: 35px;
}

.calendar >>> .content-list ul li {
  list-style: none;
  display: block;
  width: 3%;
  float: left;

  /*规定行高，垂直居中*/
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  text-align: center;
}

.calendar >>>  .green {
  color: #6ac13c;
}

.calendar >>> .lightgrey {
  /*浅灰色显示过去的日期*/
  color: #a8a8a8;
}

.calendar >>> .darkgrey {
  /*深灰色显示将来的日期*/
  color: #565656;
}

/*日期当天用绿色背景绿色文字加以显示*/
.calendar >>> .greenbox {
  border: 1px solid #6ac13c;
  background: #e9f8df;
}
</style>


