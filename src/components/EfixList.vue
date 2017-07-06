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


  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

    <div id="modal"></div>
  </section>
</template>
<script>

  export default {
    name: 'efix-list',
    data(){
      return {
        elements: [],
        sectionCount: 0
      }
    },
    methods: {
      selectElement(componentName){
        this.elements.push(componentName);
        this.$store.commit(EFIX_CHOSE_ELEMENT, componentName);
      },
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
  .button {
    display: flex;
    align-content: center;
    justify-content: center;
  }

    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

