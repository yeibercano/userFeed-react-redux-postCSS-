import React, { Component } from 'react';
import { Link } from 'react-router';

class Brand extends Component {

  render() {
    return (
      <nav className="brand"> 
        <Link to='/home'>
          <h1>BRAND</h1>
        </Link>
      </nav>
    );
  }
}

export default Brand

