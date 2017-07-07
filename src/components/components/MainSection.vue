<template>
  <section @click="togglePanel">
    <toolbar
      class="toolbar"
      v-if="panelVisible"
      :panelVisible="panelVisible"
      @closePanel="closePanel"

      :paramsForRender="paramsForRender"
    ></toolbar>
    <div class="container" :style="paramsForRender.data.style">
      <h2 :style="paramsForRender.data.title.style">{{ paramsForRender.data.title.text }}</h2>
      <p :style="paramsForRender.data.content.style">{{ paramsForRender.data.content.text }}</p>
      <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
    </div>
  </section>
</template>
<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  import {MAIN_SECTION} from '../../constants/cmpName'
  export default {
    name: MAIN_SECTION,
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {
      return {
        panelVisible: false,
        cmp: this.paramsForRender.id
      }
    },
    methods: {
      togglePanel: function () {
        if (!this.panelVisible) this.panelVisible = true;
      },
      closePanel() {
        this.panelVisible = false;
      }
    }
  }
</script>
<style scoped>
  .container {
    position: relative;
    border: 1px solid #c1e2b3;
    height: 300px;
  }

  section .menu {
    display: flex;
    line-height: 60px;
    font-size: 26px;
    color: cornflowerblue;
  }

  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>


