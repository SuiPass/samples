import { rootStore } from '@/stores';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { useEffect } from 'react';

export function useInitialize() {
  const account = useCurrentAccount();

  useEffect(() => {
    const walletStorageRaw = localStorage.getItem('sui-dapp-kit:wallet-connection-info');
    if (walletStorageRaw) {
      const walletStorageObj = JSON.parse(walletStorageRaw);
      if (walletStorageObj.state.lastConnectedAccountAddress) {
        if (account) rootStore.contract.set.account(account);
      } else rootStore.app.set.isLoading(false);
    } else rootStore.app.set.isLoading(false);
  }, [!account]);
}
