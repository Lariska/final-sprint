<template>
  <section>

    <nav class="main-nav">
      <img src="../assets/efix.png" alt="Company name">
      <h3>Welcome</h3>
    </nav>

  <div class="button">
    <ul class="button">
    <router-link to ="/web-page"><el-button :plain="true" type="info">Create Your Webxite</el-button></router-link>
    </ul>
    <!--<ul class="button">-->
      <!--<el-button :plain="true" type="info">Info</el-button>-->
    <!--</ul>-->
  </div>

  <efix-carusella></efix-carusella>
  <efix-about></efix-about>
  <efix-footer></efix-footer>

    <div id="modal"></div>
  </section>
</template>
<script>
import EfixCarusella from './EfixCarusella';
import EfixFooter from './EfixFooter';
import EfixAbout from './EfixAbout';

  export default {

    name: 'efix-list',
    data(){
      return {
        elements: [],
        sectionCount: 0,
        items:['rrrrrr','111111','222222']
      }
    },
    components: {
      'efix-carusella' : EfixCarusella,
      'efix-footer': EfixFooter,
      'efix-about': EfixAbout,
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
html{
  margin: 0;
}
  img{
    display: flex;
    justify-content: right;
    margin-right: 10px;
    padding: 10px;
    border-right: 1px solid lightgray;
  }
  h3{
    margin-top: 30px;
  }
  .main-nav {
    display: flex;
    justify-content: right;
    align-content: right;
    background-color: white;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
  #modal {
    background-color: red;
    height: 50px;
    width: 50%;
    position: absolute;
    left: 25%;
    display: none;
  }

  .add {
    margin-top: 10px;
  }

  .button {
    display: flex;
    align-content: center;
    justify-content: center;
  }

    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

