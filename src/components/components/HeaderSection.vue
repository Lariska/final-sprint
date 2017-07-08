<template>
  <section class="header" @click="togglePanel">
    <toolbar
      class="toolbar"
      v-if="panelVisible"
      :panelVisible="panelVisible"
      @closePanel="closePanel"
      :paramsForRender="paramsForRender"
    >
    </toolbar>
    <div class="header" :style="paramsForRender.data.style">
      <img class="logo" :src="'../../../static/' + paramsForRender.data.img" alt="">
      <div class="text">
        <h2 :style="paramsForRender.data.title.style">
          {{ paramsForRender.data.title.text }}
        </h2>
        <p :style="paramsForRender.data.contentText.style">
          {{ paramsForRender.data.contentText.text }}
        </p>
      </div>
      <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
    </div>
  </section>
</template>


<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  import {HEADER_SECTION} from '../../constants/cmpName'
  export default {
    name: HEADER_SECTION,
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {
      return {
        panelVisible: false,
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
  .header {
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #CED3DC;
    position: relative;
  }

  .logo {
    margin-left: 10px;
  }

  .text {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
  }

</style>




