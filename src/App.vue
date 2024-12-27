<template>
  <div class="my-grid">
    <div class="bg-green-200 flex flex-col">
      <div class="bg-green-800 h-full">
        <UpgradeList />
      </div>
    </div>
    <Clicker />
    <div class="bg-red-200 flex flex-col">
      <div class="bg-red-400 h-full">
        <RessourceList />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  import UpgradeList from './components/villageView/UpgradeList.vue';
  import RessourceList from './components/villageView/RessourceList.vue';
  import Clicker from './components/villageView/Clicker.vue';
</script>

<style scoped>
.my-grid {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 100vh;
}
</style>