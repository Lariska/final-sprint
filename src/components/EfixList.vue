<template>
  <section>

    <nav class="main-nav flex align-center justify-center">
      <ul class="clean-list flex align-center">
        <img src="../assets/wixer-logo.png" alt="Company name">
      </ul>
    </nav>

      <div class="box"> 
        <el-card class="box-card">
          <element-choice @selectedElement="selectElement" ></element-choice>
              <component v-for="element in elements" :key="element" :is="element"></component>
        </el-card>
      </div>

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
.main-nav{
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
  .add{
    margin-top: 10px;
  }
  .box{
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .box-card {
    display: flex;
    align-content: center;
    justify-content: center;
    max-width: 100%;
    width: 60%;
  }
</style>

