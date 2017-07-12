<template>
  <section>


    <transition name="bounce">
      <toolbar
        class="toolbar"
        :class="{ panelVisible: panelVisible }"
        v-if="panelVisible"
        :panelVisible="panelVisible"
        @closePanel="closePanel"
        :paramsForRender="paramsForRender"
        @editContent = "makeContentEditable"
      ></toolbar>
    </transition>

    <div class="container" :style="paramsForRender.data.style">
      <edit-btn class="editBtn" @click.native="togglePanel"></edit-btn>
      <h2
        v-if="isEditable"
        :style="paramsForRender.data.title.style"
        contenteditable ="true"
        @keyup="updateContent('title', 'elHeader')"
        ref="elHeader"
        class="editableTxt">{{title}}</h2>
      <h2 v-else
      :style="paramsForRender.data.title.style">
        {{ paramsForRender.data.title.text }}</h2>
      <p
        v-if="isEditable"
        contenteditable ="true"
        @keyup="updateContent('content', 'elContent')"
        ref="elContent"
        class="editableTxt" >{{content}}</p>
      <p v-else :style="paramsForRender.data.content.style">{{ paramsForRender.data.content.text }}</p>
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
        panelVisible: false,
        isEditable:false,
        content:null,
        title:null
      }
    },
    methods: {
      togglePanel: function () {
//        if (!this.panelVisible) this.panelVisible = true;
        this.panelVisible = true;
      },
      closePanel: function () {
        this.panelVisible = false;
      },
      makeContentEditable: function(){
        this.isEditable = !this.isEditable;
        this.content = this.paramsForRender.data.content.text;
        this.title = this.paramsForRender.data.title.text;
      },
      updateContent: function(context,ref){
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data[context].text = this.$refs[ref].innerText;
        this.$store.dispatch('editCmp', { cmp: cmpEdited} );
      },
    }
  }
</script>
<style scoped>

  section {
    position: relative;
  }

  .container {
    /*position: relative;*/
    border: 1px solid #d0e2cc;
    height: 350px;
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
    left: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .editableTxt{
    border: 1px solid blue;
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


