<template>
    <div class="upgrades">
        <h1>Upgrades</h1>
        <Ressource :name="'Klicker'" :amount=clickerStore.clicker :image=clickerImage :upgradeCost=clickerBaseUpgradeCost*(clickerStore.clicker+1) :availableCost=melonStore.melon @upgrade="upgradeClicker"/>
        <Ressource :name="'Melonen Farm'" :amount=melonFieldStore.melonField :image=melonFieldImage :upgradeCost=melonFieldBaseUpgradeCost*(melonFieldStore.melonField+1) :availableCost=melonStore.melon @upgrade="upgradeMelonFarm"/>
        <Ressource :name="'Zuchtstall'" :amount=breedingPenStore.breedingPen :image=melonFieldImage :upgradeCost=breedingPenBaseUpgradeCost*(breedingPenStore.breedingPen+1) :availableCost=melonStore.melon @upgrade="upgradeBreedingPen"/>
    </div>
</template>


<script setup>
    import Ressource from '../props/Upgrades.vue'
    import { useClickerStore, useMelonFieldStore, useBreedingPenStore } from '@/components/stores/UpgradeStores.js';
    import { useMelonStore } from '@/components/stores/ResourceStores.js';
    import clickerImage from '@/assets/cursor.webp';
    import dodoImage from '@/assets/dodo.webp';
    import melonFieldImage from '@/assets/melonField.webp';

    //Setup Base Upgrade Costs
    const clickerBaseUpgradeCost=100;
    const dodoBaseUpgradeCost=50;
    const melonFieldBaseUpgradeCost=200;
    const breedingPenBaseUpgradeCost=50;

    const melonStore = useMelonStore();

    const clickerStore = useClickerStore();
    const upgradeClicker = () => {
        if (melonStore.melon>=clickerBaseUpgradeCost*(clickerStore.clicker+1)){
            melonStore.updateMelon(melonStore.melon - clickerBaseUpgradeCost*(clickerStore.clicker+1));
            clickerStore.updateClicker(clickerStore.clicker + 1);
        }
    };

    const melonFieldStore = useMelonFieldStore();
    const upgradeMelonFarm = () => {
        if (melonStore.melon>=melonFieldBaseUpgradeCost*(melonFieldStore.melonField+1)){
            melonStore.updateMelon(melonStore.melon - melonFieldBaseUpgradeCost*(melonFieldStore.melonField+1));
            melonFieldStore.updateMelonField(melonFieldStore.melonField + 1);
        }
    };

    const breedingPenStore = useBreedingPenStore();
    const upgradeBreedingPen = () => {
        if (melonStore.melon>=breedingPenBaseUpgradeCost*(breedingPenStore.breedingPen+1)){
            melonStore.updateMelon(melonStore.melon - breedingPenBaseUpgradeCost*(breedingPenStore.breedingPen+1));
            breedingPenStore.updateBreedingPen(breedingPenStore.breedingPen + 1);
        }
    };

</script>


<style scoped>
    .upgrades {
        padding: 1vh;
    }

    h1{
        padding-left: 1vh;
    }

    .upgrades h1{
        text-align: center;
    }
</style>