import React, { Component } from 'react'
import LandingPage from './LandingPageComponents/landingPage'

class App extends Component {
  render() {
    return (
      <section className="appContainer">
        <div className="mainContentWrapper">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default App;
