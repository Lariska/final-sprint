<template>
  <section>
  <efix-header></efix-header>

  <div class="button">
    <router-link to ="/web-page"><el-button :plain="true" type="info">Create Your Website</el-button></router-link>
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
import EfixHeader from './EfixHeader';

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
      'efix-header': EfixHeader,
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
    margin: 10px;
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

