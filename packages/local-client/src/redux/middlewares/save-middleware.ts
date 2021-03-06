import { Dispatch } from "redux";
import { RootState } from "..";
import { saveCells } from "../action-creators";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const saveMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  let timer: any;
  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);

      if (
        [
          ActionType.MOVE_CELL,
          ActionType.UPDATE_CELL,
          ActionType.INSERT_CELL_AFTER,
          ActionType.DELETE_CELL,
        ].includes(action.type)
      ) {
        //debounce 250ms
        if (timer) {
          clearInterval(timer);
        }
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);
      }
    };
  };
};
