import Vue from 'vue'
import store from '../store'
import { CALENDAR_REMOVE_EVENT, CALENDAR_ADD_EVENT } from '../store/Efix.store'
new Vue({
    store
});
var isFirstClicked = false;
function removeEvent(eventToRemove, isEmpty = false){
    var index=null;
    var foundEmptyEvent;
    if(isEmpty){
    foundEmptyEvent = store.state.efix.events.find((event,idx) =>{ 
        index = idx;
        return event.title === '';
    })
    } else {
        foundEmptyEvent = store.state.efix.events.find((event,idx) =>{ 
        index = idx;
        return event === eventToRemove;
        });
    }
    if(foundEmptyEvent){
        store.commit(CALENDAR_REMOVE_EVENT, index );
    }
}
function handleEventClick(event){
    if(isFirstClicked){
        console.log("event picked: "+ event);
        removeEvent(event);
      } else{
          isFirstClicked = true;
          setTimeout( _=> isFirstClicked = false, 200);
      }
}
export default {
    removeEvent,
    handleEventClick
}