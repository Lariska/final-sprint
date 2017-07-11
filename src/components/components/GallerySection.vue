<template>
  <section>
    <div class="gallery" id="gallery">
      <div v-for="(i, index) in getImages" :key="i" @mouseover="showDelete" :id="index">
        <img v-img:group :src="i">
        <i @click="dialogVisible = true" v-if="getActiveImage==index" class="el-icon-edit"></i>
        <i @click="deleteActiveImage" v-if="getActiveImage==index" class="el-icon-delete"></i>
      </div>
    </div>
    <el-dialog
      title="Upload new picture"
      :visible.sync="dialogVisible"
      size="tiny">
            <span>
                <dropzone id="myDropzone" url="https://httpbin.org/post" :max-number-of-files='1'
                          @vdropzone-success="saveImage">
                    <!-- Optional parameters if any! -->
                    <input type="hidden" name="token" value="xxx">
                </dropzone>
            </span>
      <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
    </el-dialog>
    <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
  </section>
</template>
<script>
  import {GALLERY_SECTION} from '../../constants/cmpName'
  import Dropzone from 'vue2-dropzone'
  import CloseBtn from '../editor/CloseBtn';

  export default {
    name: GALLERY_SECTION,
    props: ['paramsForRender'],
    components: {
      Dropzone, CloseBtn
    },
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      showDelete: function () {
        this.$store.dispatch("setActiveImage", [event.target.parentElement.id, this.$vnode.data.attrs.id]);
      },
      deleteActiveImage: function () {
        this.$store.dispatch("deleteActiveImage", {id: this.$vnode.data.attrs.id});
      },
      saveImage: function (file) {
        this.$store.dispatch("setImage", [file.dataURL, this.$vnode.data.attrs.id]);
      }
    },
    computed: {
        getActiveImage: function () {
            var id = this.$vnode.data.attrs.id;
            return this.$store.getters.components.filter(function(data){return data.id==id})[0].data.activeImage;
        },
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
    overflow-x: auto;
  }

  .gallery div {
    position: relative;
  }

  img {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    padding: 5px;
  }

  .el-icon-edit {
    position: absolute;
    color: white;
    font-size: 20px;
    top: 15px;
    right: 40px;
    cursor: pointer;
  }

  .el-icon-delete {
    position: absolute;
    color: white;
    font-size: 25px;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>
