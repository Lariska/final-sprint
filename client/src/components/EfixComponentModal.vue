<template>
   <!-- <script type="text/x-template" id="modal-template">  -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div
          class = "component-preview"  
            v-for="cmp in cmpsToPreview" 
            :key="cmp"  
            @click.stop.prevent.capture="addCmp(cmp.type)">
            <component 
            :is="cmp.type"
            :paramsForRender="cmp"
            :id="cmp.id">
              <!-- <slot name="header-section">
                <publish-header-section 
                  :paramsForRender="headerInfo">
                </publish-header-section>
              </slot> -->
            </component>
          </div>

          <!-- <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div> -->

          <!-- <div class="modal-footer"> -->
            <!-- <slot name="footer"> -->
              <!-- default footer -->
              <button class="modal-default-button" @click="$emit('close')">
                Close
              </button>
            <!-- </slot> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </transition>
 <!-- </script>  -->
</template>
<script>
import MainSection from './publishTemplates/MainSection'
import FooterSection from './publishTemplates/FooterSection'
import HeaderSection from './publishTemplates/HeaderSection'
import GallerySection from './publishTemplates/GallerySection'
import DateSection from './publishTemplates/DateSection'
import TableSection from './publishTemplates/TableSection'
import PlaceSection from './publishTemplates/PlaceSection'
import efixService from '../services/efix.service.js';
import { HEADER_SECTION, MAIN_SECTION,
  FOOTER_SECTION, GALLERY_SECTION, DATE_SECTION, TABLE_SECTION, PLACE_SECTION } from '../constants/cmpName'
// Vue.component('modal', {
//   template: '#modal-template'
// })

export default {
  name: 'efix-component-modal',
  components:{   
    FooterSection,
    MainSection,
    HeaderSection,
    GallerySection,
    DateSection,
    TableSection,
    PlaceSection,
  },
  data(){
    return{
      cmpsToPreview: [
      efixService.buildCmpObj(HEADER_SECTION),
      efixService.buildCmpObj(MAIN_SECTION),
      efixService.buildCmpObj(FOOTER_SECTION),
      efixService.buildCmpObj(GALLERY_SECTION),
      efixService.buildCmpObj(DATE_SECTION),
      efixService.buildCmpObj(TABLE_SECTION),
      efixService.buildCmpObj(PLACE_SECTION)]
    }
  },
  methods: {
    addCmp(cmpType){
      console.log("rendering a cmp with type:",cmpType);
      this.$emit('addCmp', cmpType);
    }
  },
}
</script>
<style scope>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  background-color: rgba(0, 0, 0, .5);
  /* display: table; */
  transition: opacity .3s ease;
  overflow-y: scroll;
  overflow-x: scroll;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  /* font-family: Helvetica, Arial, sans-serif; */
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

/* .modal-default-button {
  float: right;
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.component-preview:hover{
  cursor: pointer;
}
.component-preview{
  border: 3px solid #7584e8 !important; 
  margin-bottom: 4px;
}
/* @media screen and (min-width:11768px){ */




    /* .__vev_calendar-wrapper{position:relative;overflow:hidden;width:100%}
    .__vev_calendar-wrapper .events-wrapper{border-radius:10px}
    .__vev_calendar-wrapper .cal-wrapper{
      width:100%;padding:10px 5px
    }
    .__vev_calendar-wrapper .cal-wrapper .date-num{
      line-height:42px
    }
    .cal-wrapper {

     position: initial !important; 
     top: 0 !important; 
    }
    .__vev_calendar-wrapper .events-wrapper{
      display:none;
    } */
  /* } */
</style>
