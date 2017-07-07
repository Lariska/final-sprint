<template>
<div @click.stop="closeElem"><i class="el-icon-circle-cross"></i></div>
</template>
<script>
export default {
  name: 'close-btn',
  created() {
  },
  methods: {
    closeElem(){

      }
  }
}
</script>
<style scoped>

    div{
        font-size:1.5em;
        opacity:0.5;
        height:10%;
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        transition: 0.2s;
    }
    div:hover{
        cursor:pointer;
        opacity:1;
    }

</style>

