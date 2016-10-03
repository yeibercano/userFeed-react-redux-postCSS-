import React, { Component } from 'react'
import Brand from './Brand'

class Header extends Component {
 
  render() {

    return (
      <header className="headerBackground">
        <div className="headerWrapper">
          <Brand />
        </div> 
      </header>
    )
  }
}

export default Header