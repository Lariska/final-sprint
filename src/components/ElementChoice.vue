<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-cascader
      placeholder="Choose element"
      expand-trigger="hover"
      :options="options"
      v-model="selectedOptions2"
      @change="handleChange"
      >
    </el-cascader>
  </div>
</template>

<script>

import { HEADER_SECTION, NAV_BAR_SECTION, MAIN_SECTION, FOOTER_SECTION } from '../constants/cmpName'
  export default {
    name: 'element-choice',
    data() {
      return {
        options: [{
          value: 'header',
          label: 'Header',
            children: [{
              value: HEADER_SECTION,
              label: 'Header Section'
          }]
      },
      {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: NAV_BAR_SECTION,
              label: 'Nav Bar Section'
            }]
        }, {
          value: 'main',
          label: 'Main',
          children: [{
            value: MAIN_SECTION,
            label: 'Main Section',
            }]
          }, {
            value: 'footer',
            label: 'Footer',
            children: [{
              value: FOOTER_SECTION,
              label: 'Footer-Section'
            }]
        }],
        selectedOptions: [],
        selectedOptions2: []
      };
    },
    methods: {
      handleChange(value) {
        console.log("HEADER:"+ HEADER_SECTION);
        this.$emit('selectedElement',value[value.length -1]);
      }
    }
  };
</script>
<style scoped>
.block{
  margin-top: 10px;
}
</style>
