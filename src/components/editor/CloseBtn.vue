<template>
  <div @click.stop="deleteElem"><i class="el-icon-circle-cross"></i></div>
</template>
<script>
  export default {
    name: 'close-btn',
    props: ['cmp'],
    created() {
    },
    methods: {
      deleteElem(){
        this.$store.commit('deleteCmp', this.cmp)
      }
    }
  }
</script>
<style scoped>

  div {
    font-size: 1.5em;
    opacity: 0.2;
    height: 10%;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    transition: 0.2s;
  }

  div:hover {
    cursor: pointer;
    opacity: 1;
  }

</style>

