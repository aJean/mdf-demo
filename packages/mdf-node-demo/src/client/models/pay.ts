import { Model } from 'mdf';
import request from '../api/request';

/**
 * @file dva model
 */

const PayModel: Model = {
  namespace: 'pay',

  state: {
    name: 'qy',
    beauty: 50,
  },

  effects: {
    *addBeauty(_, { put }) {
      try {
        // 请求 node server 进程
        const url = 'http://localhost:3001/mdf';
        const res = yield request.get(url);
        console.log(res.data);

        yield put({
          type: 'addBeautySuccess',
          payload: 1000,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    addBeautySuccess(state, action) {
      return { ...state, beauty: action.payload };
    },
  },
};

export default PayModel;
