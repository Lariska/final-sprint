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
    >
    </toolbar>
    <div class="container">
      <edit-btn class="editBtn" @click.native="togglePanel" v-if="!panelVisible"></edit-btn>
      <p :style="paramsForRender.data.style">{{ paramsForRender.data.content.text }}</p>
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
        panelVisible: false
      }
    },
    // mounted() {
    //   this.$store.commit(ADD_COMPONENT, this.getFooter());
    //   console.log("mounted");
    // },
    methods: {
//      getFooter: function () {
//        return this.footerSection
//      },
//      makeVisible: function () {
//        this.isVisible = true
//      }
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
