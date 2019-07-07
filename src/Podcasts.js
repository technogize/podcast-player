import React, {Component} from 'react';
import { connect } from 'react-redux';
import feeds from './config/feeds-url.json';
import {bindActionCreators} from 'redux';
import {getFeedData} from './actions/action_get-data';
import './Podcasts.css';

class Podcasts extends Component {
    
    selectPodcast = (e) => {
      console.log(e.currentTarget.dataset.url);
      this.props.getFeedData(e.currentTarget.dataset.url);
    }
  
    listPodcasts = () => {
      return feeds.map((feed) => { 
          
        return  <div onClick={this.selectPodcast} data-id={feed.id} data-url={feed.url} key={feed.id}>
                    <span>{feed.title}</span>
                </div>
      });
    }
  
    render() {
        return (            
            <div className="podcast-list">
                {this.listPodcasts()}
            </div>                    
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getFeedData: getFeedData
    }, dispatch);
}


export default connect(null, mapDispatchToProps)(Podcasts);
  