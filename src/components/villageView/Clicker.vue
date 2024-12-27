<template>

    <div style="width: 20px; height: 20px; background-color: red;" @click="updateMelonInStore">Update Melon</div>
</template>


<script setup>

    import { useMelonStore } from '@/components/stores/ressourceStore.js';

    const melonStore = useMelonStore();

    const incrementAmount = 1;

    const updateMelonInStore = () => {
        melonStore.updateMelon(melonStore.melon + incrementAmount);
    };
</script>


<style scoped>

</style>