<template>
  <section>
    <div class="gallery" id="gallery">
      <div v-for="(i, index) in getImages" :key="i" :id="index">
        <img v-img:group :src="i">
        <!--<i @click="dialogVisible = true" v-if="getActiveImage==index" class="el-icon-edit"></i>-->
        <!--<i @click="deleteActiveImage" v-if="getActiveImage==index" class="el-icon-delete"></i>-->
      </div>
    </div>
  </section>
</template>
<script>
  import {GALLERY_SECTION} from '../../constants/cmpName'
  import Dropzone from 'vue2-dropzone'

  export default {
    name: GALLERY_SECTION,
    props: ['paramsForRender'],
    components: {
      Dropzone
    },
    data() {
      return {
        // dialogVisible: false
      };
    },
    computed: {
        getImages: function () {
            var id = this.$vnode.data.attrs.id;
            return this.$store.getters.components.filter(function(data){return data.id==id})[0].data.images;
        }
    }
  }
</script>

<style scoped>
  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gallery div {
    position: relative;
  }

  img {
    display: flex;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }
</style>
