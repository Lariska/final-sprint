<template>
  <section>
    <status-buttons></status-buttons>
    <div class="choice">
      <element-choice @selectedElement="selectElement"></element-choice>
    </div>
    <div class="box">
      <el-card class="box-card"
      body-style="width:100%">
        <component v-for="component in cmpToRender" 
        :key="component.type"
        :is="component.type"
        :paramsForRender="component"
        ></component>
      </el-card>
    </div>
  </section>
</template>

<script>
import NavBarSection from './components/NavBarSection'
import MainSection from './components/MainSection'
import FooterSection from './components/FooterSection'
import HeaderSection from './components/HeaderSection'
import GallerySection from './components/GallerySection'
import DateSection from './components/DateSection'
import TableSection from './components/TableSection'
import ElementChoice from './ElementChoice'
import { EFIX_CHOSE_ELEMENT, ADD_COMPONENT } from '../store/Efix.store'
import EditorPanel from './EditorPanel'
import StatusButtons from './StatusButtons';
export default {
  name: 'web-page',
  components: {
    ElementChoice,
    FooterSection,
    NavBarSection,
    MainSection,
    HeaderSection,
    EditorPanel,
    GallerySection,
    StatusButtons,
    DateSection,
    TableSection
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
  methods: {
    selectElement(value) {
      this.$store.commit('ADD_COMPONENT', value)
      // this.elements.push(value);
      //  console.log("store components: ",);
    },
    updateCount() {

      this.sectionCount += 1;
    }
  },
}
</script>

<style scoped>
.box-card {
  margin-left: 100px;
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 100%;
  width: 60%;
}

.choice {
  display: flex;
  justify-content: right;
}
</style>
