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
import { CALENDAR_REMOVE_EVENT, CALENDAR_ADD_EVENT } from '../../store/Calendar.store'

export default {
  name: DATE_SECTION,
  data () {
    return {
      events: [{
        date: '2017/7/8',
        title: 'Foo',
        desc: 'longlonglong description'
      },{
        date: '2016/11/12',
        title: 'Bar'
      }],
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
      this.removeEvent(event,true);
      this.$store.commit(CALENDAR_ADD_EVENT, {title:'', date:event.date});
      this.events.push({title:'', date:event.date});
      
    },
    removeEvent(eventToRemove, isEmpty = false){
      var index=null;
      var foundEmptyEvent;
      if(isEmpty){
        foundEmptyEvent = this.$store.state.calendar.events.find((event,idx) =>{ 
          index = idx;
          return event.title === '';
        })
      } else {
          foundEmptyEvent = this.$store.state.calendar.events.find((event,idx) =>{ 
            index = idx;
            return event === eventToRemove;
          });
        }
      if(foundEmptyEvent){
         this.$store.commit(CALENDAR_REMOVE_EVENT, index );
        this.events.splice(index,1);
      }
    },
    eventClick(event){
      if(this.isFirstClick){
        console.log("event picked: "+ event);
        this.removeEvent(event);
      } else{
          this.isFirstClick = true;
          setTimeout( _=> this.isFirstClick = false, 200);
      }
    },
    addEvent(){
      if(this.newEventData.title && this.newEventData.date){
        this.$store.commit(CALENDAR_ADD_EVENT, {title:this.newEventData.title, date:this.newEventData.date});
        this.events.push({title:this.newEventData.title, date:this.newEventData.date});
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
