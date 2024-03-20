<script>
import ItemList from '../components/ItemList.vue';
let i = 0;
export default {
    components: {
        ItemList
    },
    data(){
        return {
            message: '',
            items: [
                {id: i++, name: 'piim', isDone: true},
                {id: i++, name: 'sai', isDone: false},
                {id: i++, name: 'Viin', isDone: true},
            ]
        };
    },
    methods: {
        add(){
            if (this.message.trim() !== '') {
                this.items.push({ id: i++, name: this.message.trim(), isDone: false });
            }
            this.message = '';
        }
    },
    computed: {
        doneItems(){
            return this.items.filter(item => item.isDone);
        },
        toDoItems(){
            return this.items.filter(item => !item.isDone);
        }
    }
};
</script>

<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control is-expanded">
                <input @keydown.enter="add" type="text" v-model="message" class="input">
            </p>
            <p class="control">
                <button @click="add" class="button is-primary">Click me</button>
            </p>
        </div>
        <div class="content">
            <ItemList :items="items" title="All Items"></ItemList>
            <ItemList :items="doneItems" title="Done Items"></ItemList>
            <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
        </div>
    </div>
</template>

