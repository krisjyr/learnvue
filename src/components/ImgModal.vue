<script setup>
import Modal from './Modal.vue';
defineProps(['open', 'src', 'alt']);
</script>

<template>

    <modal :open="open" @close="$emit('close')">
        <p class="image is-4by3">
            <img :src="src" :alt="alt">
        </p>
    </modal>
       
</template>