<template>
<section>
  <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
  <vue-event-calendar
  :events="paramsForRender.data.events"
  @day-changed="dayChanged">
      <div
      v-for="event in paramsForRender.data.events"
      v-if="event.title !== ''"
      :key="event"
      class="event-item"
      @click="eventClick(event)">
      <div v-if="event.title !== ''">
        {{event.title}}
        {{event.date.split('/').reverse().join('/')}}
      </div>
      </div>
  </vue-event-calendar>
  <div class = "event-crud">
    <el-button
    type="success"
    @click="addEvent">Add Event</el-button>
    <el-input
    v-model="newEventData.title"
    ref="titleInput"
    placeholder="Please input">
    </el-input>
  </div>
</section>
</template>
<script>
import { DATE_SECTION } from '../../constants/cmpName'
import { CALENDAR_REMOVE_EVENT, CALENDAR_ADD_EVENT } from '../../store/Efix.store'
import calendarService from '../../services/calendar.service.js'
import CloseBtn from '../editor/CloseBtn';

export default {
  name: DATE_SECTION,
  props: ['paramsForRender'],
  data () {
    return {
      newEventData:{
        date:null,
        title:''
      },
      isFirstClick:false
    }
  },
  components: { CloseBtn },
  created(){
    calendarService.removeEvent(this.paramsForRender,'empty event(for markup prpouse)',true);
  },
  methods: {
    dayChanged(value){
      this.newEventData.date = value.date;
      this.markThisDate(value);
    },
    markThisDate(event){
      var cleanCmp = calendarService.removeEvent(this.paramsForRender,event,true);
      let cmpEdited = JSON.parse(JSON.stringify(cleanCmp));
      cmpEdited.data.events.push({title:'', date:event.date});
      this.$store.dispatch('editCmp', { 'cmp': cmpEdited} );
      // this.$store.commit(CALENDAR_ADD_EVENT, {title:'', date:event.date});

    },
    eventClick(event){
      calendarService.handleEventClick(this.paramsForRender,event);
    },
    addEvent(){
      if(this.newEventData.title && this.newEventData.date){
        let cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data.events.push({title:this.newEventData.title, date:this.newEventData.date});
        this.$store.dispatch('editCmp', { 'cmp': cmpEdited} );
        // this.$store.commit(CALENDAR_ADD_EVENT, );
        title:this.newEventData.title = '';
      }
    }
  }
}
</script>
<style>

  section {
    position: relative;
  }
 .date-num:hover{
  cursor:pointer;
 }
 .event-crud{
   display:flex;
 }
 .events-wrapper{
   padding:0;
 }

 .closeBtn {
   position: absolute;
   font-size: 24px;
   top: 0;
   right: 0;
   z-index: 100;
 }
</style>
