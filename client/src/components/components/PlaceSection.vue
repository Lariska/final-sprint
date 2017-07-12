<template>
  <section>
    <section class="map">
      <gmap-map
        :center="getCenter"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 300px"
        @rightclick="addMarker">

        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          :content="infoContent"
          @domready="infoOpened"
          @content_changed="infoChanged"
          @closeclick="infoWinOpen=false">
        </gmap-info-window>

        <gmap-marker
          :key="index"
          v-for="(m, index) in this.paramsForRender.data.markers"
          :clickable="true"
          :position="m.position"
          @click="toggleInfoWindow(m,index)">
        </gmap-marker>
      </gmap-map>
    </section>
    <div class="delete">
      <el-button type="danger" @click="deleteMarker">Delete</el-button>
    </div>
    <div class="instruction">
      <el-collapse>
        <el-collapse-item title="Instruction" name="1">
            <h3>
               1) Right click on the map to mark some place.
            </h3>
            <h3>
               2) Click on the tooltip to add your name.
            </h3>
            <h3>
               3) Click Enter to save the name.
            </h3>
            <h3>
              4) In order to delete a marker, click on it and then on delete button.
            </h3>
        </el-collapse-item>
      </el-collapse>
    </div>
    <close-btn class="closeBtn" :cmp="paramsForRender"></close-btn>
  </section>
</template>

<script>
  import {PLACE_SECTION} from '../../constants/cmpName'
  import CloseBtn from '../editor/CloseBtn';

  export default {
    name: PLACE_SECTION,
    props: ['paramsForRender'],
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [],
        infoContent: '',
        infoOptions: {pixelOffset: {width: 0, height: -35}},
        infoWinOpen: false,
        infoWindowPos: {lat: 0, lng: 0}
      }
    },
    components: {CloseBtn},
    methods: {
      addMarker(event) {
        var marker = {
          position: {lat: event.latLng.lat(), lng: event.latLng.lng()},
          infoText: 'Add your place name here'
        }
        let cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        cmpEdited.data.markers.push(marker);
        this.$store.dispatch('editCmp', { 'cmp': cmpEdited} );
        // this.$http.post('/add_marker/', marker).then(response => {});
      },

      hello(){
        this.$router.push({name: 'hello'});
      },

      toggleInfoWindow (marker, index) {
        let cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        this.center = cmpEdited.data.center = marker.position;
        this.infoWindowPos = cmpEdited.data.infoWindowPos = marker.position;
        this.infoContent = cmpEdited.data.infoContent = marker.infoText;

        //check if its the same marker that was selected if yes toggle
        if (cmpEdited.data.currentMidx == index) {
          this.infoWinOpen = cmpEdited.data.infoWinOpen = !cmpEdited.data.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = cmpEdited.data.infoWinOpen = true;
          this.currentMidx = cmpEdited.data.currentMidx = index;
        }
        this.$store.dispatch('editCmp', { 'cmp': cmpEdited} );
      },

      infoOpened (event) {
        var that = this;
        this.$el.querySelector(".gm-style-iw").addEventListener("click", function (ev) {
          if (ev.target.name != "") {
            var element = ev.target;
            var text = element.textContent;
            var input = document.createElement("input");
            input.setAttribute("value", text);
            input.addEventListener("keyup", function (event) {
              event.preventDefault();
              if (event.keyCode == 13) {
                var inp = event.target
                that.infoContent = inp.value;
                inp.parentElement.removeChild(inp);
              }
            });
            if (element.parentElement) {
              element.parentElement.appendChild(input);
              element.parentElement.removeChild(element);
            }
            ev.target.removeEventListener("click", this);
          }
        })
      },

      infoChanged (event) {
        var info = this.$el.querySelector(".gm-style-iw");
        
        if (info) {
          var text = info.firstChild.textContent;
          let cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
          
          for (var i = 0; i < cmpEdited.data.markers.length; i++) {
            if (cmpEdited.data.markers[i].position.lat == cmpEdited.data.center.lat && cmpEdited.data.markers[i].position.lng == cmpEdited.data.center.lng) {
              // this.$http.put('/edit_marker/', {marker: this.markers[i], new_text: text}).then(response => {
              cmpEdited.data.markers[i].infoText = text;
              // });
              break;
            }
          }
          this.$store.dispatch('editCmp', { 'cmp': cmpEdited} );
        }
      },
  

      deleteMarker (event) {
        
        let cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        for (var i = 0; i < cmpEdited.data.markers.length; i++) {
          if (cmpEdited.data.markers[i].position.lat == cmpEdited.data.center.lat && cmpEdited.data.markers[i].position.lng == cmpEdited.data.center.lng) {
            // this.$http.delete('/delete_marker/', {body: this.markers[i]}).then(response => {
              cmpEdited.data.infoWinOpen = false;
              cmpEdited.data.markers.splice(i, 1);
            // });
            break;
          }
        }
        this.$store.dispatch('editCmp', { 'cmp': cmpEdited} );
      },

      // getMarkers() {
      //   return this.paramsForRender.data.markers;
      // },
      
    },
    computed: {
      getCenter() {
        var that = this;
        let cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            cmpEdited.data.center = {lat: position.coords.latitude, lng: position.coords.longitude};
            // console.log('Map get Center editCMP');
            that.$store.dispatch('editCmp', { 'cmp': cmpEdited} );
            return cmpEdited.data.center;
          });
        }
        return cmpEdited.data.center;
      }
    },
  }
</script>


<style scoped>
  .instruction, .delete {
    margin: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .map {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

