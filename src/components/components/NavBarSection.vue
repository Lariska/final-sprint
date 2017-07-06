<template>
  <section @click="makeVisible">
    <toolbar class="toolbar" v-if="isVisible" :isVisible="isVisible"></toolbar>
    <div class="menu">
      <ul class="nav">
        <li v-for="link in navBar.links"><a href="">{{ link.text }}</a></li>

      </ul>
    </div>
  </section>
</template>
<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  export default {
    name: 'nav-bar-section',
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {
      return {
        isVisible: false,
        navBar: {
          id: null,
          type: 'navBar1',
          logo: '',
          links: [
            {text: 'link1', url: ''},
            {text: 'link2', url: ''},
            {text: 'link3', url: ''},
            {text: 'link4', url: ''}
          ],
          font: {
            size: '16px',
            color: '#2C3E50'
          },
          backgroundColor: '#CED3DC'
        }
      }
    },
    created: {
      getNavBar: function () {
        return this.navBar
      },
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
</style>
