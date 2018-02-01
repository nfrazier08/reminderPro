//Import ADD_REMINDER constant

import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

//Make action creator (function that returns the object!)
//Call fxn, declare it as constant
export const addReminder = (text, dueDate) => {
    //One parameter, the text we are going to pass
    //ES6 short hand when key and value are the same (text)
    const action = {
        type: ADD_REMINDER, 
        text,
        dueDate
    }
    console.log('action in addReminder', action);
    return action
}

//Function that handles deleting the reminders
export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER, 
        id
     }
     console.log('deleting in actions', action)
     return action;
}


