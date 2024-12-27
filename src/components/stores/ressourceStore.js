import { defineStore } from 'pinia';

export const useMelonStore = defineStore('melon', {
  state: () => ({
    melon: 0,
  }),
  actions: {
    updateMelon(newMelonValue) {
      this.melon = newMelonValue;
    },
  },
});

export const useDodosStore = defineStore('dodo', {
  state: () => ({
    dodo: 0,
  }),
  actions: {
    updateMelon(newDodoValue) {
      this.dodo = newMDodoValue;
    },
  },
});
