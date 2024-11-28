<template>
    <h1>IfForSlot</h1>

    <div v-if="show">
        <p>Alles klar?</p>
    </div>

    <div v-for="number in numberlist">
        <p>{{number}}</p>
    </div>

    
</template>
<script setup>
const show = !true;
const numberlist = [4, 2, 3, 6];
</script>

<style>

</style>