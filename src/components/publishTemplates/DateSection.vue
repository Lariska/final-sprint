<template>
<section>
  <vue-event-calendar
  :events="paramsForRender.data.events">
      <div
      v-for="event in paramsForRender.data.events"
      v-if="event.title !== ''"
      :key="event"
      class="event-item"
     >
      <!--^^@click="eventClick(event)"^^-->
      <div v-if="event.title !== ''">
        {{event.title}}
        {{event.date.split('/').reverse().join('/')}}
      </div>
      </div>
  </vue-event-calendar>
</section>
</template>
<script>
import { DATE_SECTION } from '../../constants/cmpName'
import calendarService from '../../services/calendar.service.js'

export default {
  name: DATE_SECTION,
  props: ['paramsForRender'],
  data () {
    return {
    }
  },
  created(){
    calendarService.removeEvent(this.paramsForRender,'empty event(for markup prpouse)',true);
  },
  methods: {
    // dayChanged(value){
    //   this.newEventData.date = value.date;
    //   this.markThisDate(value);
    // },
  }
}
</script>
<style>

  section {
    position: relative;
  }
 /*.date-num:hover{
  cursor:pointer;
 }*/
 .events-wrapper{
   padding:0;
 }
</style>
