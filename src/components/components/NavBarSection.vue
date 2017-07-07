<template>
  <section @click="makeVisible">
    <toolbar class="toolbar" v-if="isVisible" :isVisible="isVisible"></toolbar>
    <div class="menu"
    :style="paramsForRender.data.style">
      <ul class="nav">
        <li
        v-for="link in paramsForRender.data.links" :key="link"><a :href="link.url" :style="link.style"> {{link.text}}</a></li>
      </ul>
      <close-btn class="close-btn" :cmp="paramsForRender"></close-btn>
    </div>
  </section>
</template>
<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  import { NAV_BAR_SECTION } from '../../constants/cmpName'
  export default {
    name: NAV_BAR_SECTION,
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {
      return {
        isVisible: false,
      }
    },
    methods: {
      makeVisible: function () {
        this.isVisible = true
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
    font-size: 26px;
    color: cornflowerblue;
  }

  section .menu a {
    margin: 0 30px;
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
    top: 0;
    right: 0;
  }
</style>
