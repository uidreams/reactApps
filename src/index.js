import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./App";
import rootReducer from "./reducers/rootReducer";
import { fetchGithubData } from "./actions/index";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(fetchGithubData);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
