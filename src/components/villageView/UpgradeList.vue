<template>
    <h1>Upgrades</h1>
    <Ressource :name="'Klicker'" :amount=clickerStore.clicker :image=clickerImage :upgradeCost=clickerBaseUpgradeCost*(clickerStore.clicker+1) :availableCost=melonStore.melon @upgrade="upgradeClicker"/>
    <Ressource :name="'Dodos'" :amount=dodoStore.dodo :image=dodoImage :upgradeCost=dodoBaseUpgradeCost :availableCost=melonStore.melon @upgrade="upgradeDodo"/>
    <Ressource :name="'Melonen Farm'" :amount=melonFieldStore.melonField :image=melonFieldImage :upgradeCost=melonFieldBaseUpgradeCost*(melonFieldStore.melonField+1) :availableCost=melonStore.melon @upgrade="upgradeMelonFarm"/>
</template>


<script setup>
    import Ressource from '../props/Upgrades.vue'
    import { useClickerStore } from '@/components/stores/UpgradeStores.js';
    import { useMelonFieldStore } from '@/components/stores/UpgradeStores.js';
    import { useMelonStore } from '@/components/stores/RessourceStores.js';
    import { useDodoStore } from '@/components/stores/RessourceStores.js';
    import clickerImage from '@/assets/melon.webp';
    import dodoImage from '@/assets/dodo.webp';
    import melonFieldImage from '@/assets/melonField.webp';

    const clickerBaseUpgradeCost=100;
    const dodoBaseUpgradeCost=50;
    const melonFieldBaseUpgradeCost=200;
    const melonStore = useMelonStore();

    const clickerStore = useClickerStore();
    const upgradeClicker = () => {
        if (melonStore.melon>=clickerBaseUpgradeCost*(clickerStore.clicker+1)){
            melonStore.updateMelon(melonStore.melon - clickerBaseUpgradeCost*(clickerStore.clicker+1));
            clickerStore.updateClicker(clickerStore.clicker + 1);
        }
    };

    const dodoStore = useDodoStore();
    const upgradeDodo = () => {
        if (melonStore.melon>=dodoBaseUpgradeCost){
            melonStore.updateMelon(melonStore.melon - dodoBaseUpgradeCost);
            dodoStore.updateDodo(dodoStore.dodo + 1);
        }
    };

    const melonFieldStore = useMelonFieldStore();
    const upgradeMelonFarm = () => {
        if (melonStore.melon>=melonFieldBaseUpgradeCost*(melonFieldStore.melonField+1)){
            melonStore.updateMelon(melonStore.melon - melonFieldBaseUpgradeCost*(melonFieldStore.melonField+1));
            melonFieldStore.updateMelonField(melonFieldStore.melonField + 1);
        }
    };

</script>


<style scoped>
    h1{
        padding-left: 1vh;
    }
</style>