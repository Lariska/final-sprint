<template>
  <section>
    <div class="container" :style="paramsForRender.data.style">
      <h2
      :style="paramsForRender.data.title.style">
        {{ paramsForRender.data.title.text }}</h2>
      <p :style="paramsForRender.data.content.style">{{ paramsForRender.data.content.text }}</p>
    </div>
  </section>
</template>
<script>
  import {MAIN_SECTION} from '../../constants/cmpName'
  export default {
    name: MAIN_SECTION,
    props: ['paramsForRender'],
  }
</script>
<style scoped>

  section {
    position: relative;
  }

  .container {
    position: relative;
    border: 1px solid #c1e2b3;
    height: 300px;
  }

</style>


