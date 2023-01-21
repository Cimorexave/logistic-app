<script lang="ts" setup>
import createRandomMarkers from '~~/constants/map.points';
definePageMeta({
    // middleware: ['auth']
})
const points = ref<Array<number[]>>()

let initialView: number[] = [0,0]
const L: any = useNuxtApp().$L
let map: any
let tileLayer: unknown
// leaflet is a client side plugin
// so it can only be used after mounted
onMounted(() => {
  map = L.map('map').setView(initialView, 4)
  tileLayer = L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    attribution: '',
    referrerPolicy: false,
  }).addTo(map)
  const markers = L.markerClusterGroup()
  points.value?.forEach((point: number[]) => {
    const newMarker = new L.marker(point, {})
    markers.addLayer(newMarker).addTo(map)
  })
  map.on('click', (e: unknown) => useLog(e))
})

watch(points, () => {
  let i: number = 1
  points.value?.forEach((point: number[]) => {
    initialView = [(initialView[0] + point[0]) / i, (initialView[1] + point[1]) / i]
    i++
  })
  useLog(initialView)
  if (!map) map = L.map('map').setView(initialView, 4)
  tileLayer = L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    attribution: '',
    referrerPolicy: false,
  }).addTo(map)
  const markers = L.markerClusterGroup()
  points.value?.forEach((point: number[]) => {
    const newMarker = new L.marker(point, {}).bindPopup(L.popup().setContent(`cord: ${point}`))
    markers.addLayer(newMarker).addTo(map)
  })
})
</script>
<template>
<div id="map" class="min-h-screen min-w-[100vw] z-50 fixed">map</div>
<button @click="points = createRandomMarkers(1000)" class="rounded absolute bottom-5 left-5 z-50 w-max h-max shadow drop-shadow bg-green-800 text-white px-7 py-2">Generate Random Points</button>
</template>