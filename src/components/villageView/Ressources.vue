<template>
    <p>{{food}}</p>
</template>

<script >
    const stone = 2;
    const iron = 2;

    import { ref, onMounted, onUnmounted } from 'vue';

    export default  {
        setup() {
        const food = ref(0);
        const incrementAmount = 1;
        let intervalId = null;

        onMounted(() => {
        intervalId = setInterval(() => {
            food.value += incrementAmount;
        }, 1000);
        });

        onUnmounted(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        });

        return { food };
  },
};
</script>

<style scoped>

</style>