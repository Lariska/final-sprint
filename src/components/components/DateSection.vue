<<template>
<section>
  <vue-event-calendar 
  :events="$store.state.calendar.events"
  @day-changed="dayChanged">
      <div 
      v-for="event in this.$store.state.calendar.events"
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
<<script>
import { DATE_SECTION } from '../../constants/cmpName'
import { CALENDAR_REMOVE_EVENT, CALENDAR_ADD_EVENT } from '../../store/Calendar.store' //remove it later
import calendarService from '../../services/Calendar.service.js'

export default {
  name: DATE_SECTION,
  data () {
    return {
      newEventData:{
        date:null,
        title:''
      },
      isFirstClick:false
    }
  },
  methods: {
    dayChanged(value){
      this.newEventData.date = value.date;
      this.markThisDate(value);
    },
    markThisDate(event){
      calendarService.removeEvent(event,true);
      this.$store.commit(CALENDAR_ADD_EVENT, {title:'', date:event.date});
      
    },
    eventClick(event){
      calendarService.handleEventClick(event);
    },
    addEvent(){
      if(this.newEventData.title && this.newEventData.date){
        this.$store.commit(CALENDAR_ADD_EVENT, {title:this.newEventData.title, date:this.newEventData.date});
        title:this.newEventData.title = '';
      }
    }
  }
}
</script>
<<style>
 .date-num:hover{
  cursor:pointer;
 }
 .event-crud{
   display:flex;
 }
 .events-wrapper{
   padding:0;
 }
</style>
