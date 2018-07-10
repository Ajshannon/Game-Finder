import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';


class MMGameItem extends React.Component {

    goSmashwiiu() {
        window.location = '#Super Smash Bros. for Wii U';
    }
    goSmashmelee() {
        window.location = '#Super Smash Bros. Melee';
    }
    goStreetfighter5() {
        window.location = '#Street Fighter V';
    }
    goMagic() {
        window.location = '#Magic: The Gathering';
    }
    goYugioh() {
        window.location = '#Yu-Gi-Oh!';
    }
    goSettlers() {
        window.location = '#Settlers of Catan';
    }

    render() {
        return (
            <React.Fragment>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle onClick={this.goMagic} image="/images/magic.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle onClick={this.goSettlers} image="/images/settlersofcatan.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle onClick={this.goSmashmelee} image="/images/smashmelee.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle onClick={this.goSmashwiiu} image="/images/smashwiiu.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle onClick={this.goStreetfighter5} image="/images/streetfighter5.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle onClick={this.goYugioh} image="/images/yugioh.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
            </React.Fragment>
        )
    }
}


export default MMGameItem;