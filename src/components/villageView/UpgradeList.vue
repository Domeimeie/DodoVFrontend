<template>
    <h1>Upgrades</h1>
    <Ressource :name="'Klicker'" :amount=clickerStore.clicker @upgrade="upgradeClicker"/>
    <Ressource :name="'Dodos'" :amount=0 />
    <Ressource :name="'Melonen Farm'" :amount=0 />
</template>


<script setup>
    import Ressource from '../props/Upgrades.vue'
    import { useClickerStore } from '@/components/stores/UpgradeStores.js';
    import { useMelonStore } from '@/components/stores/RessourceStores.js';
    import { useDodoStore } from '@/components/stores/RessourceStores.js';

    const melonStore = useMelonStore();
    const dodoStore = useDodoStore();

    const clickerStore = useClickerStore();
    const upgradeClicker = () => {
        console.log(melonStore.melon);
        console.log(clickerStore.clicker);
        if (melonStore.melon>=100*clickerStore.clicker){
            melonStore.updateMelon(melonStore.melon - 100*clickerStore.clicker);
            clickerStore.updateClicker(clickerStore.clicker + 1);
        }
    };
</script>


<style scoped>

</style>