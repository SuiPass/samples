import { createStore } from 'zustand-x';

export type AppStoreState = {
  isLoading: boolean;
  isLogged: boolean;
};

export const appStore = createStore('app')(
  <AppStoreState>{
    isLoading: true,
    isLogged: false,
  },
  {
    devtools: { enabled: true },
  },
);
