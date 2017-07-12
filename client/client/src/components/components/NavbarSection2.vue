<template>
  <section>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Link1</el-menu-item>
      <el-menu-item index="2">Link2</el-menu-item>
      <el-menu-item index="3">Link3</el-menu-item>
    </el-menu>
  </section>
</template>

<script>
  import {NAV_BAR_SECTION2} from '../../constants/cmpName'

  export default {
    name: NAV_BAR_SECTION2,
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
