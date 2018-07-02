import React from 'react';
import { Collapsible, CollapsibleItem, Button  } from 'react-materialize';
import MMGamesList from './MM-gamesList';

class MMCollapsible extends React.Component{
    render(){
        return (
            
            <Collapsible accordion defaultActiveKey={1}>
                <CollapsibleItem id="MMCollasible" header='Game' icon='games'>
                    <MMGamesList />
                </CollapsibleItem>
                <CollapsibleItem header='Second' icon='place'>
                    
                </CollapsibleItem>
                <CollapsibleItem header='Third' icon='whatshot'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
            </Collapsible>
            
        )
    }
}

export default MMCollapsible;