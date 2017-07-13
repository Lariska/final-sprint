<template>
  <section>
    <el-card class="box-card">
      <div v-for="(item,idx) in data" :key="item" class="text item">
        <a href="" @click.prevent="selectImg(idx)"><img :src="item.url" alt=""></a>
      </div>
    </el-card>
  </section>
</template>

<script>
  export default {
    name: 'image-popup',
    props: ['dataType'],
    data() {
      return {
          data: []
      }
    },
    created: function () {
      console.log(this.dataType);
      this.data = this.$store.getters[this.dataType];
      console.log(this.data)
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
