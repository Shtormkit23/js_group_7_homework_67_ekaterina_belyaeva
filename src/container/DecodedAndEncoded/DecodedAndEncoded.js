import React from "react";
import TextEncryption from "../../components/TextEncryption/TextEncryption";
import {useDispatch, useSelector} from "react-redux";
import {changeMessageAction, decodeText, encodeText} from "../../store/textActions";


const DecodedAndEncoded = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const encodedMessage = () => {
        const messageData = {
            message: state.decoded,
            password: state.password
        }

        dispatch(encodeText(messageData));
    }

    const decodedMessage = () => {
        const messageData = {
            message: state.encoded,
            password: state.password
        }

        dispatch(decodeText(messageData));
    }

    const changeMessage = input => {
        dispatch(changeMessageAction(input));
    }

    return (
        <>
            <TextEncryption
            encodedMessage={encodedMessage}
            decodedMessage={decodedMessage}
            onChange={changeMessage}
            />
        </>
    );
};

export default DecodedAndEncoded;