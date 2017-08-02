<template>
  <section>
    <!--<el-button type="info"> Edit Mode</el-button>-->
    <el-button id="show-modal" type="info" @click="displayModal">Add Component</el-button>
    <router-link to ="/publish"><el-button v-if="this.$store.state.efix.components.length > 0" type="success" @click="switchToPublish">Publish Mode</el-button></router-link>
    <!--<el-button type="success" @click="getData">Get data</el-button>-->
  </section>
</template>
<script>

  export default {
    name: 'status-buttons',
    methods: {
      switchToPublish(){
        this.$emit('publish');
      },
      displayModal(){
        console.log("showing the modal!");
        this.$emit('displayModal');
      }
    },
  }
</script>
<style scooped>
  /*button {*/
    /*min-width: 117px;*/
  /*}*/
</style>
