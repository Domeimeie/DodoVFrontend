<template>
    <div id="ressource"><p>{{ name }}: {{ amount }}</p><button  @click="click">Kaufen</button></div>
</template>

<script setup>    
    const props = defineProps({
    name: String,
    amount: Number
    });

    const emit = defineEmits(['upgrade'])
    const click = () => {
        emit('upgrade');
    };
;
</script>