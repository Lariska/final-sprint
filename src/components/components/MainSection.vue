<template>
  <section>
    <toolbar
      class="toolbar"
      :class="{ panelVisible: panelVisible }"
      v-if="panelVisible"
      :panelVisible="panelVisible"
      @closePanel="closePanel"
      :paramsForRender="paramsForRender"
    ></toolbar>

    <div class="container" :style="paramsForRender.data.style">
      <edit-btn class="editBtn" @click.native="togglePanel"></edit-btn>
      <h2 :style="paramsForRender.data.title.style">{{ paramsForRender.data.title.text }}</h2>
      <p :style="paramsForRender.data.content.style">{{ paramsForRender.data.content.text }}</p>
      <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
    </div>
  </section>
</template>
<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  import EditBtn from '../editor/EditBtn';
  import {MAIN_SECTION} from '../../constants/cmpName'
  export default {
    name: MAIN_SECTION,
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn,
      EditBtn
    },
    data: function () {
      return {
        panelVisible: false
      }
    },
    methods: {
      togglePanel: function () {
//        if (!this.panelVisible) this.panelVisible = true;
        this.panelVisible = true;
      },
      closePanel: function () {
        this.panelVisible = false;
      }
    }
  }
</script>
<style scoped>

  section {
    position: relative;
  }

  .container {
    position: relative;
    border: 1px solid #c1e2b3;
    height: 300px;
  }

  .closeBtn {
    position: absolute;
    font-size: 24px;
    top: 0;
    right: 0;
  }

  .editBtn {
    position: absolute;
    top: 0;
    left: 0;
  }
  .toolbar {
    position: absolute;
    bottom: 0;
    left: 60px;
  }

  .panelVisible {
    bottom: 0;
    left: 60px;
  }
</style>


