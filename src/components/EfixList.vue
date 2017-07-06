<template>
  <section>

    <nav class="main-nav flex align-center justify-center">
      <ul class="clean-list flex align-center">
        <img src="../assets/wixer-logo.png" alt="Company name">
      </ul>
    </nav>

  <div class="button">
    <ul class="button">
    <router-link to ="/web-page"><el-button :plain="true" type="info">Create Your Webxite</el-button></router-link>
    </ul>
    <ul class="button">
      <el-button :plain="true" type="info">Info</el-button>
    </ul>
  </div>
<!--
      <editor-panel></editor-panel>
      <div class="choice">
        <element-choice @selectedElement="selectElement" ></element-choice>
      </div>
      <div class="box">
        <el-card class="box-card">
            <component v-for="element in elements" :key="element" :is="element"></component>
        </el-card>

    </div>-->

    <div id="modal"></div>
  </section>
</template>
<script>


  // import NavBarSection from './components/NavBarSection'
  // import MainSection from './components/MainSection'
  // import FooterSection from './components/FooterSection'
  // import HeaderSection from './components/HeaderSection'
  // import ElementChoice from './ElementChoice'
  // import { EFIX_CHOSE_ELEMENT } from '../store/Efix.store'
  // import EditorPanel from './EditorPanel'

  export default {
    name: 'efix-list',
    components: {
      // ElementChoice,
      // FooterSection,
      // NavBarSection,
      // MainSection,
      // HeaderSection,
      // EditorPanel
    },
    data(){
      return {
        elements: [],
        sectionCount: 0
      }
    },
    methods: {
      /*selectElement(componentName){
        this.elements.push(componentName);
        this.$store.commit(EFIX_CHOSE_ELEMENT, componentName);
      },*/
      updateCount(){

        this.sectionCount += 1;
      }
    },
  }
</script>

<style scoped>
  .main-nav {
    background-color: #4E8098;
    padding: 0;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }
  #modal {
    background-color: red;
    height: 150px;
    width: 50%;
    position: absolute;
    left: 25%;
    display: none;
  }

  .add {
    margin-top: 10px;
  }

  .box {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .box-card {
    margin-left: 10px;
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
    .add {
    margin-top: 10px;
  }
  .button {
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>

