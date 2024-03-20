<script setup>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ref, onMounted, watch, toRaw } from 'vue';
const props = defineProps(['center', 'zoom', 'markers']);
let mapEl = ref(null);
let map;
onMounted(() => {
    map = L.map(mapEl.value).setView(props.center, props.zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    console.log(props.markers);
    for(const marker of props.markers){
        console.log(marker);
        L.marker(marker).addTo(map);
    }
    
});

watch(() => props.center, (newCenter) => {
    //map.panTo(newCenter);
    map.flyTo(newCenter);
});

</script>
<template>
    <div ref="mapEl"></div>
</template>

<style scoped>
div { 
    height: 600px; 
}
</style>