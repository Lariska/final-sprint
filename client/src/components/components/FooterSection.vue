<template>
  <section class="footer"
           :style="paramsForRender.data.style"
  >

    <transition name="bounce">
    <toolbar
      class="toolbar"
      v-if="panelVisible"
      :panelVisible="panelVisible"
      @closePanel="closePanel"
      :paramsForRender="paramsForRender"
      @editContent = "makeContentEditable"
    ></toolbar>
    </transition>
    <div class="container">
      <edit-btn class="editBtn" @click.native="togglePanel" v-if="!panelVisible"></edit-btn>
      <!--<div>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </div>-->
      <div class="contacts">
        <span class="email">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <p
          v-if="isEditable"
          contenteditable ="true"
          @keyup="updateContent('email', 'elEmail')"
          ref="elEmail"
          class="editableTxt"
          :style="paramsForRender.data.style"
        >{{email}}</p>
        <p
          v-else
          contenteditable ="false"
          :style="paramsForRender.data.style"
          >{{ paramsForRender.data.content.text.email }}</p>
        </span>
        <br><br>
        <span class="tel">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <p
          v-if="isEditable"
          contenteditable ="true"
          @keyup="updateContent('phone', 'elPhone')"
          ref="elPhone"
          class="editableTxt"
          :style="paramsForRender.data.style"
        >{{phone}}</p>
        <p
          v-else
          contenteditable ="false"
          :style="paramsForRender.data.style"
          >{{ paramsForRender.data.content.text.phone }}</p>
        </span>
      </div>
      <div class="logo">
        <img :src="'../../../' + paramsForRender.data.content.img" alt="">
      </div>
      <div class="copyright">
        <p
          v-if="isEditable"
          contenteditable ="true"
          @keyup="updateContent('copyright', 'elCopyright')"
          ref="elCopyright"
          class="editableTxt"
          :style="paramsForRender.data.style"
        >{{copyright}}</p>
        <p
          v-else
          contenteditable ="false"
          :style="paramsForRender.data.style"
          ><i class="fa fa-copyright" aria-hidden="true"></i>{{ paramsForRender.data.content.text.copyright }}</p>
      </div>
      <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
    </div>
  </section>

</template>
<script>
  import {FOOTER_SECTION} from '../../constants/cmpName';
  import Toolbar from '../editor/Toolbar';
  import CloseBtn from '../editor/CloseBtn';
  import EditBtn from '../editor/EditBtn';

  export default {
    name: FOOTER_SECTION,
    props: ['paramsForRender'],
    components: {
      Toolbar,
      CloseBtn,
      EditBtn
    },
    data: function () {
      return {
        panelVisible: false,
        isEditable:false,
        copyright:null,
        email:null,
        phone:null
      }
    },
    methods: {
      makeContentEditable(){
        this.isEditable = !this.isEditable;
        this.copyright = this.paramsForRender.data.content.text.copyright;
         this.email = this.paramsForRender.data.content.text.email;
          this.phone = this.paramsForRender.data.content.text.phone;
      },
      togglePanel: function () {
        if (!this.panelVisible) this.panelVisible = true;
      },
      closePanel() {
        this.panelVisible = false;
      },
      updateContent(context,ref){
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        console.log(cmpEdited.data.text);
        cmpEdited.data.content.text[context] = this.$refs[ref].innerText;
        this.$store.dispatch('editCmp', { cmp: cmpEdited} );
      },
    }
  }
</script>

<style scoped>
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

  .closeBtn {
    position: absolute;
    font-size: 24px;
    top: 0;
    right: 0;
  }
  .editableTxt{
    border: 1px solid blue;
  }
  .editBtn {
    position: absolute;
    top: 0;
    left: 0;
  }

  .toolbar {
    position: absolute;
    bottom: 0;
    left: 60px;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
