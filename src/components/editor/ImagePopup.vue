<template>
  <section>
    <el-card class="box-card">
      <div v-for="(item,idx) in images" :key="item" class="text item">
        <a href="" @click.prevent="selectImg(idx)"><img :src="item.url" alt=""></a>
      </div>
    </el-card>
  </section>
</template>

<script>
  export default {
    name: 'image-popup',
    data() {
      return {
          images: [
            {url: 'static/balance.png'},
            {url: 'static/nike.png'},
            {url: 'static/puma.png'},
            {url: 'static/logo.png'}
          ]
      }
    },
    methods: {
        selectImg(imgId) {
            this.$emit('selectImg',imgId)
        }
    }
  };
</script>
<style scoped>
  section {
    /*width: 300px;*/
    position: absolute;
    height: 200px;
    top: -250px;
    overflow-y: scroll;
    border-radius: 5px;
    cursor: default;
    box-sizing: content-box;
    /*display: flex;*/
    /*justify-content: center;*/
  }

  .item {
    width: 80px;
    height: auto;
  }
</style>
