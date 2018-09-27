<template>
  <div id='tableid'>
    <table class="hello">
      <tr>
        <th v-for="(item, index) in date" :key='index'>
          <span v-if="index=='0'"></span>
          <span v-else>{{item.day}}</span>
        </th>
      </tr>
      <tr v-for="(items,indexs) in opt" :key='indexs'>
        <td v-for="(item, index) in newDate" :key='index'>
          <a class='isActive' v-if="item.day==isActive">dscds</a>
          <span v-if="index=='0'" >{{items.title}}</span>
          <span v-else :data-x='item.day' :data-y='indexs+1'><a :style="{ background: item.hh.activeColor,width: item.hh.width}" :data='item.hh.remark' @mouseenter="mouseenter" @mouseleave="mouseleave" v-if="item.day===item.hh.today&&item.hh.y===indexs"  class="iniClass">{{item.hh.title}} {{item.hh.sum}} %</a><a :data='item.hh.remark' v-if="item.day===item.hh.today&&item.hh.y===indexs" @mouseenter="mouseenter" @mouseleave="mouseleave" class="iniClassB" :style="{ background: item.hh.activeColors,width: item.hh.widths}">''</a></span>
        </td>
      </tr>
    </table>
    <div class="tooltip" :style="{ top: top,left:left}" v-if="isshow"><p>{{remark}}</p><div class="arrow"></div></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      opt: [
        {
          title: '项目一',
          today: '2018-9-1',
          endTime: '2018-9-9',
          activeColor: 'red',
          activeColors: 'green',
          remark :'这是项目一'
        },
        {
          title: '项目二',
          today: '2018-9-2',
           endTime: '2018-9-9',
          activeColor: 'red',
          activeColors: 'green',
           remark :'这是项目二'
        },
        {
          title: '项目三',
          today: '2018-9-3',
           endTime: '2018-9-9',
          activeColor: 'red',
          activeColors: 'green',
           remark : '这是项目三'
        },
        {
          title: '项目四',
          today: '2018-9-4',
           endTime: '2018-9-10',
          activeColor: 'red',
          activeColors: 'green',
           remark : '这是项目四'
        },
         {
          title: '项目五',
          today: '2018-9-5',
           endTime: '2018-9-15',
          activeColor: 'red',
          activeColors: 'green',
           remark : '这是项目五'
        },
         {
          title: '项目六',
          today: '2018-9-6',
           endTime: '2018-9-15',
          activeColor: 'red',
          activeColors: 'green',
           remark : '这是项目六'
        },
        {
          title: '项目七',
          today: '2018-9-7',
           endTime: '2018-9-15',
          activeColor: 'red',
          activeColors: 'green',
           remark : '这是项目七'
        },
         {
          title: '项目八',
          today: '2018-9-12',
           endTime: '2018-9-18',
          activeColor: 'red',
          activeColors: 'green',
           remark : '这是项目八'
        },
        {
          title: '项目九',
          today: '2018-9-9',
           endTime: '2018-9-29',
          activeColor: 'red',
          activeColors: 'green',
           remark : '这是项目九'
        },
         {
          title: '项目十',
          today: '2018-9-8',
          endTime: '2018-9-15',
          activeColor: 'red',
          activeColors: 'green',
          remark : '这是项目十'
        }
      ],
      opts: [],
      date: [],
      dates: [],
      newDate: [],
      isshow: false,
      top: '0',
      left: '0',
      remark: '',
      isActive:new Date().getFullYear() + `${'-'}` + parseInt(new Date().getMonth() + 1) + `${'-'}` + new Date().getDate()

    }
  },
  created () {
    this.tableDay()
  },
  methods: {
    tableDay () {
      this.opt.map((ite, ins) => {
        ite.y = ins
      })
      let days =
      this.mGetDate(new Date().getFullYear(), new Date().getMonth()) + 1
      for (let index = 0; index < days; index++) {
       this.date.push({
          day: new Date().getFullYear() + `${'-'}` + parseInt(new Date().getMonth() + 1) + `${'-'}` + parseInt(index),
          hh: {}
        })
      }
      this.date.map((item, indexs) => {
        this.dates.push({ ...item,hh: this.opt[indexs] || { today: '' } })
      })
      this.dates.map((items, indexs) => {
        let hh = {}
        this.dates.map((itemss, indexss) => {
          if (items.day === itemss.hh.today) {
            console.log(items.day,itemss.hh.today)
            let datediff=this.DateDiff(itemss.hh.today,itemss.hh.endTime).percent
            let sum=this.DateDiff(itemss.hh.today,itemss.hh.endTime).sum/86400
            let nowSum=this.DateDiff(itemss.hh.today,itemss.hh.endTime).nowSum/86400
            hh = { ...itemss.hh }
            hh.sum = datediff.toFixed(2)
            hh.width=sum*83+'px'
            hh.widths=nowSum*83+'px'
          }
        })
        let obj = { day: items.day, hh: hh }
        this.newDate.push(obj)
      })
    },
    // 鼠标事件
    mouseenter (e) {
      this.remark= e.target.getAttribute('data')
      this.isshow = true
      this.left = e.clientX - 70 + 'px'
      this.top = e.clientY - 90 - e.offsetY / 2 + 'px'
    },
    mouseleave (e) {
      this.isshow = false
    },
    // 工具函数   时间
    mGetDate () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var d = new Date(year, month, 0)
      return d.getDate()
    },
    DateDiff (sDate1, sDate2) {
      let sum=new Date(sDate2).getTime()/1000-new Date(sDate1).getTime()/1000
      let nowSum=parseInt(new Date().getTime()/1000) -new Date(sDate1).getTime()/1000
      let percent=nowSum/sum
      return {percent:percent,sum:sum,nowSum:nowSum}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: absolute;
}
table {
  width: 200%;
  border-collapse: collapse;
}

table,
td,
th {
  position: relative;
  padding: 10px 5px 17px 7px;
  border: 1px solid black;
}
table,
td,
th,
span {
  position: relative;
}
.iniClassB {
  cursor: pointer;
  display: inline-block;
  font-size: 3px;
  position: absolute;
  border-radius: 5px;
  z-index: 1;
}
.iniClass {
  cursor: pointer;
  width: 100px;
  border-radius: 5px;
  font-size: 3px;
  position: absolute;
  z-index: 3;
}
#tableid{
  position: relative
}
#container {
  width: 400px;
  margin: 100px auto 0 auto;
}

.item {
  width: 100px;
  height: 100px;
  margin: 15px;
  background: #73a058;
  float: left;
  border-radius: 50px;
}

h1 {
  font-family: "HeydingsCommonIconsRegular", sans-serif;
  font-weight: normal;
  margin: 30px 0 0 0;
  color: #fff;
  text-align: center;
  font-size: 60px;
  line-height: 30px;
}

.tooltip p {
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 300;
}

.tooltip {
  width: 120px;
  padding: 10px;
  border-radius: 3px;
  position: absolute;
  z-index: 4;
  box-shadow: 1px 1px 10px 0 #ccc;
  /* margin: -500px 0 0 -20px; */
  background: #fff;
  -webkit-transition: margin 0.5s ease-in-out;
  -moz-transition: margin 0.5s ease-in-out;
}

.item:hover {
  background: #6d643b;
}

.item:hover .tooltip {
  margin: -145px 0 0 -20px;
  -webkit-transition: margin 0.15s ease-in-out;
  -moz-transition: margin 0.15s ease-in-out;
}

.arrow {
  position: absolute;
  margin: 10px 0 0 50px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #fff;
}

.isActive{
  
  background-color: red;
}
</style>
