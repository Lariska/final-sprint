import Vue from 'vue'
import store from '../store'
import { CALENDAR_REMOVE_EVENT, CALENDAR_ADD_EVENT } from '../store/Efix.store'
new Vue({
    store
});
var isFirstClicked = false;
function removeEvent(cmp,eventToRemove, isEmpty = false){
    console.log('removing an calendar event');
    var index=null;
    var foundEmptyEvent;
    if(isEmpty){
        // console.log('got this far!',store.getters.componentById(cmp.id).data.events);
    foundEmptyEvent = store.getters.componentById(cmp.id).data.events.find((event,idx) =>{ 
        index = idx;
        return event.title === '';
    })
    } else {
        foundEmptyEvent = store.getters.componentById(cmp.id).data.events.find((event,idx) =>{ 
        index = idx;
        return event === eventToRemove;
        });
    }
    
    if(foundEmptyEvent){
        let cmpEdited = JSON.parse(JSON.stringify(cmp));
        console.log('got this far')
        cmpEdited.data.events.splice(index,1);
        console.log("spliced:",cmpEdited)
        store.dispatch('editCmp', { 'cmp': cmpEdited} );
        return cmpEdited;
        // store.commit(CALENDAR_REMOVE_EVENT, index );
    }
    return cmp;
}
function handleEventClick(cmp, event){
    if(isFirstClicked){
        console.log("event picked: "+ event);
        removeEvent(cmp,event);
      } else{
          isFirstClicked = true;
          setTimeout( _=> isFirstClicked = false, 200);
      }
}
export default {
    removeEvent,
    handleEventClick
}