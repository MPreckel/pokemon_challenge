import * as t from "../types";

export const testAction = () => (dispatch: any) => {
  dispatch({ type: t.TEST_STATE_1 });
  setTimeout(() => {
    dispatch({ type: t.TEST_STATE_2 });
  }, 2000);
  setTimeout(() => {
    dispatch({ type: t.TEST_STATE_3 });
  }, 5000);
};
