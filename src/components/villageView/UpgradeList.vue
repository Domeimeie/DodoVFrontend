<template>
    <div class="upgrades">
        <h1>Upgrades</h1>
        <Ressource 
            :name="'Bonus Klicks'" 
            :amount=clickerStore.clicker 
            :image=clickerImage 
            :upgradeCost=clickerUpgradeCost 
            :availableCost=melonStore.melon @upgrade="upgradeClicker"/>
        <Ressource 
            :name="'Melonen Farm'" 
            :amount=melonFieldStore.melonField 
            :image=melonFieldImage 
            :upgradeCost=melonFieldUpgradeCost 
            :availableCost=melonStore.melon @upgrade="upgradeMelonFarm"/>
        <Ressource 
            :name="'Zuchtstall'" 
            :amount=breedingPenStore.breedingPen 
            :image=dodoImage 
            :upgradeCost=breedingPenUpgradeCost 
            :availableCost=melonStore.melon @upgrade="upgradeBreedingPen"/>
    </div>
</template>


<script setup>
    import {computed } from 'vue';
    import Ressource from '../props/Upgrades.vue'
    import { useClickerStore, useMelonFieldStore, useBreedingPenStore } from '@/components/stores/UpgradeStores.js';
    import { useMelonStore } from '@/components/stores/ResourceStores.js';
    import clickerImage from '@/assets/cursor.webp';
    import dodoImage from '@/assets/dodo.webp';
    import melonFieldImage from '@/assets/melonField.webp';

    //Setup Base Upgrade Costs
    const clickerBaseUpgradeCost=100;
    const melonFieldBaseUpgradeCost=200;
    const breedingPenBaseUpgradeCost=50;

    const melonStore = useMelonStore();

    const clickerStore = useClickerStore();
    const upgradeClicker = () => {
        if (melonStore.melon>=clickerUpgradeCost.value){
            melonStore.updateMelon(melonStore.melon - clickerUpgradeCost.value);
            clickerStore.updateClicker(clickerStore.clicker + 1);
        }
    };

    const melonFieldStore = useMelonFieldStore();
    const upgradeMelonFarm = () => {
        if (melonStore.melon>=melonFieldUpgradeCost.value){
            melonStore.updateMelon(melonStore.melon - melonFieldUpgradeCost.value);
            melonFieldStore.updateMelonField(melonFieldStore.melonField + 1);
        }
    };

    const breedingPenStore = useBreedingPenStore();
    const upgradeBreedingPen = () => {
        if (melonStore.melon>=breedingPenUpgradeCost.value){
            melonStore.updateMelon(melonStore.melon - breedingPenUpgradeCost.value);
            breedingPenStore.updateBreedingPen(breedingPenStore.breedingPen + 1);
        }
    };

    const clickerUpgradeCost = computed({
        get() {
            return clickerBaseUpgradeCost*(clickerStore.clicker+1);
        },
    })

    const melonFieldUpgradeCost = computed({
        get() {
            return melonFieldBaseUpgradeCost*(melonFieldStore.melonField+1);
        },
    })

    const breedingPenUpgradeCost = computed({
        get() {
            return breedingPenBaseUpgradeCost*(breedingPenStore.breedingPen+1);
        },
    })
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