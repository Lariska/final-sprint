<template>
  <el-tooltip class="item" effect="light" content="Delete section" placement="top">
    <div @click.stop="deleteElem"><i class="el-icon-circle-cross"></i></div>
  </el-tooltip>
</template>
<script>
  export default {
    name: 'close-btn',
    props: ['cmp'],
    created() {
    },
    methods: {
      deleteElem(){
        this.$store.dispatch('deleteCmp', { cmp: this.cmp});
      }
    }
  }
</script>
<style scoped>

  div {
    font-size: 1.5em;
    opacity: 0.2;
    height: 10%;
    transition: 0.2s;
  }

  div:hover {
    cursor: pointer;
    opacity: 1;
  }

  i {
    color: black;
  }

</style>

