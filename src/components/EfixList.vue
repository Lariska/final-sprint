<template>
    <section>
        <h2>Whats</h2>
        <nav-bar-section v-for="section in sectionCount"></nav-bar-section>
        <div>
            <button @click="updateCount">+</button>
        </div>
        <div id="modal"></div>
    </section>
</template>
<script>
import NavBarSection from './template/NavBarSection'
import FooterSection from './template/FooterSection'
import MainSection from './template/MainSection'
export default {
  name: 'efix-list',
  components: {NavBarSection, FooterSection, MainSection},
  data(){
      return{
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
    div{
        display:flex;
        justify-content: flex-end;
    }
    #modal{
        background-color: red;
        height: 150px;
        width: 50%;
        position: absolute;
        left: 25%;
        display:none;
    }
</style>

