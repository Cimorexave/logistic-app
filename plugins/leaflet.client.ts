import L from 'leaflet'
import * as markercluster from 'leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw'
import '@/assets/sass/leaflet.draw.scss'
const mCluster = markercluster
export default defineNuxtPlugin((nuxtApp) => nuxtApp.provide('L', L))
