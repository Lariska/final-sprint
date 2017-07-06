<template>
  <section>
    <nav class="header">
            <img class="logo" src="../../assets/wixer-logo.png" alt="Company name">
        <ul class="text">
            <h2 v-on:click="textClick">Hello</h2>
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
                aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
                labore!
            </h4>
        </ul>
        <close-btn class = "close-btn"></close-btn>
    </nav>
    <toolbar class="toolbar"></toolbar>
  </section>
</template>



<script>
    import Toolbar from '../editor/Toolbar';
    import CloseBtn from '../editor/CloseBtn';
    import $ from 'jquery';
    export default {
    name: 'header-section',
    components: {
        Toolbar,
        CloseBtn
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
    .close-btn{
        display: flex;
        justify-content: flex-end;
        /*position: absolute;*/
    }
    /*.toolbar{
        display: flex;
        margin-top:auto;
    }*/
  </style>
  