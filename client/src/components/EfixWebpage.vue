<template>
  <section>
    <efix-header>
      <h3>Edit Mode</h3>
    </efix-header>

    <div class="container">
      <!--v-if="this.$store.state.efix.components.length > 0"  -->
      <div  class="buttons">
        <status-buttons class="publish-buttons"
        @publish="switchToPublishMode"
        @displayModal="showModal=true"></status-buttons>
      </div>
      <div class="choice">
         <!-- <element-choice @selectedElement="selectElement"></element-choice>  -->
    <!-- use the modal component, pass in the prop -->
        <efix-component-modal 
        v-if="showModal" 
        @close="showModal = false"
        @addCmp="selectElement"

        >
          <!--
            you can use custom content here to overwrite
            default content
          -->
        </efix-component-modal>

        <el-card v-if="this.$store.state.efix.components.length > 0" class="box-card" body-style="width:100%">

          <component v-for="component in this.$store.state.efix.components"
          :id="component.id"
          :key="component.type"
          :is="component.type"
          :paramsForRender="component"
          ></component>

        </el-card>
      </div>
    </div>

      <efix-footer></efix-footer>
  </section>
</template>

<script>
// import NavBarSection from './components/NavBarSection'
import MainSection from './components/MainSection'
import FooterSection from './components/FooterSection'
import HeaderSection from './components/HeaderSection'
import GallerySection from './components/GallerySection'
import DateSection from './components/DateSection'
import TableSection from './components/TableSection'
import PlaceSection from './components/PlaceSection'



import EfixHeader from './EfixHeader';
import EfixFooter from './EfixFooter';

import { EFIX_CHOSE_ELEMENT, ADD_COMPONENT } from '../store/Efix.store'
import EditorPanel from './EditorPanel'
import StatusButtons from './StatusButtons'

import EfixComponentModal from './EfixComponentModal'

export default {
  name: 'web-page',
  components: {
    FooterSection,
    // NavBarSection,
    MainSection,
    HeaderSection,
    EditorPanel,
    GallerySection,
    StatusButtons,
    DateSection,
    TableSection,
    PlaceSection,
    'efix-header': EfixHeader,
    'efix-footer': EfixFooter,
    EfixComponentModal,
  },
  data() {
    return {
      sectionCount: 0,
      userComponent: [],
      showModal: false,
    }
  },
  // computed: {
  //   cmpToRender() {
  //     return this.$store.state.efix.components
  //   }
  // },
  created () {
       this.$store.dispatch('getData')
  },
  methods: {
    selectElement(value) {
      this.$store.dispatch('addCmp', value);
    },
    updateCount() {

      this.sectionCount += 1;
    },
    switchToPublishMode(){
      console.log('switching to publish mode!');
    }
  },
}
</script>

<style scoped>
  body {
    padding: 0;
    margin: 0;
  }
.container{
  height: 100%;
  min-height: 650px;
  /*background-image: url("http://meticul.com/blog/assets/Responsive-website.jpg");*/
  background-image: url('../assets/Website.jpg');
  background-size: cover;
  margin: 0;
}
@media (max-width: 750px) {
  .container{
    height: 100%;
    margin: 0;
  }
}
  .box-card {
    margin: 20px 30px 0 80px;
    display: flex;
    align-content: center;
    justify-content: center;
    max-width: 100%;
    width: 80%;
  }
  .choice{
    /*margin: 10px;*/
    display: flex;
    justify-content: right;
  }
  .buttons{
    /*width: 100%;
    display: flex;
    align-content: center;*/
    /*margin: 100px;*/
    position: sticky;
    top:0;
    z-index:2;
  }
  /*.publish-buttons{
    z-index:2;
  }*/


</style>
