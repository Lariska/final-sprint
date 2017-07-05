<template>
  <section>
    <nav class="header">
            <img class="logo" src="../../assets/wixer-logo.png" alt="Company name">
        <ul class="text">
            <!--<h2 v-on:click="textClick">Hello</h2>-->
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
                aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
                labore!
            </h4>
        </ul>
    </nav>
  </section>
</template>



<script>
    export default {
      name: 'header-section',
    }
  </script>



  <style scoped>
    .header{
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: lightblue;
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
  