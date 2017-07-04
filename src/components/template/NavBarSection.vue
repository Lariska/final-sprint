<template>
  <section>
    <div class="menu">
      <a href=""><i class="fa fa-bars" aria-hidden="true"></i></a>
      <ul class="nav">
        <li><a href="">Link1</a></li>
        <li><a href="">Link1</a></li>
        <li><a href="">Link1</a></li>
        <li><a href="">Link1</a></li>
      </ul>
    </div>
    <header-section></header-section>
  </section>
</template>
<script>
import HeadrSection from './HeadrSection'
export default {
    name: 'efix-section',
    components: {
      "header-section": HeadrSection
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
