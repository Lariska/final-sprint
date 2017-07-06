<template>
    <section>
        <div class="gallery">
            <img v-img:group src="https://unsplash.it/800/1200?image=1063">
            <img v-img:group src="https://unsplash.it/800/1200?image=1064">
            <img v-img:group src="https://unsplash.it/800/1200?image=1065">
            <img v-img:group src="https://unsplash.it/800/1200?image=1067">
        </div>
    </section>
</template>
<script>

export default {
    name: 'gallery-section',
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