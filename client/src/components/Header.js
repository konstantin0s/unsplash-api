import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './img/unsplash.png';
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
                        <img className="logo" src={logo} alt="logo"/>
            </div>

            <Link style={linkStyle} className="link" to="/">Random</Link>
            <Link style={linkStyle} className="link" to="/unsplash">Images</Link>
            <Link style={linkStyle} className="link" to="/collections">Collections</Link>
          </nav>

        </header>

        <header className="sub-header">
          <nav className="sub-nav">
            <div className="nav-container">
              <Link style={linkStyle} className="sub-link" to="/animals">Animals</Link>

              <Link style={linkStyle} className="sub-link" to="/nature">Nature</Link>
              <Link style={linkStyle} className="sub-link" to="/wallpapers">Wallpapers</Link>
              <Link style={linkStyle} className="sub-link" to="/people">People</Link>
              <Link style={linkStyle} className="sub-link" to="/travel">Travel</Link>
            </div>
          </nav>
        </header>
      </React.Fragment>
    )
  }
}

const linkStyle = {
  textDecoration: "none",
  marginRight: "20px",
  marginLeft: "20px"
};

export default Header;