import React from 'react';
import { Collapsible, CollapsibleItem,  } from 'react-materialize';
import MMGamesList from './MM-gamesList';

class MMCollapsible extends React.Component{
    render(){
        return (
            
            <Collapsible id="MMCollasible" defaultActiveKey={0}>
                <CollapsibleItem id="MMCollasible1" header='Game' icon='games'>
                    <MMGamesList />
                </CollapsibleItem >
                <CollapsibleItem header='Saved' icon='place'>
                    
                </CollapsibleItem>
                <CollapsibleItem header='Third' icon='whatshot'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
            </Collapsible>
        )
    }
}

export default MMCollapsible;