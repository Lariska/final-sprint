<template>
  <section>

    <nav class="main-nav flex align-center justify-center">
      <ul class="clean-list flex align-center">
        <img src="../assets/wixer-logo.png" alt="Company name">
      </ul>
    </nav>

    <efix-website v-for="section in sectionCount" :key="section"></efix-website>
    <div class="add">
      <button @click="updateCount">+</button>
    </div>
    <element-choice></element-choice>
    <div id="modal"></div>
  </section>
</template>
<script>
    import EfixWebsite from './EfixWebsite'
    import ElementChoice from './ElementChoice'
  export default {
    name: 'efix-list',
    components: {ElementChoice, EfixWebsite},
    data(){
      return {
        sectionCount: 0
      }
    },
    methods: {
      updateCount(){

        this.sectionCount += 1;
      }
    }
  }
</script>

<style scoped>
.main-nav{
  background-color: #41B883;
  padding: 0;
}
  div {
    display: flex;
    justify-content: flex-end;
  }

  #modal {
    background-color: red;
    height: 150px;
    width: 50%;
    position: absolute;
    left: 25%;
    display: none;
  }
  .add{
    margin-top: 10px;
  }
</style>

