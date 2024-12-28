<template>
    <h1>Upgrades</h1>
    <Ressource :name="'Klicker'" :amount=clickerStore.clicker @upgrade="upgradeClicker"/>
    <Ressource :name="'Dodos'" :amount=dodoStore.dodo  @upgrade="upgradeDodo"/>
    <Ressource :name="'Melonen Farm'" :amount=melonFieldStore.melonField @upgrade="upgradeMelonFarm"/>
</template>


<script setup>
    import Ressource from '../props/Upgrades.vue'
    import { useClickerStore } from '@/components/stores/UpgradeStores.js';
    import { useMelonFieldStore } from '@/components/stores/UpgradeStores.js';
    import { useMelonStore } from '@/components/stores/RessourceStores.js';
    import { useDodoStore } from '@/components/stores/RessourceStores.js';

    const melonStore = useMelonStore();

    const clickerStore = useClickerStore();
    const upgradeClicker = () => {
        if (melonStore.melon>=100*(clickerStore.clicker+1)){
            melonStore.updateMelon(melonStore.melon - 100*(clickerStore.clicker+1));
            clickerStore.updateClicker(clickerStore.clicker + 1);
        }
    };

    const dodoStore = useDodoStore();
    const upgradeDodo = () => {
        if (melonStore.melon>=50){
            melonStore.updateMelon(melonStore.melon - 50);
            dodoStore.updateDodo(dodoStore.dodo + 1);
        }
    };

    const melonFieldStore = useMelonFieldStore();
    const upgradeMelonFarm = () => {
        if (melonStore.melon>=200*(melonFieldStore.melonField+1)){
            melonStore.updateMelon(melonStore.melon - 200*(melonFieldStore.melonField+1));
            melonFieldStore.updateMelonField(melonFieldStore.melonField + 1);
        }
    };

</script>


<style scoped>

</style>