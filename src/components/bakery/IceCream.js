import React from 'react'
import { connect } from 'react-redux'
import buyIceCream from '../../actions/bakery/iceCreamAction'

function IceCream(props) {
    return (
        <div>
            <h3>Number of IceCreams : {props.numOfIceCreams}</h3>
            <button onClick={props.buyIceCream} className="waves-effect waves-light btn">Buy Icecreams</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numOfIceCreams : state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCream)
