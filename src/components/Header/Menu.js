import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {

  render() {
    return (
      <nav className="menu"> 
         <div className="dropdown menu"> 
          <button className="dropbtn dropdown menu">Menu</button>
          <div className="dropdown-content">
            <a href="#">action</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu

