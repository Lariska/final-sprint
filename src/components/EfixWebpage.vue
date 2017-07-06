<template>
  <section>

      <editor-panel></editor-panel>
      <div class="choice">
        <element-choice @selectedElement="selectElement" ></element-choice>
      </div>
      <div class="box">
        <el-card class="box-card">
            <component v-for="element in elements" :key="element" :is="element"></component>
        </el-card>
    </div>
  </section>
</template>

<script>
  import NavBarSection from './components/NavBarSection'
  import MainSection from './components/MainSection'
  import FooterSection from './components/FooterSection'
  import HeaderSection from './components/HeaderSection'
  import ElementChoice from './ElementChoice'
  import { EFIX_CHOSE_ELEMENT } from '../store/Efix.store'
  import EditorPanel from './EditorPanel'
  export default {
    name: 'web-page',
    components: {
      ElementChoice,
      FooterSection,
      NavBarSection,
      MainSection,
      HeaderSection,
      EditorPanel
    },
    data(){
      return {
        elements: [],
        sectionCount: 0
      }
    },
    methods: {
      selectElement(value){
        this.elements.push(value);
        console.log(value);
      },
      updateCount(){

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
  .choice{
    display: flex;
    justify-content: right;
  }
</style>