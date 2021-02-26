import { Model } from 'mdf';
import request from '../api/request';

/**
 * @file dva model
 */

const PayModel: Model = {
  namespace: 'pay',

  state: {
    name: '乔岳',
    money: 100,
    beauty: 50,
  },

  effects: {
    *addMoney(_, { put }) {
      const res = yield request.get('/qy/yapi22');
      console.log(res);
      yield put({
        type: 'addMoneySuccess',
        payload: 200,
      });
    },

    *addBeauty(_, { put }) {
      const res = yield request.post('/user/loginByEmail', { bodyType: 'json' });
      console.log(res);
      yield put({
        type: 'addBeautySuccess',
        payload: 100,
      });
    },
  },

  reducers: {
    addMoneySuccess(state, action) {
      return { ...state, money: action.payload };
    },

    addBeautySuccess(state, action) {
      return { ...state, beauty: action.payload };
    },

    changeName(state) {
      return { ...state, name: 'qiaoyue' };
    },
  },
};

export default PayModel;
