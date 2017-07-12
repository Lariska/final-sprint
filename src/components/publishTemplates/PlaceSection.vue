<template>
  <section class="envlope">
    <section class="map">
      <gmap-map
        :center="getCenter"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 300px">

        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          :content="infoContent"
          @domready="infoOpened">
        </gmap-info-window>

        <gmap-marker
          :key="index"
          v-for="(m, index) in getMarkers"
          :clickable="true"
          :position="m.position"
          @click="toggleInfoWindow(m,index)">
        </gmap-marker>
      </gmap-map>
    </section>
  </section>
</template>

<script>
  import {PLACE_SECTION} from '../../constants/cmpName'

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
    methods: {
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
    },
    computed: {
      getMarkers() {
        return this.paramsForRender.data.markers;
      },
      getCenter() {
        var that = this;
        let cmpEdited = JSON.parse(JSON.stringify(this.paramsForRender));
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            cmpEdited.data.center = {lat: position.coords.latitude, lng: position.coords.longitude};
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
  .envlope{
    
  }
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

