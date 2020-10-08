import {ENCODE_TEXT_SUCCESS, CHANGE_TEXT, DECODE_TEXT_SUCCESS} from "./actionTypes";

const initialState = {
    decoded: '',
    password: '',
    encoded: '',
};

const textReducer = (state = initialState, action) => {

    switch (action.type) {
        case ENCODE_TEXT_SUCCESS:
            const name = 'encoded'
            return {...state,
                [name]: action.data.encoded};
        case DECODE_TEXT_SUCCESS:
            const decoded = 'decoded'
            return {...state,
                [decoded]: action.data.decoded}
        case CHANGE_TEXT:
            return {...state,
                [action.input.target.name]: action.input.target.value};
        default:
            return state;
    }
};


export default textReducer;