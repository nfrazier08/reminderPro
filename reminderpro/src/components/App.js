import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators} from 'redux'
import { addReminder } from '../actions';


class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            text: ' '
        }
    }

    addReminder() {
        // console.log('this', this)
        this.props.addReminder(this.state.text)
    }

    renderReminders(){
        const { reminders } = this.props;     
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div> {reminder.text}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )   
    }

    render(){        
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>

                <div className="form-inline">
                    <div className="form-group">
                        <input  
                            className="form-control"
                            placeholder="I have to..."
                            onChange = {event => this.setState({text: event.target.value})}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>

                    {this.renderReminders()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log('state', state)
    return{
        reminders: state
    }
}

//LONG WAY:
//Bind action creator to this application
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addReminder}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(App);

//SHORT CUT:
//Since we are only adding addReminder
//And take out dispatchToProps fxn above
export default connect(mapStateToProps, {addReminder})(App)

