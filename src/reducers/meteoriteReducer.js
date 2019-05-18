//reducer for all actions
import * as ACTIONS from "../actions/actionTypes";

const meteoriteReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        meteorites: action.payload
      };
    case ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        meteorites: action.payload
      };
    default:
      return state;
  }
};

export default meteoriteReducer;
