import { SUIPASS_CONFIGS } from '@/configs';
import { rootStore } from '@/stores';
import axios from 'axios';
import { UserDetailDto } from './dtos';

class RequestApi {
  async userDetail() {
    const account = rootStore.contract.get.account();
    if (!account) throw Error(`${this.constructor.name}: Contract wallet account is nil!`);

    const res = await axios({
      baseURL: SUIPASS_CONFIGS.API_URL,
      headers: {
        ['x-wallet-address']: account.address,
      },
      method: 'get',
      url: '/users/detail',
    });
    return res.data.data as UserDetailDto;
  }
}

export const requestApi = new RequestApi();
