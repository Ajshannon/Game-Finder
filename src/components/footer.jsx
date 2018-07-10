import React from "react";
import { Link } from 'react-router-dom';
import { Footer } from 'react-materialize';





class MMNavbar extends React.Component {

  render() {
      return (
        
        <Footer copyrights="&theres is no 2018 Copyright pterodactyl bros"
            // moreLinks={
            //   <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            // }
            links={
              <ul>
                <li><Link className="grey-text text-lighten-3" to="/map">map</Link></li>
                <li><Link className="grey-text text-lighten-3" to="#!">login</Link></li>
                <li><Link className="grey-text text-lighten-3" to="#!">sign up</Link></li>
                <li><Link className="grey-text text-lighten-3" to="#!">create event</Link></li>
              </ul>
            }
            id="myFooter"

          >
              <h5 className="white-text">Game up</h5>
              <p className="grey-text text-lighten-4"></p>
      </Footer>
  
      );
  };
};

export default MMNavbar;