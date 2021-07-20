import { createModel } from 'mdf';

/**
 * @file 测试 rematch model
 */

type TitleState = {
  name: string;
};

export default createModel({
  state: {
    name: 'rematch witch hooks',
  } as TitleState,

  reducers: {
    SET_Title: (state: TitleState, name: string) => {
      return {
        ...state,
        name,
      };
    },
  },
  effects: (dispatch: any) => {
    return {
      async getTitle(payload: string): Promise<any> {
        dispatch.rematch_title.SET_Title(payload);
      },
    };
  },
});
