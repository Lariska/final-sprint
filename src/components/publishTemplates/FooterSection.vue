<template>
  <section class="footer"
           :style="paramsForRender.data.style"
  >
    <div class="container">
      <p 
      :style="paramsForRender.data.style">
        {{ paramsForRender.data.content.text }}
      </p>
    </div>
  </section>

</template>
<script>
  import {FOOTER_SECTION} from '../../constants/cmpName';

  export default {
    name: FOOTER_SECTION,
    props: ['paramsForRender'],
  }
</script>

<style scoped>
  section {
    position: relative;
  }

  .footer {
    background-color: #ccc;
    border: 1px solid #c1e2b3;
    height: 60px;

  }
</style>
