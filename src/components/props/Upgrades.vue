<template>
    <div class="upgrade" :class="isUpgradeActive()" @click="click" :style="{ backgroundImage: `url(${image})` }">
            <p>{{ name }}: {{ amount }}</p>
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
        padding: 1vh;
        height: 5vh;
        background-size: cover;
        border: solid;
        border-color: red;
        filter:saturate(0%);
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
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .upgrade p{
        top: 50%;
    }
</style>