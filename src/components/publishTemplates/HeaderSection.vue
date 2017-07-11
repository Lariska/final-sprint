<template>
  <section class="header" :style="paramsForRender.data.style">
    <div class="head">
      <img class="logo" :src="'../../../' + paramsForRender.data.content.img" alt="">
      <div class="text">
        <h2
        :style="paramsForRender.data.title.style">
          {{ paramsForRender.data.title.text }}
        </h2>
        <p
        :style="paramsForRender.data.style">
          {{ paramsForRender.data.content.text }}
        </p>
      </div>
    </div>
  </section>
</template>


<script>
  import {HEADER_SECTION} from '../../constants/cmpName'

  export default {
    name: HEADER_SECTION,
    props: ['paramsForRender'],
  }
</script>


<style scoped>
  section {
    position: relative;
  }

  .header {
    background-color: #CED3DC;
    padding: 15px 0;
  }

  img {
    margin-right: 10%;
  }

  .header h2, p {
    padding: 0;
    margin: 0;
  }

  .logo {
    width: 80px;
    height: 60px;
  }
  
  .head {
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>




