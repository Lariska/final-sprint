<template>
  <section>
    <h2>Whats</h2>
    <efix-website v-for="section in sectionCount" :key="section"></efix-website>
    <div>
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
</style>

