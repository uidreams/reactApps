import { FETCH_GITHUB_DATA } from "../actions/types";
import { FETCH_GITHUB_DATA_FIALURE } from "../actions/types";

const githubReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_GITHUB_DATA:
			return action.data;
		case FETCH_GITHUB_DATA_FIALURE:
			return action.data;
		default:
			return state;
	}
};
export default githubReducer;
