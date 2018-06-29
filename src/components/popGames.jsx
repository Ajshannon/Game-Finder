import React from 'react';
import { Row } from 'react-materialize';
import PopGameItem from './popGameItem.jsx';


class PopGames extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    <PopGameItem />
                    <PopGameItem />
                    <PopGameItem />
                    <PopGameItem />
               </Row>
            </React.Fragment>
        );
    };
};

export default PopGames;