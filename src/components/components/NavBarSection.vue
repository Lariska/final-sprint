<template>
  <section>
    <div class="menu">
      <ul class="nav">
        <!--<li v-for="link in navBars.links"><a href="">{{ link }}</a></li>-->
        <li><a href="">Link1</a></li>
        <li><a href="">Link2</a></li>
        <li><a href="">Link3</a></li>
        <li><a href="">Link4</a></li>
      </ul>
    </div>
  </section>
</template>
<script>

  export default {
    name: 'nav-bar-section',
    data: function () {
      return {
        navBar: {
          id: null,
          type: 'navBar1',
          logo: '',
          links: [
            'link1', 'link2', 'link3', 'link4'
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
