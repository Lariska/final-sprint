<template>
  <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="3">
    <slide v-for="(img, i) in imgs" :key="i" :index="i">
         <img :src="img">
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
                        'https://s-media-cache-ak0.pinimg.com/736x/6d/9d/cd/6d9dcdc041b86f1d7fe2d8224b00bfc8.jpg',
                        'http://images.slideplayer.com/18/6129704/slides/slide_2.jpg',
                        'http://www.os-templates.com/website-templates/template-demos/free-website-templates/kiraric/thumb.jpg',
                        'http://vectorilla.com/wp-content/uploads/2010/01/vector_website_template4.jpg',
                        'http://www.fotolip.com/wp-content/uploads/2016/05/Web-Templates-6.png'
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




