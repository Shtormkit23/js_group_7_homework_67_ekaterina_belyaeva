import axiosApi from "../axiosApi";
import {CHANGE_TEXT, DECODE_TEXT_SUCCESS, ENCODE_TEXT_SUCCESS} from "./actionTypes";

const encodeTextSuccess = data => {
    return {type: ENCODE_TEXT_SUCCESS, data};
};

const decodeTextSuccess = data => {
    return {type: DECODE_TEXT_SUCCESS, data};
};

export const encodeText = messageData => {
    return dispatch => {
        return axiosApi.post("/encode", messageData).then(response => {
            dispatch(encodeTextSuccess(response.data));
        }).catch((error) => {
            alert(error.request.responseText);
        });
    };
};

export const decodeText = messageData => {
    return dispatch => {
        return axiosApi.post("/decode", messageData).then(response => {
            dispatch(decodeTextSuccess(response.data));
        }).catch((error) => {
            alert(error.request.responseText);
        });
    };
};

export const changeMessageAction = input => {
    return {type: CHANGE_TEXT, input};
};


