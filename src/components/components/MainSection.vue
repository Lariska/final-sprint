<template>
  <section @click="toggleVisible">
    <toolbar
      class="toolbar"
      v-if="isVisible"
      @closePanel="toggleVisible"
      @changeFont="toggleChangeFont"
    ></toolbar>
    <div class="container" :style="paramsForRender.data.style">
      <h2 :style="paramsForRender.data.title.style">{{ paramsForRender.data.title.text }}</h2>
      <p :style="paramsForRender.data.content.style">{{ paramsForRender.data.content.text }}</p>
    </div>
  </section>
</template>
<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  import { MAIN_SECTION } from '../../constants/cmpName'
  export default {
    name: MAIN_SECTION,
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {
      return {
        isVisible: false,
      }
    },
    methods: {
      toggleVisible: function () {
        this.isVisible = !this.isVisible;
        console.log(this.isVisible)
      },
      toggleChangeFont: function () {

      }
    }
  }
</script>
<style scoped>
  .container {
    /*background-color: #ccc;*/
    border: 1px solid #c1e2b3;
    height: 300px;
  }

  section .menu {
    display: flex;
    line-height: 60px;
    font-size: 26px;
    color: cornflowerblue;
  }
</style>


