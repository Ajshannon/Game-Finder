import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';


class CreateEvent extends React.Component {

    state = {
        
        user: '',
        title: `Smash Brothers Friday's Final Destination at Guardian Games`,
        lat: 39.683099,
        lng: -86.148345,
        game: 'Super Smash Bros. for Wii U',
        day: 'Fridays',
        time: '7:00pm',
        link: 'https://www.facebook.com/events/1410766155717859/'

      }

    titleOnChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordOnChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
  
      handleSubmit = (e) => {
        // this.props.dispatch(addUser(this.state));
        console.log(this.state)
        this.setState({
            username: '',
            password: '',
        })
      }

    render() {
        return (
            <React.Fragment>
               <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="Event title" id="title" type="text" class="validate" />
                                <label for="title">Title</label>
                            </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s6">
                            <select>
                            <option value="" disabled selected>Choose event type</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            </select>
                            <label>Event type</label>
                        </div>
                        <div class="input-field col s6">
                            <select multiple>
                            <option value="" disabled selected>Choose style(s)</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            </select>
                            <label>Styles</label>
                        </div>
                        </div>

                        <div class="row">
                        <div class="input-field col s6">
                            <label>Begin date</label>
                            <input id="beginDate" type="date" class="datepicker" />
                            
                        </div>
                        <div class="input-field col s6">
                            <label>End date</label>
                            <input id="endDate" type="date" class="datepicker" />
                            
                        </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="Who is organizing the event?" id="organizer" type="text" class="validate" />
                            <label for="organizer">Organizer</label>
                        </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="http://www.mywebsite.com" id="website" type="text" class="validate" />
                            <label for="website">Website</label>
                        </div>
                        <div class="input-field col s6">
                            <input placeholder="contact@myweb.com" id="email" type="text" class="validate" />
                            <label for="email">Contact email</label>
                        </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <textarea id="description" class="materialize-textarea" length="140"></textarea>
                                <label for="description">Describe the event in a tweet!</label>
                            </div>
                        </div>
                    </form>
                    </div>
                
            </React.Fragment>
        );
    };
};

export default CreateEvent;