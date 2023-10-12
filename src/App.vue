<script setup>
import { ref } from "vue";
const message = ref("Hello Vue");
</script>

<template>
<button v-on:click="message ='neeger' ">Click me</button>
<h1>{{ message }}</h1>
</template>