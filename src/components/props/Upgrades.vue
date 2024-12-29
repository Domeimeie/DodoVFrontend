<template>
    <div class="upgrade" :class="isUpgradeActive()" @click="click">
            <p>{{ name }}: {{ amount }}</p>
            <img :src="image"/>
    </div>
</template>

<script setup>    
    const props = defineProps({
    name: String,
    amount: Number,
    image: String,
    upgradeCost: Number,
    availableCost: Number
    });

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
        border-color: grey;
        filter:saturate(0%);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .upgradeActive{
        cursor: pointer;
        filter:saturate(200%);
    }

    .upgradeActive:hover{
        opacity: 0.5;
        filter:saturate(200%);
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