Some Redux Notes:

Redux actions are javascript objects
    -They must have a 'type' property
        -This tells redux what type of action is being performed
    -They also have a 'payload' key that holds all the data

//The action itself
{
    type: 'ADD_REMINDER'
    payload
}

Action creator- 
    -a function that returns javascript object itself

    function() {
        return {
            type: 'ADD_REMINDER',
            payload: {}
        }
    }