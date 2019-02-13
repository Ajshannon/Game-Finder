import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';
import { connect } from 'react-redux';

class CreateEvent extends React.Component {

    state = {
        
        title: "",
        author: "",
        lat: 0,
        lng: 0,
        game: "",
        day: "",
        time: "",
        link: ""

      }

    titleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    authorOnChange = (event) => {
        this.setState({
            author: event.target.value
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

        fetch("http://138.197.70.171/events/add-raw",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.props.token,
                    },
                    mode: "cors",
                    body: JSON.stringify({

                        title: this.state.title,
                        author: this.props.token,
                        lat: this.state.lat,
                        lng: this.state.lng,
                        game: this.state.game,
                        day: this.state.day,
                        time: this.state.time,
                        link: this.state.link,

                    }),
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .then(
                    this.setState({
                        title: "",
                        author: "",
                        lat: 0,
                        lng: 0,
                        game: "",
                        day: "",
                        time: "",
                        link: ""                
                    })
                )
      }

    render() {
        return (
            <React.Fragment>
                <Card id="SUPCard" className='large'
                    actions={[ 
                        <div id="LOGSubmit">
                            <button onClick={ this.handleSubmit } className="btn waves-effect waves-light" type="submit" name="action">Post Event
                                <i className="material-icons right"></i>
                            </button>
                        </div>
                    ]}
                    >
                    
                    <div id="LOGContainer">
                        <Container>
                            <Row id="LOGContent">

                                <Input onChange={ this.titleOnChange } value={this.state.title} s={12} label="event title" placeholder="EX: Smash Brothers Friday's Final Destination at Guardian Games" />
                                <Input onChange={ this.authorOnChange } value={this.state.author} s={12} label="author" placeholder="EX: Juan-dicimo" />
                                <Input onChange={ this.gameOnChange } s={12} type='select' label='Game' icon='games'  defaultValue="choose a game">
                                    <option value='none'>choose a game</option>
                                    <option value='Street Fighter 5'>Street Fighter 5</option>
                                    <option value='Super Smash Wii-u'>Super Smash Wii-u</option>
                                    <option value='Magic the Gathering'>Magic the Gathering</option>
                                    <option value='Yu-gi-oh'>Yu-gi-oh</option>
                                    <option value='Settlers of Catan'>Settlers of Catan</option>
                                    <option value='Super Smash Bros. Melee'>Super Smash Bros. Melee</option>
                                    <option value='Dungeons and Dragons'>Dungeons and Dragons</option>
                                    <option value='Pathfinder'>Pathfinder</option>
                                </Input>
                                <Input onChange={ this.latOnChange } value={this.state.lat} type="number" label="latitude" placeholder="39.683099" s={6} />
                                <Input onChange={ this.lngOnChange } value={this.state.lng} type="number" label="longitude" placeholder="-86.148345" s={6} />
                                <Input onChange={ this.dayOnChange } id="daySelect"  type="select" label="Day of the week" defaultValue="choose a day" s={6} >
                                    <option value='Choose a day'>Choose a day</option>
                                    <option value='Sunday'>Sunday</option>
                                    <option value='Monday'>Monday</option>
                                    <option value='Tuesday'>Tuesday</option>
                                    <option value='Wednesday'>Wednesday</option>
                                    <option value='Thursday'>Thursday</option>
                                    <option value='Friday'>Friday</option>
                                    <option value='Saturday'>Saturday</option>
                                </Input>
                                <Input onChange={ this.timeOnChange } value={this.state.time} type="text" label="Time" placeholder="Ex: 7:00pm" s={6} />
                                <Input onChange={ this.linkOnChange } value={this.state.link} type="text" label="link" placeholder="http://www.example.com/" s={12} />



                            </Row>
                        </Container>
                    </div>
                </Card>
                
            </React.Fragment>
        );
    };
};
const mapStateToProps = (state) => {
    return { token: state.token }
  }

export default connect(mapStateToProps)(CreateEvent);