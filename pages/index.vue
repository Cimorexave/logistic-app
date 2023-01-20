<script lang="ts" setup>
definePageMeta({
    middleware: ['auth']
})
const L: any = useNuxtApp().$L
let map: unknown
let tileLayer: unknown
// leaflet is a client side plugin
// so it can only be used after mounted
onMounted(() => {
  let initialView: number[] = [35.706377, 51.382385]
  map = L.map('map').setView(initialView, 11)
  tileLayer = L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    attribution: '',
    referrerPolicy: false,
  }).addTo(map)
  const markers = L.markerClusterGroup()
})
</script>
<template>
<div id="map"></div>
</template>