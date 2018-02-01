//Import ADD_REMINDER constant

import { ADD_REMINDER } from '../constants';

//Make action creator (function that returns the object!)
//Call fxn, declare it as constant
export const addReminder = () => {
    //One parameter, the text we are going to pass
    //ES6 short hand when key and value are the same (text)
    const action = {
        type: ADD_REMINDER, 
        text
    }
    console.log('action in addReminder', action);
    return action
}

