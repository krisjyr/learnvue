
<script setup>
import { ref } from 'vue';
let messages = ref([]);
let msg = ref('');
let name = ref('');
let nameInput = ref('');
let socket;

function send(){
    if (msg.value.trim() !== '') {
        socket.send(JSON.stringify({name: name.value, message: msg.value, isMe: false}));
        messages.value.push({name: name.value, message: msg.value, isMe: true});
    }
    msg.value = '';
}

function join(){
    if (nameInput.value.trim() === '') {
        return;
    }

    name.value = nameInput.value;
    // Create WebSocket connection.
    socket = new WebSocket('ws://localhost:8080');

    // Connection opened
    socket.addEventListener('open', (event) => {
        //socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
        console.log('Message from server ', event.data);
        messages.value.push(JSON.parse(event.data));
    });
}

</script>

<template>
    
    <div class="container" v-if="name">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="send()" class="input" type="text" placeholder="Write something" v-model="msg">
            </div>
            <div class="control">
                <a class="button is-info" @click="send()">
                    Send
                </a>
            </div>
        </div>
        <!-- eslint-disable vue/require-v-for-key -->
        <div 
            class="notification is-light" 
            v-for="message in messages" 
            :class="{'is-primary': message.isMe, 'is-link': !message.isMe}">
                {{ message.message }}
                <p class="has-text-dark has-text-weight-semibold">{{ message.name }}</p>
        </div>
    </div>

    <div class="container" v-else>
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="join()" class="input" type="text" placeholder="Name" v-model="nameInput">
            </div>
            <div class="control">
                <a class="button is-info" @click="join()">
                    Join
                </a>
            </div>
        </div>
       
    </div>
</template>