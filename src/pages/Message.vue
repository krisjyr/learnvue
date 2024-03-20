<script setup>
import { reactive, ref } from 'vue';
import Message from "../components/Message.vue"
const text = ref('');
let i = 0;

const items = reactive([
    { id: i++, msg: "tere", side: false }
]);

const otherside = reactive([

]);

let msgchange = false

function addy() {
    if (text.value.trim() !== '') {
        if (msgchange === true) {
            items.push({ id: i++, msg: text.value.trim(), side: false });

        } else {           
            otherside.push({ id: i++, msg: text.value.trim(), side: true });
        }
        msgchange = !msgchange
    }
    text.value = '';
}


</script>

<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control is-expanded">
                <input @keydown.enter="addy" placeholder="Kirjuta siia et teha uus message" style="background-color: hsl(171, 100%, 41%);" type="text" v-model="text" class="input">
            </p>
            <p class="control">
                <button @click="addy" class="button is-primary">Click me</button>
            </p>
        </div>
        <div class="content is-flex is-flex-direction-row">
            <div class="content" style="width: 50%;">
                <Message :items="items" title="Person Left"/>
            </div>
            <div class="content" style="width: 50%;">
                                <div style="height: 124px; margin: 2rem;"></div>
                 <Message :items="otherside" title="Person Right" />
            </div>
        </div>
    </div>
</template>