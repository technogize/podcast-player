export const getPlaylist = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYLIST':
            return [...state, action.payload];
        case 'REMOVE_FROM_PLAYLIST':
            let playlistWithTrackRemoved = state.filter((item) => {                
                return item.guid !== action.payload;
            });

            return playlistWithTrackRemoved;
        default:
            return state
    }
}