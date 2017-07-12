<template>
  <section>
    <el-table
      :data="paramsForRender.data"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="120">
      </el-table-column>
      <el-table-column
        prop="state"
        label="State"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="City"
        width="120">
      </el-table-column>
    </el-table>
  </section>
</template>
<script>
  import {TABLE_SECTION} from '../../constants/cmpName'

  export default {
    name: TABLE_SECTION,
    props: ['paramsForRender'],
  }
</script>
<style>
</style>
