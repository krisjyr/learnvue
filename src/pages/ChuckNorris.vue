<template>
    <div class="container">
        <div class="content">
            <h2>{{ joke }}</h2>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
let joke = ref('');
// axios.get('https://api.chucknorris.io/jokes/random').then(response => {
//     console.log(response.data);
//     joke.value = response.data.value;
// });
let response = await axios.get('https://api.chucknorris.io/jokes/random');
joke.value = response.data.value;
</script>