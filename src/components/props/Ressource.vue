<template>
    <div id="ressource"><p>{{ name }}: {{ amount }}</p></div>
</template>

<script setup>    
    const props = defineProps({
    name: String,
    amount: Number 
    });
</script>