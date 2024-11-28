<template>
    <h1>Events</h1>
    <p>Clicks: {{ counter }}</p>
    <button @click="countUp">Count!</button>

    <br>
    <hr>
    <input v-model="addedValue"/>
    <button @click="addToList">Add</button>
    <div>
        <p>Last added: {{ lastAdded }}</p>
    </div>
    <div v-for="content in contentList">
        <p>{{content}}</p>
    </div>


</template>
<script setup>
    import {isRef, ref} from 'vue';

    const counter = ref(0);
    const countUp = () => {
        counter.value++;
    }

    const addedValue = defineModel()
    const lastAdded = ref();
    const contentList = ref([]);

    const addToList = () => {
        contentList.value.push(addedValue.value);
        lastAdded.value=addedValue.value;
    }
    
</script>
  
<style scoped>

</style>