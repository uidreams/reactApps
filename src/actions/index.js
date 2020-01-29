import { FETCH_GITHUB_DATA } from "../actions/types";
import { FETCH_GITHUB_DATA_FIALURE } from "../actions/types";
import axios from "axios";

const appUrl = "https://api.github.com/users/uidreams";

// action creator that returns action object
export const fetchData = data => {
	return {
		type: FETCH_GITHUB_DATA,
		payload: data
	};
};
export const fetchDataFailure = data => {
	return {
		type: FETCH_GITHUB_DATA_FIALURE,
		payload: data
	};
};

// thunk function
export const fetchGithubData = () => {
	return dispatch => {
		return axios
			.get(appUrl)
			.then(response => {
                const users = response.data.map(user => user.name)
                alert(users)
				dispatch(fetchData(response.data));
			})
			.catch(error => {
                dispatch(fetchDataFailure(error));
				//throw error;
			});
	};
};
