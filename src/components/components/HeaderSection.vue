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
      <edit-btn class="editBtn" @click.native="togglePanel" v-if="!panelVisible"></edit-btn>
      <img class="logo" :src="'../../../static/' + paramsForRender.data.content.img" alt="">
      <div class="text">
        <h2
        :style="paramsForRender.data.title.style"
        :contenteditable="isEditable"
        :class="{ editableTxt: isEditable }"
        :value="hContent"
        @keyup="updateContent"
        ref="elHeader"
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
  import EditBtn from '../editor/EditBtn';

  export default {
    name: HEADER_SECTION,
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn,
      EditBtn
    },
    data: function () {
      return {
        panelVisible: false,
        isEditable:false,
        hContent:''
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
        this.isEditable = !this.isEditable;
      },
      updateContent(eleme){
        console.log('updating content!' , this.$refs.elHeader.innerText);
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
    font-size: 24px;
    top: 0;
    right: 0;
  }
  .editableTxt{
    border: 1px solid blue;
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


</style>




