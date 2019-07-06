import axios from 'axios';

export const getFeedData = (feedUrl) => {
    return (dispatch) => {
        let getPodcastFeed = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}&api_key=uinayq1men3fjraoynlunbj1oljdxvzq57wdfo4v&count=1000`;

        axios.get(getPodcastFeed).then(function (response) {
            dispatch({
                type: 'GET_FEED',
                payload: response.data
            });
        })
        .catch(function (error) {
            // handle error
            console.error(error);
            dispatch({
                type: 'GET_FEED',
                payload: ''
            });
        });
    }    
}