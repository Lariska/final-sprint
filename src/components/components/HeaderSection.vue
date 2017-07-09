<template>
  <section class="header" @click="togglePanel" :style="paramsForRender.data.style">
    <toolbar
      class="toolbar"
      v-if="panelVisible"
      :panelVisible="panelVisible"
      @closePanel="closePanel"
      :paramsForRender="paramsForRender"
      @editContent = "makeContentEditable">
    </toolbar>
    <div class="header">
      <img class="logo" :src="'../../../static/' + paramsForRender.data.content.img" alt="">
      <div class="text">
        <h2 
        :style="paramsForRender.data.title.style"
        :contenteditable="isEditable"
        >
          {{ paramsForRender.data.title.text }}
        </h2>
        <p :style="paramsForRender.data.style">
          {{ paramsForRender.data.content.text }}
        </p>
      </div>
    </div>
    <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
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
        isEditable:false
      }
    },
    methods: {
      togglePanel: function () {
        if (!this.panelVisible) this.panelVisible = true;
      },
      closePanel() {
        this.panelVisible = false;
      },
      makeContentEditable(){
        isEditable = !isEditable;
      }
    }
  }
</script>


<style scoped>
  section {
    position: relative;
  }

  .header {
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #CED3DC;

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




