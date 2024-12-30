<template>
    <div class="ressources">
        <h1>Ressourcen</h1>
        <Ressource :name="'Melonen'" :amount=melonStore.melon :change="'(+' + melonFieldStore.melonField +' Melonen/s)'"/>
        <Ressource :name="'Dodos'" :amount=dodoStore.dodo :change="'(-' + dodoStore.dodo +' Melonen/m)'"/>
    </div>
</template>

<script setup>

    import {onMounted, onUnmounted } from 'vue';
    import Ressource from '../props/Resource.vue'
    import { useMelonStore, useDodoStore } from '@/components/stores/ResourceStores.js';
    import { useMelonFieldStore, useBreedingPenStore, useClickerStore } from '@/components/stores/UpgradeStores.js';

    let intervalSecond = null;
    let intervalMinute = null;
    let timePassed = 0;

    const melonStore = useMelonStore();
    const dodoStore = useDodoStore();
    const melonFieldStore = useMelonFieldStore();
    const breedingPenStore = useBreedingPenStore();
    const ClickerStore = useClickerStore();
    onMounted(() => {
    //Increase melon count every second, depending on number of Melon Fields
    intervalSecond = setInterval(() => {
        melonStore.updateMelon(melonStore.melon + (melonFieldStore.melonField));
    }, 1000);

    //Decrease Melon count every minute, depending on number of Dodos
    intervalMinute = setInterval(() => {
        dodoStore.updateDodo(dodoStore.dodo + Math.ceil((breedingPenStore.breedingPen + 1) ** 1.5 + dodoStore.dodo * 0.05));
        melonStore.updateMelon(melonStore.melon - (dodoStore.dodo));
        timePassed++;

        //If Melons fall below 0, reset game to start values
        if(melonStore.melon<0){
            alert("Alle Dodos sind verhungert. Innert " + timePassed + " Minuten hast du " + dodoStore.dodo + " Dodos gezüchtet");
            melonStore.updateMelon(100);
            dodoStore.updateDodo(2);
            breedingPenStore.updateBreedingPen(0);
            melonFieldStore.updateMelonField(0);
            ClickerStore.updateClicker(0);
        }
    }, 60000);
    });

    //cleanup
    onUnmounted(() => {
    if (intervalSecond) {
        clearInterval(intervalSecond);
    }
    if (intervalMinute) {
        clearInterval(intervalMinute);
    }
    });


</script>

<style scoped>
    .ressources{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        text-align: center;
    }
</style>