<template>
  <section>
    <nav class="main-nav">
    <router-link to ="/"><img src="../assets/efix.png" class="image"></router-link>
      <h3>Welcome</h3>
    </nav>
  </section>
</template>

<script>
import EfixHeader from './EfixHeader';
  export default {
    name: 'efix-header',
  }
</script>
<style scoped>
html{
  margin: 0;
}
  img{
    display: flex;
    justify-content: right;
    margin-right: 10px;
    padding: 10px;
    border-right: 1px solid lightgray;
  }
  h3{
    margin-top: 30px;
  }
  .main-nav {
    display: flex;
    justify-content: right;
    align-content: right;
    background-color: white;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
  }
</style>

