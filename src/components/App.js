import React, { Component } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import LandingPage from './LandingPageComponents/landingPage'

class App extends Component {
  render() {
    return (
      <section className="appContainer">
        <Header />
        <main className="mainConentWrapper">
          {this.props.children}
        </main>
        <Footer />
      </section>
    );
  }
}

export default App;
