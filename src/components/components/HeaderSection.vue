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
      <img class="logo" :src="'../../../static/' + headerSection.img" alt="">
      <ul class="text">
        <h2>{{ headerSection.title.text }}</h2>
        <p>{{ headerSection.contentText.text }}</p>
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
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {
      return {
        isVisible: false,
        headerSection: {
          id: null,
          type: this.name,
          title: {
            text: 'Hello!',
            color: '#2C3E50'
          },
          contentText: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            color: '#2C3E50'
          },
          font: {
            size: '16px'
          },
          img: 'wixer-logo.png',
          backgroundColor: '#CED3DC',
          color: '#2C3E50'
        }
      }
    },
    methods: {
      getHeader: function () {
        return this.headerSection
      },
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

  /*.toolbar{
      display: flex;
      margin-top:auto;
  }*/
</style>




