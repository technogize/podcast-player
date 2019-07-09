export const playMode = (state = 'one-off', action) => {
    if(action.type === 'SET_PLAY_MODE') {
        return action.payload;
    }

    return state;
}