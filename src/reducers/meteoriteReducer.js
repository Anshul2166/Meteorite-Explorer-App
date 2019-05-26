//reducer for all actions
import * as ACTIONS from '../actions/actionTypes';

const meteoriteReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.DATA_SUCCESS:
			return {
				...state,
				meteorites: action.payload,
				isLoading: false,
				errorOccured:false
			};
		case ACTIONS.DATA_LOADING:
			return {
				...state,
				isLoading: true,
				errorOccured:false
			};
		case ACTIONS.DATA_FAILURE:
			return {
				...state,
				meteorites: action.payload,
				isLoading: false,
				errorOccured:true
			};
		default:
			return state;
	}
};

export default meteoriteReducer;
