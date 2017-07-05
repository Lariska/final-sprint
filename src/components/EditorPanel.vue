<template>

  <vue-draggable-resizable
    class="editor"
    :w="100"
    :h="300"
    :resizable="false"
    :parent="false">

    <a @click.prevent=""  href=""><i class="el-icon-delete"></i></a>

  </vue-draggable-resizable>

</template>
<script>
  import VueDraggableResizable from 'vue-draggable-resizable'

  export default {
    name: 'editor',
  }
</script>

<style scoped>
  .editor {
    width: 100px;
    height: 300px;
    margin-left: 20px;
    background-color: #fff;
    float: left;
    border: 1px solid #d1dbe5;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
  }

  a i {
    font-size: 24px;
  }


</style>
