import { defineStore } from 'pinia';

export const useClickerStore = defineStore('clicker', {
  state: () => ({
    clicker: 0,
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

export const useBreedingPenStore = defineStore('breedingPen', {
  state: () => ({
    breedingPen: 0,
  }),
  actions: {
    updateBreedingPen(newBreedingPenValue) {
      this.breedingPen = newBreedingPenValue;
    },
  },
});