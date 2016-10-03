import React, { Component } from 'react';
import { Link } from 'react-router';

class Brand extends Component {

  render() {
    return (
      <nav className="brand"> 
        <Link to='/home'>
          <h1>User Feed</h1>
        </Link>
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

export default Brand

