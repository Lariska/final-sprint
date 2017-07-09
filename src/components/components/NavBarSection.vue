<template>
  <section @click="togglePanel">
    <toolbar
      class="toolbar"
      v-if="panelVisible"
      :panelVisible="panelVisible"
      @closePanel="closePanel"
      :paramsForRender="paramsForRender">
    </toolbar>
    <div class="menu"
         :style="paramsForRender.data.style">
      <ul class="nav">
        <li
          v-for="link in paramsForRender.data.content.links" :key="link">
          <a :href="link.url"
             :style="link.style">
            {{link.text}}
          </a>
        </li>
      </ul>
    </div>
    <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>

  </section>
</template>
<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  import {NAV_BAR_SECTION} from '../../constants/cmpName'
  export default {
    name: NAV_BAR_SECTION,
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
  section {
    height: 60px;
    background-color: #ccc;
    border: 1px solid #c1e2b3;
    position: relative;
  }

  section .menu {
    display: flex;
    line-height: 60px;
    font-size: 20px;
    color: cornflowerblue;
  }

  section .menu a {
    margin: 0 20px;
  }

  section .logo {
    color: red;
    font-size: 30px;
  }

  section .nav {
    display: flex;
    list-style: none;
    margin: 0;
  }

  section .nav a {
    text-decoration: none;
  }

  .closeBtn {
    position: absolute;
    font-size: 24px;
    top: 0;
    right: 0;
  }
</style>
