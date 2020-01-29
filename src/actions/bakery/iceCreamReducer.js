import { BUY_ICECREAM } from './types'

const initState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default: return state;
    }
}

export default iceCreamReducer;