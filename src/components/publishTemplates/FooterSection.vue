<template>
  <section class="footer"
           :style="paramsForRender.data.style"
  >
    <div class="container">
      <div class="contacts">
        <span class="email">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
         <p
          :style="paramsForRender.data.style"
          >{{ paramsForRender.data.content.text.email }}</p>
        </span>
        <br><br>
        <span class="tel">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <p
          :style="paramsForRender.data.style"
          >{{ paramsForRender.data.content.text.phone }}</p>
        </span>
      </div>
      <div class="logo">
        <img :src="'../../../' + paramsForRender.data.content.img" alt="">
      </div>
      <div class="copyright">
      <p
        :style="paramsForRender.data.style"
        ><i class="fa fa-copyright" aria-hidden="true"></i>{{ paramsForRender.data.content.text.copyright }}</p>
      </div>
    </div>
  </section>

</template>
<script>
  import {FOOTER_SECTION} from '../../constants/cmpName';

  export default {
    name: FOOTER_SECTION,
    props: ['paramsForRender'],
  }
</script>

<style scoped>
  /*section {
    position: relative;
    padding: 20px;
  }*/

  /*.footer {
    background-color: #ccc;
    height: 60px;
  }*/

  /*.container{
    display: flex;
    justify-content: center;
    align-items: center;
  }*/

  /*.copyright, .logo, .contacts{
    width: 33%;
  }

  i {
    margin-right: 3px;
  }

  span {
    margin-right: 10px;
  }

  .email {
    margin-bottom: 10px;
  }*/
    section {
    position: relative;
    padding: 20px;
  }

  .footer {
    background-color: #ccc;
    border: 1px solid #c1e2b3;
    min-height: 60px;

  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .copyright, .logo, .contacts{
    width: 33%;
  }

  i {
    margin-right: 3px;
  }

  span {
    margin-right: 10px;
  }

  .email {
    margin-bottom: 10px;
  }
</style>
