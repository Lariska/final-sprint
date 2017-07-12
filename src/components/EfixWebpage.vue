<template>
  <section>
    <efix-header>
      <h3>Edit Mode</h3>
    </efix-header>

    <div class="body">
      <div v-if="cmpToRender.length > 0" class="buttons">
        <status-buttons class="publish-buttons"
        @publish="switchToPublishMode"></status-buttons>
      </div>
      <div class="choice">
        <element-choice @selectedElement="selectElement"></element-choice>

        <el-card v-if="cmpToRender.length > 0" class="box-card" body-style="width:100%">

          <component v-for="component in cmpToRender"
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

import ElementChoice from './ElementChoice'
import { EFIX_CHOSE_ELEMENT, ADD_COMPONENT } from '../store/Efix.store'
import EditorPanel from './EditorPanel'
import StatusButtons from './StatusButtons';
export default {
  name: 'web-page',
  components: {
    ElementChoice,
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

  },
  data() {
    return {
      sectionCount: 0,
      userComponent: []
    }
  },
  computed: {
    cmpToRender() {
      return this.$store.state.efix.components
    }
  },
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
  }
.body{
  height: 100%;
  min-height: 650px;
  background-image: url("http://meticul.com/blog/assets/Responsive-website.jpg");
  background-size: cover;
  margin: 0;
}
@media (max-width: 750px) {
  .body{
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
    margin: 10px;
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
