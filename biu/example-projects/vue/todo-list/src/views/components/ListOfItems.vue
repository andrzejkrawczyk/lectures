<template>
    <ul>
        <Item
            v-for="item of this.items"
            :item="item"
            @deleted="deleteItem($event)"
            @completed="completeItem($event)"
        ></Item>
        <md-snackbar :md-position="position" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
            <span>Usunięto to-do!</span>
        </md-snackbar>
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
                items: ToDoList,
                showSnackbar: false,
                position: 'left',
                duration: 2000,
                isInfinity: false
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
                this.showSnackbar = true;
            },
            completeItem(arg){
                this.items[arg].state = 'COMPLETED';
            }
        }
    }
</script>

<style scoped>

</style>
