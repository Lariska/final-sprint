<template>
    <section>

        <efix-list></efix-list>
    </section>
</template>
<script>
import EfixList from './EfixList';

export default {
  name: 'efix-app',
  components: {
      EfixList,
    }
}
</script>

<style>
  body {

  }
.editableTxt{
    border: 1px solid blue;
  }
</style>
