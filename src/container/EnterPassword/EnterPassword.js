import React from "react";
import {useSelector, useDispatch} from "react-redux";
import './EnterPassword.css';

const BUTTONS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

const EnterPassword = () => {
    const currentCodeState = useSelector(state => state);
    const dispatch = useDispatch();

    const addNumber = (code) => dispatch({type: 'ADD', code});
    const removeNumber = () => dispatch({type: 'REMOVE'});
    const enterCode = () => dispatch({type: 'ENTER'});

    return (
            <div className='door_lock'>
                <input
                    type="text"
                    className={currentCodeState.resultColor}
                    value={currentCodeState.string}
                    disabled
                >

                </input>
                {BUTTONS.map(code => (
                    <button
                        key={code}
                        onClick={() => addNumber(code)}
                    >{code}
                    </button>
                ))}
                <button onClick={removeNumber}>&lt;</button>
                <button onClick={enterCode}>E</button>
            </div>
    );
}

export default EnterPassword;