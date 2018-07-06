import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';


class SignUp extends React.Component {

    state = {

        first: '',
        last: '',
        username: '',
        password: '',
        email: ''

      }
    
    firstOnChange = (event) => {
        this.setState({
            first: event.target.value
        })  
    }
    lastOnChange = (event) => {
        this.setState({
            last: event.target.value
        })
    }
    usernameOnChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordOnChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    emailOnChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
      handleSubmit = (e) => {
        // this.props.dispatch(addUser(this.state));
        console.log(this.state)
        this.setState({
            first: '',
            last: '',
            username: '',
            password: '',
            email: '',
        })
      }

    render() {
        return (
            <React.Fragment>
                <Card id="SUPCard" className='large'
                    actions={[ 
                        <div id="SUPSubmit">
                            <button onClick={ this.handleSubmit }class="btn waves-effect waves-light" type="submit" name="action">Sign Up
                                <i class="material-icons right">pool</i>
                            </button>
                        </div>
                    ]}
                    >
                    
                    <div id="SUPContainer">
                        <Container>
                            <Row id="SUPContent">
                                <Input onChange={ this.firstOnChange } value={this.state.first} placeholder="First Name" s={6} label="Name" />
                                <Input onChange={ this.lastOnChange } value={this.state.last} s={6} label="" placeholder="Last Name" />
                                <Input onChange={ this.usernameOnChange } value={this.state.username} s={12} label="username" placeholder="username" />
                                <Input onChange={ this.passwordOnChange } value={this.state.password} type="password" label="password" s={12} />
                                <Input onChange={ this.emailOnChange } value={this.state.email} type="email" label="Email" s={12} />
                            </Row>
                        </Container>
                    </div>
                </Card>
                
            </React.Fragment>
        );
    };
};

export default SignUp;