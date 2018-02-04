Some Redux Notes:

So what's happening with redux?
User interaction => Dispatch action from react component => Reducer evaluates action and determine new state => new state information arrives at component via connect and triggers re-render

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

**Reducers**
    -Take state in an action and return a new state, modify state in a new way
    -Never mutate the state directly
        -Take the state and return new instances of it

**Connect Function**
Brings in two functions
    1. map state to props
    2. map dispatch to props fxn

**Map State to Props**
Used so we can recognize redux state in a component

**Whenever you add redux logic!!**
1. Define a constant
2. Make an action creator
3. Amend or create a reducer

**sfcookie**
built specifically for helping react get access to user cookies
