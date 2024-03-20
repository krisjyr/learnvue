<template>
    <div class="container">
        <input type="range" min="10" max="300" step="1" v-model="radius" @input="draw()"><br>
        <canvas ref="mycanvas" height="600" width="800" @mousemove="hover"></canvas>
        <CanvasBox v-if="ctx" :ctx="ctx" :x="x" :y="y"></CanvasBox>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CanvasBox from '../components/CanvasBox.vue';
let mycanvas = ref(null);
let radius = ref(50);
let ctx = ref(null);
let x = ref(10);
let y = ref(10);
onMounted(()=> {
    console.log(mycanvas);
    ctx.value = mycanvas.value.getContext('2d');
    ctx.value.beginPath();
    ctx.value.arc(400, 300, radius.value, 0, 2 * Math.PI);
    ctx.value.stroke();
});
function draw() {
    ctx.value.reset();
    ctx.value.beginPath();
    ctx.value.arc(400, 300, radius.value, 0, 2 * Math.PI);
    ctx.value.stroke();
}

function hover(event){
    console.log(event);
    x.value=event.offsetX; 
    y.value=event.offsetY;
    console.log(x.value, y.value);
}
</script>

<style scoped>
    canvas {
        border: 1px solid black;
    }
    input {
        width: 100%;
    }
</style>