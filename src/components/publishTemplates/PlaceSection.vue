<template>
<section class="map">
  <gmap-map
    :center="getCenter"
    :zoom="7"
    map-type-id="terrain"
    style="width: 800px; height: 300px">

    <gmap-info-window
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      :content="infoContent"
      @domready="infoOpened"
    
      @closeclick="infoWinOpen=false">
      <!--  ^^@content_changed="infoChanged"^^-->
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
    },





    computed: {
      getMarkers(){
        return this.markers;
      },
      getCenter() {
        var that = this;
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            that.center = {lat: position.coords.latitude, lng: position.coords.longitude};
            return that.center;
          });
        }
        return this.center;
      }
    },
  }

</script>


<style scoped>
  .map {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

