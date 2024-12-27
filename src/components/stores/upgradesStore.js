import { defineStore } from 'pinia';

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
