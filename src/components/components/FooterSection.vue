<template>
  <section class="footer"
           @click="togglePanel"
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
    <p :style="paramsForRender.data.content.style">{{ paramsForRender.data.content.text }}</p>
    <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
    </div>
  </section>

</template>
<script>
//  import {ADD_COMPONENT} from '../../store/Efix.store'
  import {FOOTER_SECTION} from '../../constants/cmpName'
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';

  export default {
    name: FOOTER_SECTION,
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn
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
  .container {
    position: relative;
  }

  .footer {
    background-color: #ccc;
    border: 1px solid #c1e2b3;
    height: 60px;

  }

  .closeBtn {
    position: absolute;
    top: -14px;
    right: 0;
  }
</style>
