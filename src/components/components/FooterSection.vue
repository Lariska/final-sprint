<template>
  <section class="footer" @click="makeVisible"
  :style="paramsForRender.data.style">
    <toolbar class="toolbar" v-if="isVisible" :isVisible="isVisible"></toolbar>
      <p :style="paramsForRender.data.content.style">{{ paramsForRender.data.content.text }}</p>
  </section>

</template>
<script>
import { ADD_COMPONENT } from '../../store/Efix.store'
import { FOOTER_SECTION } from '../../constants/cmpName'
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';

  export default {
    name: FOOTER_SECTION,
    props: ['paramsForRender'],
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
    // mounted() {
    //   this.$store.commit(ADD_COMPONENT, this.getFooter());
    //   console.log("mounted");
    // },
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
