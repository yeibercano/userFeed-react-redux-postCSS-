import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getFeed } from '../../actions/index'

class LandingPage extends Component {
  
  componentDidMount() {
    this.props.getFeed()
  }

  handleNodeString(type) {
    if (type === "Reply") {
      return `replied on the idea`
    } else if (type === "Idea") {
      return `posted an idea`
    } else if (type === "Comment") {
      return `commented on the idea`
    }
  }

  handleCard(card) {
    return (
      <article key={card.nodeid} className="flexContainerRow">
        <section id="cardImage">
          <img src={card.authorAvatar} alt={card.title} title={card.title}/>
        </section>
        <section id="cardInfo" className="flexContainerColumn">
          <h3>{card.author }<span className="">{this.handleNodeString(card.nodeTypeString)}</span></h3>
          <h2>{card.title}</h2>
        </section>
      </article>
    )
  }

  render() {
    const { recentActivity } = this.props;
    return (
      <main id="mainContent" className="flexContainerColumn centerContainer"> 
        <h1 className="sectionTitle">Activity</h1>
        <section id="feedContainer" className="flexContainerColumn">
          { recentActivity.map(card => this.handleCard(card)) }
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({ recentActivity: state.feed.recentActivity })

export default connect(mapStateToProps, { getFeed })(LandingPage);