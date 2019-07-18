import React, {Component} from 'react';
import { connect } from 'react-redux';
import feeds from './config/feeds-url.json';
import {bindActionCreators} from 'redux';
import {getFeedData} from './actions/action_get-data';
import './Podcasts.scss';

class Podcasts extends Component {
    
    selectPodcast = (e) => {
      this.props.getFeedData(e.currentTarget.dataset.url);
    }
  
    listPodcasts = () => {
      return feeds.map((feed) => { 
          
        return  <div className="podcast" onClick={this.selectPodcast} data-id={feed.id} data-url={feed.url}>
                    <input type="radio" className="podcast__radio" id={'podcast_' + feed.id} name="podcast" value={feed.title} />
                    <label  className="podcast__label"
                            htmlFor={'podcast_' + feed.id} 
                            key={feed.id}>{feed.title}</label>   
                </div>
      });
    }
  
    render() {
        return (            
            <div className="podcasts">
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
  