<template>
    <div id="ressource">
        <p>{{ name }}: {{ amount }}{{ change }}</p>
    </div>
</template>

<script setup>    
    const props = defineProps({
    name: String,
    amount: Number,
    change: String
    });
</script>