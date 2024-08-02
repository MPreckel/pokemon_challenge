
import * as t from "../types";

type TGlobalState = {
  example: string
}

const GlobalState: TGlobalState = {
  example: 'Hola David!',
};

const main = (state = GlobalState, action: any) => {
  switch (action.type) {
    case t.EXAMPLE:
      return {
        ...state,
        example: action.payload,
      }
    default:
      return { ...state };
  }
}

export default main;