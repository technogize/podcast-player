import React, {Component} from 'react';
import { connect } from 'react-redux';
import feeds from './config/feeds-url.json';
import {bindActionCreators} from 'redux';
import {getFeedData} from './actions/action_get-data';
import {podcastSelect} from './actions/action_podcast-select';

class Podcasts extends Component {
    
    selectPodcast = (e) => {
      let selectedPodcast = {
        id: parseInt(e.currentTarget.dataset.id),
        title: e.currentTarget.dataset.title
      }
      this.props.getFeedData(e.currentTarget.dataset.url);
      this.props.podcastSelect(selectedPodcast);
    }
  
    listPodcasts = () => {
      return feeds.map((feed) => { 
        let podcastItemClass = 'podcast';
        
        if(feed.id === this.props.podcastSelected.id) {
            podcastItemClass += ' active'
        }
          
        return  <div className={podcastItemClass} onClick={this.selectPodcast} key={feed.id} data-id={feed.id} data-url={feed.url} data-title={feed.title}>
                    <span>{feed.title}</span>
                </div>
      });
    }
  
    render() {
        return (            
            <div className="podcasts">
              <h2 className="c-list__title">Podcasts</h2>
              {this.listPodcasts()}
            </div>                    
        )
    }
}


const mapStateToProps = (state) => {
    return {
        podcastSelected: state.podcastSelected
    }
  }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getFeedData: getFeedData,
        podcastSelect: podcastSelect
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
  