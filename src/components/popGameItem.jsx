import React from 'react';
import { Card, CardTitle, Col, Modal,  } from 'react-materialize';
import MapContainer from './MapContainer'

class PopGameItem extends React.Component{
    render(){
        return (
            <Col s={6}>
                <Card>
                    <Modal
                    header='Modal Header'
                    trigger={
                        <CardTitle image="http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/06/Switch_SuperSmashBrosUltimate_illustration_021.png">
                                
                        </CardTitle>}>
                        <MapContainer />
                    </Modal>
                    
                </Card>
            </Col>
        )
    }
}

export default PopGameItem;