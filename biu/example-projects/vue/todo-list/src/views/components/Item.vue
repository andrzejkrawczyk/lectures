<template>
    <li>
        <div class="alert" :class="this.alertType">
            <div class="container" >
                <div class="alert-icon">
                    <md-icon>{{ this.iconType }}</md-icon>
                </div>
                <b @click="toggleDetails()">{{ this.item.id }} [{{ item.state }}]: {{ item.name }}</b>
                <div class="close">
                    <button type="button" aria-hidden="true" @click="toggleDetails()">
                        <md-icon>remove_red_eye</md-icon>
                    </button>
                    <button type="button" aria-hidden="true" @click="this.complete" v-if="item.state != 'COMPLETED'">
                        <md-icon>done</md-icon>
                    </button>
                    <button type="button" aria-hidden="true" @click="this.delete">
                        <md-icon>clear</md-icon>
                    </button>
                </div>
                <div v-if="this.details">
                    {{ item.desc }}
                </div>
            </div>
        </div>

    </li>
</template>

<script>
    export default {
        name: "Item",
        props: [ 'item' ],
        computed: {
            alertType(){
                return 'alert-'+this.item.type;
            },
            iconType(){
                return this.item.icon;
            },
            detailsC(){
                return this.item.state==="COMPLETED" ? true : false;
            }
        },
        data() {
            return {
                details: false
            }            
        },
        methods: {
            delete(){
                this.$emit('deleted', this.item.id);
            },
            complete(){
                this.$emit('completed', this.item.id);
            },
            toggleDetails(){
                this.details = !this.details;
            }
        }
    }
</script>

<style scoped>
    li {
        list-style-type: none;
    }
    button {
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
    }
    b {
        cursor: pointer;
    }
</style>
