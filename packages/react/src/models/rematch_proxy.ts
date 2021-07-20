import { createModel } from 'mdf';

/**
 * @file 测试 rematch model
 */

export default createModel<any>()({
  state: {
    players: [],
  },

  reducers: {
    SET_PLAYERS: (state: any, players: any[]) => {
      return {
        ...state,
        players,
      };
    },
  },
  effects: (dispatch: any) => {
    return {
      async getPlayers(): Promise<any> {
        dispatch.players.SET_PLAYERS([1, 2, 3]);
      },
    };
  },
});
