<template>
    <h1>Template Refs</h1>
    <button @click="doMoveAway">Send</button>
    <h4 ref="heading">Short Heading</h4>
</template>

<script setup>
    import { useTemplateRef, ref} from 'vue'

    const heading = useTemplateRef('heading');
    const interval = ref(null);
    const counter = ref(0);
    const moveAway = () => {
        counter.value++;
        heading.value.style.transform= `translateX(${counter.value}px)`;
        if (counter.value === 10) {
        clearInterval(interval.value);
        }
    };
    const doMoveAway = () => {
        counter.value=0;
        console.log(heading.value);
        interval.value = setInterval(moveAway, 100);
    };
</script>

<style scoped>

</style>