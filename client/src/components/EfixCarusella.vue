<template>
  <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="3">
    <slide v-for="(img, i) in imgs" :key="i" :index="i">
        <img :src="img">
         <!-- <img :src=img> -->
    </slide>
  </carousel-3d>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d'
export default {
    name: 'efix-carusella',
    data() {
       return {slides: 7,
                imgs: [
                        '/static/1.png',
                        '/static/2.png',
                        '/static/3.png',
                        '/static/4.png'
                    ]}
    },
    components: {
        'carousel-3d': Carousel3d,
        'slide': Slide
    },
    created(){
        console.log('work')
    }
}
</script>

<style>
    .carousel-3d-slide {
        padding: 0
    }
    
    .title { font-size: 22px; }
</style>




