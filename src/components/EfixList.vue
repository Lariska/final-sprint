<template>
  <section>
    <h2>Whats</h2>
    <!--<efix-website v-for="section in sectionCount" :key="section"></efix-website>-->
    <div>
      <button @click="updateCount">+</button>
    </div>
    <element-choice @selectedElement="selectElement" ></element-choice>
        <component v-for="element in elements" :key="element" :is="element"></component>

    <div id="modal"></div>
  </section>
</template>
<script>
    import NavBarSection from './template/NavBarSection'
    import MainSection from './template/MainSection'  
    import FooterSection from './template/FooterSection'
    import HeaderSection from './template/HeaderSection'
    // import EfixWebsite from './EfixWebsite'
    import ElementChoice from './ElementChoice'
  export default {
    name: 'efix-list',
    components: {ElementChoice, FooterSection, NavBarSection, MainSection, HeaderSection},
    data(){
      return {
        elements:[],
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
</style>

