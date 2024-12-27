<template>
    <div class="clicker">
        <img :src="melonImage" alt="My Image" @click="updateMelonInStore"/>
    </div>
</template>


<script setup>
    import melonImage from '@/assets/melon.webp';
    import { useMelonStore } from '@/components/stores/RessourceStores.js';
    import { useClickerStore } from '@/components/stores/UpgradeStores.js';

    const clickIncrement = useClickerStore();

    const melonStore = useMelonStore();
    const updateMelonInStore = () => {
        melonStore.updateMelon(melonStore.melon + clickIncrement.clicker);
    };
</script>


<style scoped>
    .clicker{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    .clicker img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>