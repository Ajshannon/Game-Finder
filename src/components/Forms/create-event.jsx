import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';


class CreateEvent extends React.Component {

    state = {
        
        user: '',
        title: ``,
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
                <Card id="SUPCard" className='large'
                    actions={[ 
                        <div id="LOGSubmit">
                            <button onClick={ this.handleSubmit }class="btn waves-effect waves-light" type="submit" name="action">Login
                                <i class="material-icons right"></i>
                            </button>
                        </div>
                    ]}
                    >
                    
                    <div id="LOGContainer">
                        <Container>
                            <Row id="LOGContent">

                                <Input onChange={ this.titleOnChange } value={this.state.title} s={12} label="username" placeholder="EX: Smash Brothers Friday's Final Destination at Guardian Games" />
                                <Input onChange={ this.latOnChange } value={this.state.lat} type="password" label="password" s={6} />
                                <Input onChange={ this.lngOnChange } value={this.state.long} type="password" label="password" s={6} />
                            </Row>
                        </Container>
                    </div>
                </Card>
                
            </React.Fragment>
        );
    };
};

export default CreateEvent;