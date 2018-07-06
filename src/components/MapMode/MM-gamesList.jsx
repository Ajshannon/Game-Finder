import React from 'react';
import { Row } from 'react-materialize';
import MMGameItem from './MM-gameItem';


class MMGamesList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    <MMGameItem />
                    <MMGameItem />
                    <MMGameItem />
                    <MMGameItem />
                    <MMGameItem />
                    <MMGameItem />
                    <MMGameItem />
                    <MMGameItem />
               </Row>
            </React.Fragment>
        );
    };
};

export default MMGamesList;