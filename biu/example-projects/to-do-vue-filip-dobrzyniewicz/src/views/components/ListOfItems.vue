<template>
    <ul>
        <Item
            v-for="item of this.items"
            :item="item"
            @deleted="deleteItem($event)"
            @completed="completeItem($event)"
        ></Item>
    </ul>
</template>

<script>
    import Item from "./Item";
    import {ToDoList} from '../../ToDoItem';
    export default {
        name: "ToDoList",
        components: {Item},
        data() {
            return {
                items: ToDoList
            }
        },
        methods: {
            deleteItem(arg){
                this.items.splice(arg, 1);
                let i = 0;
                for(let item of this.items){
                   item.id = i;
                   i++;
                }
            },
            completeItem(arg){
                this.items[arg].state = 'COMPLETED';
            }
        }
    }
</script>

<style scoped>

</style>