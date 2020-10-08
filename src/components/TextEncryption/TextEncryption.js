import React from "react";
import './TextEncryption.css';
import {useSelector} from "react-redux";

const TextEncryption = props => {

    const state = useSelector(state => state);

    return (
        <>
            <label>Decoded message:</label>
            <input
                className="Textarea"
                name="decoded"
                value={state.decoded}
                onChange={props.onChange}
            />
            <label>Password:</label>
            <div className="Encode">
                <input
                    className="Input"
                    name="password"
                    value={state.password}
                    onChange={props.onChange}
                />
                <div className="Buttons">
                    <button onClick={props.encodedMessage}  className="arrowBottom">↓</button>
                    <button onClick={props.decodedMessage}  className="arrowTop">↑</button>
                </div>
            </div>
            <label>Encoded message:</label>
            <input
                className="Textarea"
                name="encoded"
                value={state.encoded}
                onChange={props.onChange}
            />
        </>
    );
};

export default TextEncryption;