import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';
import { login } from '../../actions';
import { connect } from 'react-redux';


class Login extends React.Component {

    state = {

        username: '',
        password: '',

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
  
    handleLogin = () => {
        console.log("Fetching... ")
        fetch("https://kwitter-api.herokuapp.com/auth/login",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            }),
          })
          .then(response => response.json())
          .then(data => {
            this.props.dispatch(login(data.token));
            if (data.token) {
              this.setState({ loggedIn: true });
            } else {
              alert("Please register first.");
            }
          })
          .then(
              console.log("Fetching Complete")
          )
          
      }

    render() {
        return (
            <React.Fragment>
                <Card id="SUPCard" className='large'
                    actions={[ 
                        <div id="LOGSubmit">
                            <button onClick={ this.handleLogin }class="btn waves-effect waves-light" type="submit" name="action">Login
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

export default connect()(Login);