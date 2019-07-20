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
 * 'one-off' = (default) will play currently playing track. Next/Prev buttons will be disabled.
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