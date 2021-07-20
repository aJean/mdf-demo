import { createModel } from 'mdf';

/**
 * @file 测试 rematch model
 */

type PlayersState = {
  players: number[];
};

export default createModel({
  state: {
    players: [],
  } as PlayersState,

  reducers: {
    /**
     * use immer
     */
    SET_PLAYERS: (state: PlayersState, players: number[]) => {
      state.players = players;
      return state;
    },
  },
  
  effects: (dispatch) => {
    const { rematch_model } = dispatch;
    
    return {
      async setPlayers(payload: number[]): Promise<any> {
        rematch_model.SET_PLAYERS(payload);
      },
    };
  },
});
