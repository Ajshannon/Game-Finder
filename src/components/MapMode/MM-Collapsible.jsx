import React from 'react';
import { Collapsible, CollapsibleItem,  } from 'react-materialize';
import MMGamesList from './MM-gamesList';

class MMCollapsible extends React.Component{
    render(){
        return (
            
            <Collapsible id="MMCollasible" defaultActiveKey={0}>
                <CollapsibleItem id="MMCollasible1" header='Games' icon='games'>
                    <MMGamesList />
                </CollapsibleItem >
                
            </Collapsible>
        )
    }
}

export default MMCollapsible;