<template>
  <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="3">
    <slide v-for="(img, i) in imgs" :key="i" :index="i">
         <img :src="img">
      <!--<span class="title">You know</span>
      <p>You know, being a test pilot isn't always the healthiest business in the world.</p>-->
    </slide>
  </carousel-3d>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d'
export default {
    name: 'efix-carusella',
    data() {
       return {slides: 7,
                imgs: ['https://s-media-cache-ak0.pinimg.com/736x/6d/9d/cd/6d9dcdc041b86f1d7fe2d8224b00bfc8.jpg','https://static-wix-blog.wix.com/blog/wp-content/uploads/2016/03/07101109/templates-new-featured.png','https://cdn.shivarweb.com/wp-content/uploads/2015/06/Wix-Ads.png', 'http://static.wixstatic.com/media/e4935b4f5e5d45e3a95912f74ed90d31.jpg','http://images.slideplayer.com/18/6129704/slides/slide_2.jpg']}
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
        padding: 10px;
    }
    
    .title { font-size: 22px; }
</style>




