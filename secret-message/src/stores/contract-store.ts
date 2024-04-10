import { WalletAccount } from '@wallet-standard/base';
import { createStore } from 'zustand-x';

export type ContractStoreState = {
  account: WalletAccount | null;
};

export const contractStore = createStore('contract')(
  <ContractStoreState>{
    account: null,
  },
  {
    devtools: { enabled: true },
  },
);
