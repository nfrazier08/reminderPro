import { ADD_REMINDER } from '../constants';

//Define helper reminder function with 'action' as it's only parameter
    //Called in first case below
const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

//One reducer as a constant
//Takes two parameters (state and action)
const reminders = (state = [], action) => {
    let reminders = null;
    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);
            return reminders
        default:
            return state;
    }
}


export default reminders;