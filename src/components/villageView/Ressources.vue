<template>
    <p>Melonen: {{melonStore.melon}}</p>
    <p>Dodos: {{ dodos }}</p>
</template>

<script setup>

    import { ref, onMounted, onUnmounted } from 'vue';
    import { useMelonStore } from '@/components/stores/ressourceStore.js';

    const melonStore = useMelonStore();
    const dodos = ref(2);

    const incrementAmount = 1;
    let intervalId = null;

    onMounted(() => {
    intervalId = setInterval(() => {
        updateMelonInStore();
    }, 1000);
    });

    onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
    });

    const updateMelonInStore = () => {
        melonStore.updateMelon(melonStore.melon + incrementAmount);
    };
</script>

<style scoped>

</style>