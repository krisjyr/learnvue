<script setup>
import LeafletMap from '../components/LeafletMap.vue';
import {ref, reactive} from 'vue';
navigator.geolocation.getCurrentPosition(success, error);
let coords = ref(null);
function success(position){
    console.log(position);
    coords.value = [position.coords.latitude, position.coords.longitude];
}
function error(){
    console.log('error');
}
let markers = reactive([
    [59.11581, 24.64622],
    [59.21581, 24.54622],
    [59.31581, 24.44622],
    [59.41581, 24.34622]
]);
</script>

<template>
    <button class="button" @click="coords=[59.41581, 24.64622]">Go to Õika</button>
    <LeafletMap v-if="coords" :center="coords" :zoom="19" :markers="markers"></LeafletMap>
    <LeafletMap :center="[59.41581, 24.64622]" :zoom="15" :markers="[]"></LeafletMap>
</template>

<style scoped>

</style>