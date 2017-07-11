<template>
  <section v-if="myPanelVisible">
    <vue-draggable-resizable
      class="editor"
      :minw="380"
      :h="50"
      :resizable="false"
      :parent="false">

      <div class="fontPanel" @click.stop="">
        <el-input-number
          v-if="fontPanelVisible"
          v-model="defaultFontSize"
          @change="fontSizeChange"
          :min="1" :max="60"
          size="small">
        </el-input-number>
      </div>

      <image-popup
        v-if="imagePopupVisible"
        @selectImg="changeImg"
      >

      </image-popup>

      <el-button-group>
        <!--<el-button type="primary" icon="delete" size="small"></el-button>-->
        <el-tooltip class="item" effect="dark" content="Edit" placement="top">
          <el-button type="primary" icon="edit" size="small" @click.stop="toggleContentEditable"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Change image" placement="top">
          <el-button type="primary" icon="picture" size="small"
                     @click.stop="imagePopupVisible = !imagePopupVisible"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Align left" placement="top">
          <el-button type="primary" size="small" @click.stop="alignChange('left')">
            <i class="fa fa-align-left" aria-hidden="true"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Align center" placement="top">
          <el-button type="primary" size="small" @click.stop="alignChange('center')">
            <i class="fa fa-align-center" aria-hidden="true"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Align right" placement="top">
          <el-button type="primary" size="small" @click.stop="alignChange('right')">
            <i class="fa fa-align-right" aria-hidden="true"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Font size" placement="top">
          <el-button type="primary" size="small" @click.stop="toggleFontPanel">
            <i class="fa fa-font" aria-hidden="true"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Text Color" placement="top">
          <el-color-picker v-model="color" @change="colorChange" class="clrPic"></el-color-picker>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Background Color" placement="top">
          <el-color-picker v-model="bgcolor" @change="bgColorChange" class="clrPic"></el-color-picker>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Close panel" placement="top">
          <el-button type="success" icon="circle-cross" @click.stop="closePanel" size="small"></el-button>
        </el-tooltip>
        <el-button type="gray" icon="more" size="small"></el-button>

      </el-button-group>

    </vue-draggable-resizable>
  </section>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'
  import ImagePopup from './ImagePopup'

  export default {
    name: 'tool-bar',
    props: ['panelVisible', 'paramsForRender'],
    components: { ImagePopup },
    data() {
      return {
        color: '#ddd',
        bgcolor: 'rgb(44, 62, 80)',
        defaultFontSize: +(this.paramsForRender.data.style.fontSize).slice(0, -2),
        myPanelVisible: this.panelVisible,
        fontPanelVisible: false,
        imagePopupVisible: false,
        images: [
          {url: 'static/balance.png'},
          {url: 'static/nike.png'},
          {url: 'static/puma.png'},
          {url: 'static/logo.png'}
        ]
      }
    },
    methods: {
      closePanel: function () {
        this.myPanelVisible = false;
        this.$emit('closePanel')
      },
      toggleFontPanel() {
        this.fontPanelVisible = !this.fontPanelVisible;
      },
      fontSizeChange(value) {
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data.style.fontSize = value + 'px';
        this.$store.dispatch('editCmp', { cmp: cmpEdited} );
      },
      colorChange(value) {
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data.style.color = value;
        this.$store.dispatch('editCmp', { cmp: cmpEdited} );
      },
      bgColorChange(value) {
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data.style["background-color"] = value;
        this.$store.dispatch('editCmp', { cmp: cmpEdited} );
      },
      alignChange(value) {
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data.style['text-align'] = value;
        this.$store.dispatch('editCmp', { cmp: cmpEdited} );
      },
      toggleContentEditable(){
        console.log('toggling content editable for the component.');
        this.$emit('editContent');
      },
      changeImg(value) {
        const cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data.content.img = this.images[value].url;
        this.$store.dispatch('editCmp', { cmp: cmpEdited} );
      }
    }
  }
</script>

<style scoped>
  .el-button-group{
    padding: 10px;
    background: rgba(111, 111, 197, 0.58);
    border-radius: 5px;
  }

  section {
    position: absolute;
  }

  .el-button-group {
    display: flex;
  }

  .el-button {
    /*min-width: 15px;*/
  }

  .el-color-picker {
    cursor: pointer;
  }

  .fontPanel {
    position: absolute;
    top: -50px;
    padding: 5px;
    border-radius: 5px;
    background: rgba(111, 111, 197, 0.58);
  }

</style>
