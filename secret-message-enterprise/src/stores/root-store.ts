import { appStore } from './app-store';
import { contractStore } from './contract-store';

export const rootStore = {
  app: appStore,
  contract: contractStore,
};

contractStore.store.subscribe(async (state, prevState) => {
  if (state.account !== prevState.account && state.account) {
    appStore.set.isLogged(true);
    appStore.set.isLoading(false);
  }
});
