<script setup>
defineProps(["items", "title"])

function colorya() {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}
</script>

<template>

            <article v-for="item in items" :key="item.id" id="msgitem" class="message" 
                style="margin: 2rem; margin-bottom: 124px;">
                <div class="message-header" style="border-color: gray  ; border-width: 1px; border-style: solid;" :style="`background-color: ${colorya()}`">
                    <p>{{ title }}</p>
                </div>
                <div class="message-body" style="border-color: gray; border-width: 1px; border-style: solid; border-top-width: 0px;">
                    {{ item.msg }}
                </div>
            </article>
</template> 