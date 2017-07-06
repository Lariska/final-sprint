<template>
  <section>
    <div class="container">
      <h2>{{ bodySection.content.text }}</h2>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'main-section',
    data: function () {
      return {
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
  }
</script>
<style scoped>
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


