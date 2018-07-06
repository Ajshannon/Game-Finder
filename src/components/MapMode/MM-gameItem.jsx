import React from 'react';
import { Card, CardTitle, Col,  } from 'react-materialize';


class MMGameItem extends React.Component{
    render(){
        return (
            <Col s={6} id="cardCol">
                <Card class="btn waves-effect waves-light">
                    <CardTitle image="http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/06/Switch_SuperSmashBrosUltimate_illustration_021.png">
                            
                    </CardTitle>
                </Card>
            </Col>
        )
    }
}

{/* <a class="btn waves-effect waves-light" > 
            <img id="btnImg"image="http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/06/Switch_SuperSmashBrosUltimate_illustration_021.png" />
                    
            </a> */}


export default MMGameItem;