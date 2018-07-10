import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';


class SignUp extends React.Component {

    state = {

        name: '',
        username: '',
        password1: '',
        password2: '',
        email: '',

      }
    
    nameOnChange = (event) => {
        this.setState({
            name: event.target.value
        })  
    }
    usernameOnChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    password1OnChange = (event) => {
        this.setState({
            password1: event.target.value
        })
    }
    password2OnChange = (event) => {
        this.setState({
            password2: event.target.value
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

        fetch("http://159.65.38.99/users/register-raw",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        
                        
                    },
                    mode: "cors",
                    body: JSON.stringify({

                        name: this.state.name,
                        username: this.state.username,
                        password1: this.state.password1,
                        password2: this.state.password2,
                        email: this.state.email,

                    }),
                })
                .then(response => response.json())
                .then(data => {
                    alert("You've been registered!")
                })
                .then(data => {
                    console.log("This message was posted: ", data);
                })


        this.setState({
            name: '',
            username: '',
            password1: '',
            password2: '',
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
                                <Input onChange={ this.nameOnChange } value={this.state.name} placeholder="First Name" s={12} label="Name" />
                                <Input onChange={ this.usernameOnChange } value={this.state.username} s={12} label="username" placeholder="username" />
                                <Input onChange={ this.password1OnChange } value={this.state.password1} type="password" label="password" s={6} />
                                <Input onChange={ this.password2OnChange } value={this.state.password2} type="password" label="password" s={6} />
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