import { SUIPASS_CONFIGS } from '@/configs';
import { rootStore } from '@/stores';
import axios from 'axios';
import { EnterpriseDetailDto, UserDetailDto } from './dtos';

class RequestApi {
  async userDetail(enterpriseAddr: string) {
    const account = rootStore.contract.get.account();
    if (!account) throw Error(`${this.constructor.name}: Contract wallet account is nil!`);

    const res = await axios({
      baseURL: SUIPASS_CONFIGS.API_URL,
      headers: {
        ['x-wallet-address']: account.address,
        ['x-enterprise-address']: enterpriseAddr,
      },
      method: 'get',
      url: '/users/detail',
    });
    return res.data.data as UserDetailDto;
  }

  async enterprise(id: string) {
    const account = rootStore.contract.get.account();
    if (!account) throw Error(`${this.constructor.name}: Contract wallet account is nil!`);

    const res = await axios({
      baseURL: SUIPASS_CONFIGS.API_URL,
      method: 'get',
      url: `/enterprise/${id}`,
    });
    return res.data.data as EnterpriseDetailDto;
  }
}

export const requestApi = new RequestApi();
