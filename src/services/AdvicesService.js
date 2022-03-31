import { api } from './api';

class AdvicesService {
  async getAdviceSlip() {
    const { data } = await api.get();
    const { slip } = data;

    return slip;
  }
}

export default new AdvicesService();
