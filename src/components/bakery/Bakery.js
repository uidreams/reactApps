import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../actions/bakery/cakeAction";
import IceCream from "./IceCream";

function CakeContainer (props) {
	return (
		<div>
			<h1 className="blue-text">Bakery app page</h1>
			<h3>Number of Cakes : {props.numOfCakes}</h3>
			<button onClick={props.buyCake} className="waves-effect waves-light btn" >Buy Cake</button>
            <IceCream/>
        </div>
	);
}

const mapStateToProps = state => {
	return {
		numOfCakes: state.cake.numOfCakes
	};
};
const mapDispatchToProps = dispatch => {
	return {
		buyCake: () => dispatch(buyCake())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
