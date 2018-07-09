import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';


class CreateEvent extends React.Component {

    state = {
        
        user: '',
        title: ``,
        lat: 0,
        lng: 0,
        game: '',
        day: '',
        time: '',
        link: ''

      }

    titleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    latOnChange = (event) => {
        this.setState({
            lat: event.target.value
        })
    }
    lngOnChange = (event) => {
        this.setState({
            lng: event.target.value
        })
    }
    gameOnChange = (event) => {
        this.setState({
            game: event.target.value
        })
    }
    dayOnChange = (event) => {
        this.setState({
            day: event.target.value
        })
    }
    timeOnChange = (event) => {
        this.setState({
            time: event.target.value
        })
    }
    linkOnChange = (event) => {
        this.setState({
            link: event.target.value
        })
    }
      handleSubmit = (e) => {
        // this.props.dispatch(addUser(this.state));
        console.log(this.state)
        this.setState({
           
        })
      }

    render() {
        return (
            <React.Fragment>
                <Card id="SUPCard" className='large'
                    actions={[ 
                        <div id="LOGSubmit">
                            <button onClick={ this.handleSubmit } class="btn waves-effect waves-light" type="submit" name="action">Post Event
                                <i class="material-icons right"></i>
                            </button>
                        </div>
                    ]}
                    >
                    
                    <div id="LOGContainer">
                        <Container>
                            <Row id="LOGContent">

                                <Input onChange={ this.titleOnChange } value={this.state.title} s={12} label="event title" placeholder="EX: Smash Brothers Friday's Final Destination at Guardian Games" />
                                <Input  onChange={ this.gameOnChange } id="createGameSelect" s={12} type='select' label='Game' icon='games' defaultValue='1' >
                                    <option value='none'>choose a game</option>
                                    <option value='Street Fighter 5'>Street Fighter 5</option>
                                    <option value='Super Smash Wii-u'>Super Smash Wii-u</option>
                                    <option value='Magic the Gathering'>Magic the Gathering</option>
                                    <option value='Yu-gi-oh'>Yu-gi-oh</option>
                                </Input>
                                <Input onChange={ this.latOnChange } value={this.state.lat} type="number" label="latitude" placeholder="39.683099" s={6} />
                                <Input onChange={ this.lngOnChange } value={this.state.long} type="number" label="longitude" placeholder="-86.148345" s={6} />
                                <Input onChange={ this.dayOnChange } value={this.state.day} type="text" label="Day of the week" placeholder="EX: Friday" s={6} />
                                {/* <Input onChange={ this.timeOnChange } value={this.state.time} type="text" label="time" placeholder="EX: 3:00pm" s={6} />
                                <Input onChange={ this.linkOnChange } value={this.state.link} type="text" label="link" placeholder="EX: https://www.facebook.com/events/1410766155717859/ " s={12} /> */}



                                {/* <Input name='on' type='time' onChange={function(e, value) {}} />
                                <Input name='on' type='date' onChange={function(e, value) {}} /> */}

                            </Row>
                        </Container>
                    </div>
                </Card>
                
            </React.Fragment>
        );
    };
};

export default CreateEvent;