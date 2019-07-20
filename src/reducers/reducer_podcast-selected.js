/**
 * @param  {object} state Expected format:
 * {
 *  id: 2,
 *  title: "NoSleep Podcast" 
 * }
 */
export const podcastSelected = (state = {}, action) => {
    if(action.type === 'PODCAST_SELECT') {
        return action.payload;
    }

    return state;
}