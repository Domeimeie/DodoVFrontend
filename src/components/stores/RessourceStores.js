import { defineStore } from 'pinia';

export const useMelonStore = defineStore('melon', {
  state: () => ({
    melon: 100,
  }),
  actions: {
    updateMelon(newMelonValue) {
      this.melon = newMelonValue;
    },
  },
});

export const useDodoStore = defineStore('dodo', {
  state: () => ({
    dodo: 0,
  }),
  actions: {
    updateDodo(newDodoValue) {
      this.dodo = newMDodoValue;
    },
  },
});
