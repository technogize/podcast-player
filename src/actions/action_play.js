export const setTrack = (episode) => {
    return {
        type: 'SET_TRACK',
        payload: episode
    }
}

/**
 * Sets play mode of audio player. 
 * 
 * ---- MODES ----
 * 'one-off' = (default) once current track finishes, there are no further tracks played. This will be used when a user clicks play on an episode directly from the podcast eps list
 * 'from-playlist' = this will play through the playlist. 
 * 
 * @param  {string} mode Player mode; either 'one-off' or 'from-playlist'
 */
export const setPlayMode = (mode) => {
    return {
        type: 'SET_PLAY_MODE',
        payload: mode
    }
}