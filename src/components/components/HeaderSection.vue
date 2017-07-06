<template>
  <section @click="makeVisible">
    <toolbar
      class="toolbar"
      v-if="isVisible"
      :isVisible="isVisible"
      @changeFont="changeFont"
    >
    </toolbar>
    <nav class="header">
      <img class="logo" :src="'../../../static/' + paramsForRender.data.img" alt="">
      <ul class="text">

        <h2 @click="textClick">{{ paramsForRender.data.title.text }}</h2>
        <p>{{ paramsForRender.data.contentText.text }}</p>

      </ul>
      <close-btn class="close-btn"></close-btn>
    </nav>
  </section>
</template>


<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  export default {
    name: 'header-section',
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {

      return {
        isVisible: false,

      }
    },
    methods: {

      makeVisible: function () {
        this.isVisible = true
      },
      changeFont: function () {

      }
    },
  }
</script>


<style scoped>
  .header {
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #CED3DC;
  }

  .logo {
    margin-left: 10px;
  }

  .text {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .close-btn {
    display: flex;
    justify-content: flex-end;
    /*position: absolute;*/
  }
  
</style>




