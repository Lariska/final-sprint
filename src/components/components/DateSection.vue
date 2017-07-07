<<template>
<section>
  <vue-event-calendar 
  :events="events"
  @day-changed="dayChanged">
      <div 
      v-for="event in events"
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
      this.markThisDate(value.date);
    },
    markThisDate(date){
      var index=null
      var foundEmptyEvent = this.events.find((event,idx) =>{ 
        index = idx;
        return event.title === '';
      });
      if(foundEmptyEvent){
        this.events.splice(index,1);
      }
      this.events.push({title:'', date:date});
      
    },
    removeEvent(eventToRemove){
      var index=null;
      var foundEmptyEvent = this.events.find((event,idx) =>{ 
        index = idx;
        return event === eventToRemove;
      });
      if(foundEmptyEvent){
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
