<template>
    <div class="container">
        <div class="columns is-multiline">
            <div v-for="char in chars" :key="char.id" class="column is-one-quarter">
                <CharacterCard :character="char"></CharacterCard>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let info = ref({});
let chars = ref([]);
let page = ref(1);
getCharacters(page.value);

async function getCharacters(pageNumber) {
    let response = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page: pageNumber
        }
    });
    page.value=pageNumber;
    info.value = response.data.info;
    chars.value.push(...response.data.results);
}

async function next(){
    getCharacters(++page.value);
}

onMounted(()=>{
    document.addEventListener('scroll', () => {
        if(window.scrollY+window.innerHeight > document.body.clientHeight-200){
            next();
        }
    });
});
</script>