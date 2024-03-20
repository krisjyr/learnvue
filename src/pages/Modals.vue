<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
import ImgModal from '../components/ImgModal.vue';
let modalOpen = ref(false);
let modal2Open = ref(false);
let modal3Open = ref(false);
</script>

<template>
    <button class="button is-primary" @click="modalOpen = true">Open Modal</button>
    <button class="button is-primary" @click="modal2Open = true">Open Modal2</button>
    <button class="button is-primary" @click="modal3Open = true">Open Modal3</button>
    <modal :open="modalOpen" @close="modalOpen = false">
        <p class="image is-4by3">
            <img src="https://picsum.photos/seed/1/1280/960" alt="">
        </p>
    </modal>
    <modal :open="modal2Open" @close="modal2Open = false">
        <p class="image is-4by3">
            <img src="https://picsum.photos/seed/2/1280/960" alt="">
        </p>
    </modal>
    <img-modal 
    :open="modal3Open"
    @close="modal3Open = false"
    src="https://picsum.photos/seed/3/1280/960" 
    alt="blablabaasd"></img-modal>
</template>