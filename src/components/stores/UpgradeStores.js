import { defineStore } from 'pinia';

export const useClickerStore = defineStore('clicker', {
  state: () => ({
    clicker: 1,
  }),
  actions: {
    updateClicker(newClickerValue) {
      this.clicker = newClickerValue;
    },
  },
});

export const useMelonFieldStore = defineStore('melonField', {
  state: () => ({
    melonField: 0,
  }),
  actions: {
    updateMelonField(newMelonFieldValue) {
      this.melonField = newMelonFieldValue;
    },
  },
});
