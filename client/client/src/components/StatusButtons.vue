<template>
  <section>
    <!--<el-button type="info"> Edit Mode</el-button>-->
    <router-link to ="/publish"><el-button type="success" @click="switchToPublish">Publish Mode</el-button></router-link>
    <!--<el-button type="success" @click="getData">Get data</el-button>-->
  </section>
</template>
<script>
  export default {
    name: 'status-buttons',
    methods: {
      switchToPublish(){
        this.$emit('publish');
      }
    },
  }
</script>
<style scooped>
  /*button {*/
    /*min-width: 117px;*/
  /*}*/
</style>
