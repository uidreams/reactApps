import React from "react";
import { connect } from "react-redux";

const GithubDetails = ({ data }) => {
    //(!data) ? <div>No Data</div> : null;
    console.log(data)
    if(!data) {
        return (
            <div>No Data</div>
        )
    }
	return (
		<div>
			<h1 className="blue-text">Github Details page</h1>
			<ul>
				<li>Name: {data.name}</li>
				<li>Login: {data.login}</li>
				<li>URL: {data.html_url}</li>
			</ul>
		</div>
	);
};
const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps, null)(GithubDetails);
