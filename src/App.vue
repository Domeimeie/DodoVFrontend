<template>
  <div class="my-grid">
    <div class="bg-green-200 flex flex-col">
      <div class="bg-green-400 h-full">
        <Villages />
      </div>
      <div class="bg-green-800 h-full">
        <Buildings />
      </div>
    </div>
    <Clicker />
    <div class="bg-red-200 flex flex-col">
      <div class="bg-red-400 h-full">
        <Ressources />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  import Villages from './components/villageView/Villages.vue';
  import Buildings from './components/villageView/Buildings.vue';
  import Ressources from './components/villageView/Ressources.vue';
  import Clicker from './components/villageView/Clicker.vue';
</script>

<style scoped>
.my-grid {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 100vh;
}
</style>