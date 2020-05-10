import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/header.css';

 class Header extends Component {
     
    render() {
        return (

            <React.Fragment>
            <header className="header" id="masthead">
                <nav className="links">
      <div className="loogo">
      <Link style={linkStyle} className="logoStyle" to="#">Unsplease</Link>
                <p>Photos for everyone</p>
      </div>
                    <Link style={linkStyle} className="link" to="/">Random</Link>
                    <Link style={linkStyle} className="link" to="/unsplash">Images</Link>
                    <Link style={linkStyle} className="link" to="/collections">Collections</Link>
                    {/* <Link style={linkStyle} className="link" to="/add">Upload</Link> */}
                </nav>
            </header>
        </React.Fragment>
        )
    }
}

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginRight: "20px",
    marginLeft: "20px"
  };

  

export default Header;