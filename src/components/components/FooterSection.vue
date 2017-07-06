<template>
  <section class="footer" @click="makeVisible">
    <toolbar class="toolbar" v-if="isVisible" :isVisible="isVisible"></toolbar>
    <div>
      <p>{{ footerSection.content.text }}</p>
    </div>
  </section>

</template>
<script>
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';

  export default {
    name: 'footer-section',
    components: {
      Toolbar,
      CloseBtn
    },
    data: function () {
      return {
        isVisible: false,
        footerSection: {
          id: null,
          type: 'footer1',
          content: {
            text: 'Copyrights 2017',
            color: '#2C3E50'
          },
          font: {
            size: '16px'
          },
          backgroundColor: '#CED3DC'
        }
      }
    },
    methods: {
      getFooter: function () {
        return this.footerSection
      },
      makeVisible: function () {
        this.isVisible = true
      }
    }
  }
</script>

<style scoped>
  .footer {
    background-color: #ccc;
    border: 1px solid #c1e2b3;
    height: 60px;
  }
</style>
