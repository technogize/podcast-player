export const feed = (state = {}, action) => {
    if(action.type == 'GET_FEED') {
        return action.payload;
    }

    return state;
}