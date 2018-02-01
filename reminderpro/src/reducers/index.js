import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

//Define helper reminder function with 'action' as it's only parameter
    //Called in first case below
const reminder = (action) => {
    let {text, dueDate} = action
    return {        
        id: Math.random(),
        text, 
        dueDate
    }
}

const removeById= (state=[], id)=> {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reduced reminders', reminders)    
    return reminders
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
        case DELETE_REMINDER: 
            reminders = removeById(state, action.id);
            return reminders;
        default:
            return state;
    }
}


export default reminders;