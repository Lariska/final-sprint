<template>
  <section class="footer">
    <div>
      <h2>This is footer</h2>
    </div>
  </section>

</template>
<script>
  import EditorCmp from '../EditorCmp.vue'
  export default {
    name: 'footer-section',
    components: {
      EditorCmp
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
