<template>
  <GoogleMap
    ref="map"
    :api-key="mapAPIKey"
    :style="` width: ${width}; height: ${height}; `"
    :center="{
      lat: Number(addresslat ? addresslat : 0),
      lng: Number(addresslong ? addresslong : 0),
    }"
    :zoom="parseInt(zoom)"
  >
    <Marker
      :options="{
        position: {
          lat: Number(addresslat ? addresslat : 0),
          lng: Number(addresslong ? addresslong : 0),
        },
      }"
    />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map"
export default {
  name: "Map",
  components: {
    GoogleMap,
    Marker,
  },
  props: {
    addresslong: {
      default: 0,
    },
    addresslat: {
      default: 0,
    },
    width: {
      default: "100%",
    },
    height: {
      default: "300px",
    },
    zoom:{
      default:16,
    }
  },
  computed: {
    mapAPIKey: {
      get() {
        return this.$store.getters["addresslookup/getMapsAPIKey"]
      },
    },
  },
}
</script>
