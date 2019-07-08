export const addPlaylist = (track) => {
    return {
        type: 'ADD_PLAYLIST',
        payload: track
    }
}

export const removePlaylistItem = (guid) => {
    return {
        type: 'REMOVE_FROM_PLAYLIST',
        payload: guid
    }
}