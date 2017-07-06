<template>
<div class= "el-icon-circle-cross" @click="close"></div>
</template>
<script>
export default {
  name: 'close-btn',
  created() {
      console.log("created");
  },
  methods: {
      close(){
          console.log("click");
      }
  }
}
</script>
<style scoped>

    div{
        color:red;
        font-size:2em;
        /*background-color: gray;*/
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

