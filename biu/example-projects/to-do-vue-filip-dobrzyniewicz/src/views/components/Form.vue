<template>
    <form>
        <div class="md-layout">

            <div
                    class="md-layout-item md-size-100 md-layout"
            >
                <md-field class="md-layout-item md-size-50" style="margin: 25px 15px 5px">
                    <label>Tytuł</label>
                    <md-input v-model="title" type="text"></md-input>
                </md-field>
            </div>

            <div
                    class="md-layout-item md-size-100 md-layout"
            >
                <md-field class="md-layout-item md-size-50" style="margin: 25px 15px 5px">
                    <label>Treść</label>
                    <md-input v-model="desc" type="text"></md-input>
                </md-field>
            </div>

            <div
                class="md-layout-item md-size-100 md-layout"
            >
                <h4 class="md-layout-item md-size-100">Kolor: </h4>
                <md-radio v-model="type" value="info" class="md-layout-item md-size-20">Niebieski</md-radio>
                <md-radio v-model="type" value="success" class="md-layout-item md-size-20">Zielony</md-radio>
                <md-radio v-model="type" value="warning" class="md-layout-item md-size-20">Żółty</md-radio>
                <md-radio v-model="type" value="danger" class="md-layout-item md-size-20">Czerwony</md-radio>
            </div>

            <div
                    class="md-layout-item md-size-100 md-layout"
            >
                <h4 class="md-layout-item md-size-100">Ikonka: </h4>
                <md-radio v-model="icon" value="schedule" class="md-layout-item md-size-20">
                    <md-icon>schedule</md-icon> Zegarek
                </md-radio>
                <md-radio v-model="icon" value="perm_media" class="md-layout-item md-size-20">
                    <md-icon>perm_media</md-icon> Pliki
                </md-radio>
                <md-radio v-model="icon" value="print" class="md-layout-item md-size-20">
                    <md-icon>print</md-icon> Drukarka
                </md-radio>
                <md-radio v-model="icon" value="language" class="md-layout-item md-size-20">
                    <md-icon>language</md-icon> Sieć
                </md-radio>
                <md-radio v-model="icon" value="https" class="md-layout-item md-size-20">
                    <md-icon>https</md-icon> Kłódka
                </md-radio>
                <md-radio v-model="icon" value="face" class="md-layout-item md-size-20">
                    <md-icon>face</md-icon> Twarz
                </md-radio>
                <md-radio v-model="icon" value="extension" class="md-layout-item md-size-20">
                    <md-icon>extension</md-icon> Puzzle
                </md-radio>
                <md-radio v-model="icon" value="done" class="md-layout-item md-size-20">
                    <md-icon>done</md-icon> Checkmark
                </md-radio>
                <md-radio v-model="icon" value="email" class="md-layout-item md-size-20">
                    <md-icon>email</md-icon> Mail
                </md-radio>
                <md-radio v-model="icon" value="eco" class="md-layout-item md-size-20">
                    <md-icon>eco</md-icon> Liść
                </md-radio>
                <md-radio v-model="icon" value="favorite" class="md-layout-item md-size-20">
                    <md-icon>favorite</md-icon> Serce
                </md-radio>
                <md-radio v-model="icon" value="pan_tool" class="md-layout-item md-size-20">
                    <md-icon>pan_tool</md-icon> Ręka
                </md-radio>
                <!-- Więcej ikon na: https://material.io/resources/icons/?style=baseline -->
            </div>

            <md-button
                    class="md-layout-item md-size-20 md-layout"
                    style="margin-top: 20px; margin-bottom: 50px;"
                    type="submit"
                    @click.prevent="submit()"
            >
                Dodaj ToDo
            </md-button>

        </div>
    </form>
</template>

<script>
import {ToDoItem} from "../../ToDoItem";
import {ToDoList} from '../../ToDoItem';
export default {
    name: "Form",
    data() {
        return {
            title: null,
            desc: null,
            icon: null,
            type: 'info'
        }
    },
    methods: {
        submit: function () {
            let x = new ToDoItem(ToDoList.length, this.title, this.desc, this.type, this.icon, 'PENDING' );
            ToDoList.push(x);
        }
    }
}
</script>

<style scoped>

</style>