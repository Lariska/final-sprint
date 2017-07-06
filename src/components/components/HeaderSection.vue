<template>
  <section>
    <nav class="header">
            <img class="logo" :src="'../../../static/'+headerSection.img" alt="">
        <ul class="text">
            <h2 @click="textClick">{{ headerSection.title.text }}</h2>
            <p>{{ headerSection.contentText.text }}</p>
        </ul>
    </nav>
  </section>
</template>



<script>
    import $ from 'jquery';
    export default {
      name: 'header-section',
      data: function () {
        return {
            headerSection : {
              id: null,
              type: this.name,
              title: {
                text: 'Hello!',
                color: '#2C3E50'
              },
              contentText: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                color: '#2C3E50'
              },
              font: {
                size: '16px'
              },
              img: 'wixer-logo.png',
              backgroundColor: '#CED3DC',
              color: '#2C3E50'
            }
        }
      },
      created: {
         getHeader: function () {
           return this.headerSection
         }
      },
      methods: {
        textClick: function (event) {
            var el = event.target;
            var text = event.target.textContent;
            $(el).text("");
            $(el).append("<input value='" + text + "'/>");
            // $(el).clear();
        }
      },
    }
  </script>



  <style scoped>
    .header{
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: #CED3DC;
    }
    .logo{
        margin-left: 10px;
    }
    .text{
        display: flex;
        align-content: center;
        justify-content: center;
    }
  </style>
