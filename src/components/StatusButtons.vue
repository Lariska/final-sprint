<template>
  <section>
    <el-button type="info"> Edit Mode</el-button>
    <el-button type="success">Publish Mode</el-button>
    <!--<el-button type="success" @click="getData">Get data</el-button>-->
  </section>
</template>
<script>
  export default {
    name: 'status-buttons',
    methods: {
//        getData() {
//          this.$store.dispatch('getData');
//        }
    },
  }
</script>
<style scooped>
  /*button {*/
    /*min-width: 117px;*/
  /*}*/
</style>
