<template>
  <section v-if="myPanelVisible">
  <vue-draggable-resizable
    class="editor"
    :w="400"
    :h="50"
    :resizable="false"
    :parent="false">

    <div class="fontPanel" @click.stop="">

      <el-input-number
        v-if="fontPanelVisible"
        v-model="num1"
        @change="handleChange"
        :min="1" :max="60"
        size="small"
      >

      </el-input-number>
    </div>


    <el-button-group>
      <el-button type="primary" icon="delete" size="small" @click="deleteCmp"></el-button>
      <el-button type="primary" icon="edit" size="small"></el-button>
      <el-button type="primary" icon="picture" size="small"></el-button>
      <el-button type="primary" size="small"><i class="fa fa-align-left" aria-hidden="true"></i></el-button>
      <el-button type="primary" size="small"><i class="fa fa-align-center" aria-hidden="true"></i></el-button>
      <el-button type="primary" size="small"><i class="fa fa-align-right" aria-hidden="true"></i></el-button>
      <el-button type="primary" size="small" @click.stop="toggleFontPanel"><i class="fa fa-font" aria-hidden="true"></i></el-button>
      <el-color-picker v-model="color1"></el-color-picker>
      <el-button type="success" icon="circle-cross" @click.stop="closePanel" size="small"></el-button>
      <el-button type="gray" icon="more" size="small" ></el-button>

    </el-button-group>

  </vue-draggable-resizable>
  </section>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'

  export default {
    name: 'tool-bar',

    props: ['panelVisible','paramsForRender','cmpId'],

    data() {
      return {
        color1: '#20a0ff',
        num1: +(this.paramsForRender.data.content.style.fontSize).slice(0,-2),
        myPanelVisible: this.panelVisible,
        fontPanelVisible : false
      }
    },
    methods: {
      cmpToRender() {
        return this.$store.state.efix.components
      },
      closePanel: function () {
        this.myPanelVisible = false;
        this.$emit('closePanel')
      },
      changeFontSize(event) {
          console.log(event);
          this.$emit('changeFontSize', value)
      },
      handleChange(value) {
        this.paramsForRender.data.content.style.fontSize = value + 'px';
        console.log(this.paramsForRender.data.content.style.fontSize)
      },
      toggleFontPanel() {
        this.fontPanelVisible = !this.fontPanelVisible;
        console.log((this.paramsForRender.data.content.style.fontSize).slice(0,-2));
        console.log(this.$store.state.efix.components);

      },
      deleteCmp() {
        console.log('deleting the ' + this.cmpId + " component");
      }
    }
  }
</script>

<style scoped>
  section {
    position: absolute;

  }
  .el-button-group {
    display: flex;
  }

  .el-button {
    min-width: 15px;
  }

  /*.vue-draggable-resizable {*/
    /*top: 0px;*/
    /*left: 700px;*/
  /*}*/

  .fontPanel {
    position: absolute;
    top: -60px;
  }

</style>
