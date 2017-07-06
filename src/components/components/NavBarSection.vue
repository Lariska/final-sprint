<template>
  <section>
    <div class="menu">
      <ul class="nav">
        <li><a href="">Link1</a></li>
        <li><a href="">Link2</a></li>
        <li><a href="">Link3</a></li>
        <li><a href="">Link4</a></li>
      </ul>
    </div>
  </section>
</template>
<script>
// import HeaderSection from './HeaderSection'
export default {
    name: 'nav-bar-section',
    // components: {
    //   "header-section": HeaderSection
    // }
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
