<template>
    <section>
        <div class="gallery">
            <img 
                v-for="img in paramsForRender.data.imgs" 
                :key="img" 
                v-img:group :src="img.url">
        </div>
    </section>
</template>
<script>
import { GALLERY_SECTION } from '../../constants/cmpName'
export default {
    props: ['paramsForRender'],
    name: GALLERY_SECTION,
}
</script>

<style scoped>
    .gallery{
        display: flex;
        overflow-x:auto;
    }
    img{
        flex-shrink: 0;
        width: 200px;
        height: 300px;
        padding: 5px;
    }
</style>