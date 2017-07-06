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
  export default {
    name: 'element-choice',
    data() {
      return {
        options: [{
          value: 'header',
          label: 'Header',
            children: [{
              value: 'header-section',
              label: 'Header Section'
          }]
      },
      {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'nav-bar-section',
              label: 'Nav Bar Section'
            }]
        }, {
          value: 'main',
          label: 'Main',
          children: [{
            value: 'main-section',
            label: 'Main Section',
            }]
          }, {
            value: 'footer',
            label: 'Footer',
            children: [{
              value: 'footer-section',
              label: 'Footer-Section'
            }]
        }],
        selectedOptions: [],
        selectedOptions2: []
      };
    },
    methods: {
      handleChange(value) {
        // console.log(value[value.length -1]);
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
