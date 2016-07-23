import React from 'react'; 
import { Link } from 'react-router'; 
import LoginFB from './LoginFB';
//
export default React.createClass({ 
    render() { 
        return (
            <nav>
              <ul className="left">
                    <li>
                      <Link to="/" activeClassName="active" >Home</Link>
                    </li>
                    <li>
                      <Link to="/Like" activeClassName="active" >Like</Link>
                    </li>
                    <li>
                      <Link to="/Message" activeClassName="active" >Message</Link>
                    </li>

              </ul>
              <ul className="right">
                    <li>
                        <div id="facebook-login"> < LoginFB  fb={FB} /> </div>
                    </li>
              </ul>
            </nav>
) } }); 

