<template>
    <h1>Ressourcen</h1>
    <Ressource :name="'Melonen'" :amount=melonStore.melon />
    <Ressource :name="'Dodos'" :amount=dodoStore.dodo />
</template>

<script setup>

    import {onMounted, onUnmounted } from 'vue';
    import Ressource from '../props/Ressource.vue'
    import { useMelonStore } from '@/components/stores/RessourceStores.js';
    import { useDodoStore } from '@/components/stores/RessourceStores.js';

    const incrementAmount = 1;
    let intervalId = null;

    const melonStore = useMelonStore();
    const updateMelonInStore = () => {
        melonStore.updateMelon(melonStore.melon + incrementAmount);
    };

    const dodoStore = useDodoStore();
    const updateDodoInStore = () => {
        dodoStore.updateDodo(melonStore.dodo + incrementAmount);
    };

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


</script>

<style scoped>

</style>