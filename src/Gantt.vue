<template>
  <div class="gantt">{{hello}}
    <calendar></calendar>
  </div>
</template>

<script>
import calendar from './calendar/calendar.vue'
export default {
  data () {
    return {
      hello: 'Hello Gantt'
    }
  },
  components: {
    calendar
  }
}
</script>

<style lang="scss">
  .gantt {
    color: #ccc;
  }
</style>
