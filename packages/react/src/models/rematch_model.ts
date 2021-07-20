import { createModel, RootModel } from 'mdf';

/**
 * @file 测试 rematch model
 */

export default createModel<RootModel>()({
  state: {
    players: [],
  },

  reducers: {
    SET_PLAYERS: (state: any, players: number[]) => {
      return {
        ...state,
        players,
      };
    },
  },
  effects: (dispatch) => {
    return {
      async setPlayers(payload: number[]): Promise<any> {
        dispatch.rematch_model.SET_PLAYERS(payload);
      },
    };
  },
});
