<template>
  <section class="header" :style="paramsForRender.data.style">
    <edit-btn class="editBtn" @click.native="togglePanel" v-if="!panelVisible"></edit-btn>

    <transition name="bounce">
    <toolbar
      class="toolbar"
      v-if="panelVisible"
      :panelVisible="panelVisible"
      @closePanel="closePanel"
      :paramsForRender="paramsForRender"
      @editContent = "makeContentEditable">
    </toolbar>
    </transition>

    <div class="head">
      <img class="logo" :src="'../../../' + paramsForRender.data.content.img" alt="">
      <div class="text">
        <h2
        v-if="isEditable"
        :style="paramsForRender.data.title.style"
        contenteditable ="true"
        @keyup="updateContent('title', 'elHeader')"
        ref="elHeader"
        class="editableTxt">{{title}}</h2>
        <h2 v-else
        :style="paramsForRender.data.title.style">
          {{ paramsForRender.data.title.text }}
        </h2>
        <p
        v-if="isEditable"
        contenteditable ="true"
        @keyup="updateContent('content', 'elContent')"
        ref="elContent"
        class="editableTxt" >{{content}}</p>
        <p
        v-else
        :style="paramsForRender.data.style">
        <!-- :contenteditable="isEditable"
        :class="{ editableTxt }"
        @keyup="updateContent('content', 'elContent')"-->
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
        content:null,
        title:null
      }
    },
    created(){
      //this.editablesTimer=setInterval(this.saveEditables, 1000);
    },
    beforedestroyed(){
      //clearInterva(this.editablesTimer);
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
        this.content = this.paramsForRender.data.content.text;
        this.title = this.paramsForRender.data.title.text;
      },//
      updateContent(context,ref){
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data[context].text = this.$refs[ref].innerText;
        this.$store.dispatch('editCmp', { cmp: cmpEdited} );
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
    /*display: flex;*/
    /*align-content: center;*/
    /*justify-content: center;*/
    background-color: #CED3DC;
    padding: 15px 0;
  }

  img {
    /*vertical-align: middle;*/
    margin-right: 10%;
    margin-top: 2%;
  }
  .text{
    margin-right: 20%;
  }

  .header h2, p {
    padding: 0;
    margin: 0;
  }

  .logo {
    width: 80px;
    height: 60px;
  }

  .head {
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
    /*z-index: 1000;*/
    /*left: 60px;*/
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }


</style>




