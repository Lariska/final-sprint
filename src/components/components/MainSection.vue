<template>
  <section @click="toggleVisible">
    <toolbar
      class="toolbar"
      v-if="isVisible"
      @closePanel="toggleVisible"
      @changeFont="toggleChangeFont"
    ></toolbar>
    <div class="container">
      <h2>{{ bodySection.content.text }}</h2>
    </div>
  </section>
</template>
<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  export default {
    name: 'main-section',
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {
      return {
        isVisible: false,
        bodySection: {
          id: null,
          type: 'body1',
          title: {
            text: 'Hello',
            color: '#2C3E50'
          },
          content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            color: '#2C3E50'
          },
          font: {
            size: '16px'
          },
          img: 'wixer-logo.png',
          backgroundColor: '#CED3DC',
          color: '#2C3E50'
        },
      }
    },
    methods: {
      toggleVisible: function () {
        this.isVisible = !this.isVisible;
        console.log(this.isVisible)
      },
      toggleChangeFont: function () {

      }
    }
  }
</script>
<style scoped>

  section:hover {

  }
  .container {
    background-color: #ccc;
    border: 1px solid #c1e2b3;
    height: 300px;
  }

  section .menu {
    display: flex;
    line-height: 60px;
    font-size: 26px;
    color: cornflowerblue;
  }
</style>


