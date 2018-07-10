import React from 'react';
import { Card, CardTitle, Col,  } from 'react-materialize';
// import MapContainer from './MapContainer'

class PopGameItem extends React.Component{
    
    render(){
        return (
            <React.Fragment>
            <Col id="popCard" s={3}>
                <Card>
                    <CardTitle image="/images/magic.jpg">
                            
                    </CardTitle>                    
                </Card>
            </Col>
            <Col id="popCard" s={3}>
                <Card>
                    <CardTitle image="/images/yugioh.jpg">
                            
                    </CardTitle>                    
                </Card>
            </Col>
            <Col id="popCard" s={3}>
                <Card>
                    <CardTitle image="/images/settlersofcatan.jpg">
                            
                    </CardTitle>                    
                </Card>
            </Col>
            <Col id="popCard" s={3}>
                <Card>
                    <CardTitle image="/images/smashwiiu.jpg">
                            
                    </CardTitle>                    
                </Card>
            </Col>
            <Col id="popCard" s={3}>
                <Card>
                    <CardTitle image="/images/smashmelee.jpg">
                            
                    </CardTitle>                    
                </Card>
            </Col>
            <Col id="popCard" s={3}>
                <Card>
                    <CardTitle image="/images/streetfighter5.jpg">
                            
                    </CardTitle>                    
                </Card>
            </Col>
            <Col id="popCard" s={3}>
                <Card>
                    <CardTitle image="/images/dnd.jpg">
                            
                    </CardTitle>                    
                </Card>
            </Col>
            <Col id="popCard" s={3}>
                <Card>
                    <CardTitle image="/images/pathfinder.jpg">
                            
                    </CardTitle>                    
                </Card>
            </Col>
            </React.Fragment>
        )
    }
}

export default PopGameItem;