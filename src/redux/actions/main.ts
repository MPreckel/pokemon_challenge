import * as t from "../types";


export const createLevels = () => (dispatch: any) => {
  dispatch({
    type: t.EXAMPLE,
    payload: {example: "example"}
  });
}
