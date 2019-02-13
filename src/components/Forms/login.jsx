import React from 'react';
import { Row, Input, Container, Card, } from 'react-materialize';
import { login } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


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
        fetch("http://138.197.70.171/users/login-raw",
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
            this.props.dispatch(login(data));
            console.log(data);
        
            if (this.props.token) {
              this.setState({ loggedIn: true });
            } else {
              alert("Please register first.");
            }
          })
          this.props.history.push("/map")
          
      }

    render() {
        return (
            <React.Fragment>
                <Card id="SUPCard" className='large'
                    actions={[ 
                        <div id="LOGSubmit">
                            <button onClick={ this.handleLogin } className="btn waves-effect waves-light" type="submit" name="action">Login
                                <i className="material-icons right"></i>
                            </button>
                        </div>
                    ]}>
                    
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

const mapStateToProps = (state) => {
    return { token: state.token }
  }

export default withRouter(connect(mapStateToProps)(Login));