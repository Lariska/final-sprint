<template>
  <section>
    <div class="container" :style="paramsForRender.data.style">
      <div class="text-container">
        <div class="smaller-scope-text">
          <h2
          :style="paramsForRender.data.title.style">
            {{ paramsForRender.data.title.text }}</h2>
          <p :style="paramsForRender.data.content.style">{{ paramsForRender.data.content.text }}</p>
        </div>
      </div>
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
    height: 300px;
  }
  @media (max-width: 450px) {
    .container{
      display: flex;
      justify-content: center;
    }
    .text-container{
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .smaller-scope-text{
      width: 70%;
      display: flex;
      flex-direction: column;
    }
    .smaller-scope-text {
      margin-top: 0;
    }
  }

</style>


