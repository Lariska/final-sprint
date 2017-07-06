<template>
  <section>
  <vue-draggable-resizable
    class="editor"
    :w="300"
    :h="50"
    :resizable="false"
    :parent="false">

    <el-button-group>
      <el-button type="primary" icon="delete" size="small"></el-button>
      <el-button type="primary" icon="edit" size="small"></el-button>
      <el-button type="primary" icon="picture" size="small"></el-button>
      <el-button type="primary" size="small"><i class="fa fa-align-left" aria-hidden="true"></i></el-button>
      <el-button type="primary" size="small"><i class="fa fa-align-center" aria-hidden="true"></i></el-button>
      <el-button type="primary" size="small"><i class="fa fa-align-right" aria-hidden="true"></i></el-button>
      <el-button type="primary" size="small" @click="changeFont"><i class="fa fa-font" aria-hidden="true"></i></el-button>
      <el-color-picker v-model="color1" size="small"></el-color-picker>
      <el-button type="success" icon="circle-cross" @click="isVisible = !isVisible" size="mini"></el-button>
    </el-button-group>

  </vue-draggable-resizable>
  </section>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'

  export default {
    name: 'tool-bar',
    props: ['isVisible'],
    data() {
      return {
        color1: '#20a0ff',
        color2: null
      }
    },
    methods: {
      closePanel: function () {

      },
      changeFont(event) {
          console.log(event),
          this.$emit('changeFont')
      }
    }
  }
</script>

<style scoped>
  section {
    position: absolute;
    /*top: 40px;*/
  }
  .el-button-group {
    display: flex;
  }
  button.block {
    /*border: 1px solid #20a0ff;*/
  }
</style>
