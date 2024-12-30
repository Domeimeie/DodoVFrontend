<template>
    <div class="ressources">
        <h1>Ressourcen</h1>
        <Ressource :name="'Melonen'" :amount=melonStore.melon />
        <Ressource :name="'Dodos'" :amount=dodoStore.dodo />
    </div>
</template>

<script setup>

    import {onMounted, onUnmounted } from 'vue';
    import Ressource from '../props/Resource.vue'
    import { useMelonStore } from '@/components/stores/ResourceStores.js';
    import { useDodoStore } from '@/components/stores/ResourceStores.js';
    import { useMelonFieldStore } from '@/components/stores/UpgradeStores.js';

    const incrementAmount = 1;
    let intervalId = null;

    const melonStore = useMelonStore();
    const dodoStore = useDodoStore();
    const melonFieldStore = useMelonFieldStore();
    onMounted(() => {
    intervalId = setInterval(() => {
        melonStore.updateMelon(melonStore.melon + (melonFieldStore.melonField));
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