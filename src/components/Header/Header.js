import React, { Component } from 'react'
import Brand from './Brand'
import Menu from './Menu'

class Header extends Component {
 
  render() {

    return (
      <header className="headerBackground">
        <div className="headerWrapper">
          <Brand />
          <Menu />
        </div> 
      </header>
    )
  }
}

export default Header