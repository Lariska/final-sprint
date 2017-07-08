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

import { HEADER_SECTION, NAV_BAR_SECTION, MAIN_SECTION, 
  FOOTER_SECTION, GALLERY_SECTION, DATE_SECTION, TABLE_SECTION } from '../constants/cmpName'
  export default {
    name: 'element-choice',
    data() {
      return {
        options: [{
          value: HEADER_SECTION,
          label: 'Header Section'
        },
        {
          value: NAV_BAR_SECTION,
          label: 'Nav Bar Section'
        }, 
        {
          value: MAIN_SECTION,
          label: 'Main Section',
        }, 
        {
          value: FOOTER_SECTION,
          label: 'Footer-Section'
        },
        {
          value: GALLERY_SECTION,
          label: 'Gallery Section',
        },
        {
          value: DATE_SECTION,
          label: 'Date Section',
        },
        {
          value: TABLE_SECTION,
          label: 'Table Section',
        }
        ],
        selectedOptions: [],
        selectedOptions2: []
      };
    },
    methods: {
      handleChange(value) {
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
