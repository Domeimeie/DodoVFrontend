<template>
  <div class="my-grid">
    <div class="bg-green-200 flex flex-col">
      <div class="bg-green-400 h-full">
        <Villages />
      </div>
      <div class="bg-green-800 h-full">
        <Attacks />
      </div>
    </div>
    <div class="">Main Window</div>
    <div class="bg-red-200 flex flex-col">
      <div class="bg-red-400 h-full">
        <Ressources />
      </div>
      <div class="bg-red-800 h-full">
        <Army />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Villages from './components/villageView/Villages.vue';
import Attacks from './components/villageView/Attacks.vue';
import Ressources from './components/villageView/Ressources.vue';
import Army from './components/villageView/Army.vue';
</script>

<style scoped>
.my-grid {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 100vh;
}
</style>