<template>
  <section class="footer">
    <div>
      <p>{{ footerSection.content.text }}</p>
    </div>
  </section>

</template>
<script>
import { ADD_COMPONENT } from '../../store/Efix.store'
  export default {
    name: 'footer-section',
    data: function () {
      return {
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
    // mounted() {
    //   this.$store.commit(ADD_COMPONENT, this.getFooter());
    //   console.log("mounted");
    // },
    methods: {
      getFooter: function () {
        return this.footerSection
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
