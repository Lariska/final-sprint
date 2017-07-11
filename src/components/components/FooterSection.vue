<template>
  <section class="footer"
           :style="paramsForRender.data.style"
  >
    <toolbar
      class="toolbar"
      v-if="panelVisible"
      :panelVisible="panelVisible"
      @closePanel="closePanel"
      :paramsForRender="paramsForRender"
      @editContent = "makeContentEditable"
    >
    </toolbar>
    <div class="container">
      <edit-btn class="editBtn" @click.native="togglePanel" v-if="!panelVisible"></edit-btn>
      <p
        v-if="isEditable"
        contenteditable ="true"
        @keyup="updateContent('content', 'elParagraph')"
        ref="elParagraph"
        class="editableTxt" 
        :style="paramsForRender.data.style"
      >{{content}}</p>
      <p 
        v-else
        contenteditable ="false"
        :style="paramsForRender.data.style"
        >{{ paramsForRender.data.content.text }}</p>
      <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
    </div>
  </section>

</template>
<script>
  import {FOOTER_SECTION} from '../../constants/cmpName';
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  import EditBtn from '../editor/EditBtn';

  export default {
    name: FOOTER_SECTION,
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
      }
    },
    methods: {
      makeContentEditable(){
        this.isEditable = !this.isEditable;
        this.content = this.paramsForRender.data.content.text;
      },
      togglePanel: function () {
        if (!this.panelVisible) this.panelVisible = true;
      },
      closePanel() {
        this.panelVisible = false;
      },
      updateContent(context,ref){
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

  .footer {
    background-color: #ccc;
    border: 1px solid #c1e2b3;
    height: 60px;

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
