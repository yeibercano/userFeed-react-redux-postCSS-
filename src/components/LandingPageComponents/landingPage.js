import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getFeed } from '../../actions/index'
import TimeAgo from 'react-timeago'
import Menu from '../Header/Menu'

class LandingPage extends Component {
  
  componentDidMount() {
    this.props.getFeed()
  }

  handleNodeString(type) {
    if (type === "Reply") {
      return `replied to a comment on the idea`
    } else if (type === "Idea") {
      return `posted an idea`
    } else if (type === "Comment") {
      return `commented on the idea`
    }
  }

  handleCard(card) {
    return (
      <article key={card.nodeid} className="messageContainer">
        <section id="cardImage">
          <img className="avatarFeed imagesFilter" 
               src={`../..${card.authorAvatar}`} 
               alt={card.title} 
               title={card.title} />
        </section>
        <section id="cardInfo" className="flexContainerColumn">
          <h3 className="author">
            {card.author}
            <span className="feedStatusType">
              {this.handleNodeString(card.nodeTypeString)}
            </span>
          </h3>
          <h3>{card.title}</h3>
          <TimeAgo date={card.postDate} className="timeAgo" />
        </section>
      </article>
    )
  }

  render() {
    const { recentActivity } = this.props;

    return (
      <main id="mainContent" className="flexContainerColumn centerContainer"> 
        <nav className="flexContainerRow titleContainer">
          <span className="lessThan">&lt;</span>
          <h1 className="sectionTitle">Activity</h1>
          <Menu />
        </nav>
        <section id="feedContainer" className="flexContainerColumn feedContainer">
          { recentActivity.map(card => this.handleCard(card)) }
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({ recentActivity: state.feed.recentActivity })

export default connect(mapStateToProps, { getFeed })(LandingPage);