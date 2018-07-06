import React from 'react';
import { Row, Input, Container, Card, CardTitle, } from 'react-materialize';


class SignUp extends React.Component {

    state = {

        text: '',

      }
    
    handleOnChange = (event) => {
    this.setState({
        text: event.target.value
    })
    }
    
    //   handleSubmit = (e) => {
    //     this.props.dispatch(addMessage(this.state.text));
    //     this.setState({
    //       text: ''
    //     })
    //   }

    render() {
        return (
            <React.Fragment>
                <Card id="SUPCard" className='large'
                    actions={[ 
                        <div id="SUPSubmit">
                            <button class="btn waves-effect waves-light center-align" type="submit" name="action">Submit
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    ]}
                    >
                    
                    <div id="SUPContainer">
                        <Container>
                            <Row id="SUPContent">
                                <Input placeholder="First Name" s={6} label="Name" />
                                <Input s={6} label="" placeholder="Last Name" />

                                <Input type="password" label="password" s={12} />
                                <Input type="email" label="Email" s={12} />
                            </Row>
                        </Container>
                    </div>
                </Card>
                
            </React.Fragment>
        );
    };
};

export default SignUp;