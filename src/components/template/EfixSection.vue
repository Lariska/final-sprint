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
  </section>
</template>
<<script>
export default {
    name: 'efix-section',

}
</script>
<style>
  section {
    height: 60px;
    background-color: #cccccc;
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
