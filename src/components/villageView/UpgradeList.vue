<template>
    <h1>Upgrades</h1>
    <Ressource :name="'Klicker'" :amount=clickerStore.clicker @upgrade="upgradeClicker"/>
    <Ressource :name="'Dodos'" :amount=0 />
    <Ressource :name="'Melonen Farm'" :amount=0 @upgrade="upgradeMelonFarm"/>
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
        if (melonStore.melon>=100*(clickerStore.clicker+1)){
            melonStore.updateMelon(melonStore.melon - 100*(clickerStore.clicker+1));
            clickerStore.updateClicker(clickerStore.clicker + 1);
        }
    };



    const melonFarmStore = useClickerStore();
    const upgradeMelonFarm = () => {
        console.log(melonStore.melon);
        console.log(clickerStore.clicker);
        if (melonStore.melon>=100*(clickerStore.clicker+1)){
            melonStore.updateMelon(melonStore.melon - 200*(clickerStore.clicker+1));
            melonFarmStore.updateClicker(melonFarmStore.melonFarm + 1);
        }
    };

</script>


<style scoped>

</style>