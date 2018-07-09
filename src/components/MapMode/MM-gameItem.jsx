import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';


class MMGameItem extends React.Component {
    render() {
        
        return (
            <React.Fragment>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/games/streetfighter5-logo.png">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/games/smashwiiu-logo.png">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/games/yugioh-logo.png">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/games/magic-logo.png">
                            
                        </CardTitle>
                    </Card>
                </Col>
                
            </React.Fragment>
        )
    }
}


export default MMGameItem;