<template>
  <section>
    <efix-header>
      <h3>Edit Mode</h3>
    </efix-header>

    <div class="body">
      <div class="buttons">
        <status-buttons class="publish-buttons"
        @publish="switchToPublishMode"></status-buttons>
      </div>
      <div class="choice">
        <element-choice @selectedElement="selectElement"></element-choice>
        <el-card class="box-card"
        body-style="width:100%">

        <!--<span style="line-height: 36px;">Card name</span>-->

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
.body{
  height: 650px;
  background-image: url("http://www.paulmunday.co.uk/images/parallax-banner-2.jpg");
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
    margin-left: 100px;
    display: flex;
    align-content: center;
    justify-content: center;
    max-width: 100%;
    width: 60%;
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
    margin: 10px;
    position: sticky; top: 0px;
  }
  .publish-buttons{
    /*margin-left: auto;*/
  }

</style>
