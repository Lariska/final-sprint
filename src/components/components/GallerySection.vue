<template>
    <section>
        <div class="gallery" id="gallery">
            <div v-for="(i, index) in getImages" v-on:mouseover="showDelete" :id="index">
                <img v-img:group :src="i">
                <i v-on:click="deleteActiveImage" v-if="getActiveImage==index" class="el-icon-delete"></i>
            </div>
        </div>
    </section>
</template>
<script>
import { GALLERY_SECTION } from '../../constants/cmpName'
export default {
    name: GALLERY_SECTION,
    methods: {
        showDelete: function () {
            this.$store.dispatch("setActiveImage", event.target.parentElement.id);
        },
        deleteActiveImage: function() {
            this.$store.dispatch("deleteActiveImage");
        }
    },
    computed: {
        getActiveImage: function () {
            return this.$store.getters.components[0].data.activeImage;
        },
        getImages: function () {
            return this.$store.getters.components[0].data.images;
        }
    }
}
</script>

<style scoped>
    .gallery{
        display: flex;
        overflow-x:auto;
    }
    .gallery div {
        position: relative;
    }
    img{
        flex-shrink: 0;
        width: 200px;
        height: 300px;
        padding: 5px;
    }
    .el-icon-delete {
        position: absolute;
        color: white;
        font-size: 40px;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
</style>