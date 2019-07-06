export const nowPlaying = (state = 'https://rss.art19.com/episodes/fc9feca4-bad2-4f7d-b8db-300413a8c87a.mp3', action) => {
    if(action.type == 'SET_TRACK') {
        return action.payload;
    }

    return state;
}