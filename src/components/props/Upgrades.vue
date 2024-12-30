<template>
    <div class="upgrade" :class="isUpgradeActive()" @click="click">
        <div class="text-container">
            <p>{{ name }}: {{ amount }}</p>
            <p>{{ gain }}</p>
            <p>Kosten: {{ props.upgradeCost }}</p>
        </div>
            <img :src="image"/>
    </div>
</template>

<script setup>    
    const props = defineProps({
    name: String,
    amount: Number,
    image: String,
    upgradeCost: Number,
    availableCost: Number,
    gain: String
    });

    //send emit to parent to upgrade
    const emit = defineEmits(['upgrade'])
    const click = () => {
        emit('upgrade');
    };

    const isUpgradeActive = () => {
        if(props.availableCost>=props.upgradeCost){
            return "upgradeActive";
        }
    };
</script>

<style scoped>
    .upgrade{
        margin: 1vh;
        height: 8vh;
        background-size: cover;
        border: solid;
        border-color: rgb(123, 145, 245);
        background-color: #A8D5E3;
        filter:saturate(0%);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .upgradeActive{
        cursor: pointer;
        filter:saturate(100%);
    }

    .upgradeActive:hover{
        opacity: 0.5;
        filter:saturate(200%);
    }

    .upgradeActive:active{
        filter: brightness(85%)
    }

    .upgrade img{
        width: 60%;
        height: 100%;
        object-fit: cover;
        mask-image: linear-gradient(to right, transparent, black);
    }

    .upgrade p{
        margin: 0;
        font-weight: bold;
    }
</style>