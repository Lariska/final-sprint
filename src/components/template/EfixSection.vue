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
  header {
    height: 60px;
    background-color: #cccccc;
  }

  header .menu {
    display: flex;
    line-height: 60px;
    font-size: 26px;
    color: cornflowerblue;
  }

  header .menu a {
    margin: 0 30px;
  }

  header .logo {
    color: red;
    font-size: 30px;
  }

  header .nav {
    display: flex;
    list-style: none;
    margin: 0;
  }

  header .nav a {
    text-decoration: none;
  }
</style>
