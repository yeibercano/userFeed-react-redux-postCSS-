import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getFeed } from '../../actions/index'

class LandingPage extends Component {
  
  componentDidMount() {
    this.props.getFeed()
  }

  handleMessage(message) {
    return (
      <article key={message.nodeid} className="message">
        <h2>{message.title}</h2>
        <img src={message.authorAvatar} alt={message.title} title={message.title}/>
      </article>
    )
  }

  render() {
    const { recentActivity } = this.props;
    return (
      <main className="flexContainerRow"> 
        <h1>Activity</h1>
        { recentActivity.map(message => this.handleMessage(message)) }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({ recentActivity: state.feed.recentActivity })

export default connect(mapStateToProps, { getFeed })(LandingPage);