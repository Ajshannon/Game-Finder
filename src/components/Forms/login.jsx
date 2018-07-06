import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';


class Login extends React.Component {

    state = {

        first: '',
        last: '',
        username: '',
        password: '',
        email: ''

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


                                <Input onChange={ this.usernameOnChange } value={this.state.username} s={12} label="username" placeholder="username" />
                                <Input onChange={ this.passwordOnChange } value={this.state.password} type="password" label="password" s={12} />

                            </Row>
                        </Container>
                    </div>
                </Card>
                
            </React.Fragment>
        );
    };
};

export default Login;