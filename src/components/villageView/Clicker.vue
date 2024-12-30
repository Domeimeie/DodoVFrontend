<template>
    <div class="clicker">
        <h1>Dodo Breeder</h1>
        <img :src="melonImage" alt="My Image" @click="updateMelonInStore"/>
    </div>
</template>


<script setup>
    import melonImage from '@/assets/melon.webp';
    import { useMelonStore } from '@/components/stores/ResourceStores.js';
    import { useClickerStore } from '@/components/stores/UpgradeStores.js';

    const clickIncrement = useClickerStore();

    const melonStore = useMelonStore();
    const updateMelonInStore = () => {
        melonStore.updateMelon(melonStore.melon + (clickIncrement.clicker+1));
    };
</script>


<style scoped>
    .clicker{
        margin-left: auto;
        margin-right: auto;
        padding: 1vh;
    }

    .clicker img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        cursor: pointer;
    }    

    .clicker img:hover{
        opacity: 0.5;
        filter:saturate(200%);
    }

    .clicker img:active{
        filter: brightness(85%)
    }
    
    .clicker h1{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    @media screen and (max-width: 800px) {
    .clicker img{
        width: 80%;
    }  
  }
</style>