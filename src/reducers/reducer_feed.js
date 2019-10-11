export const feed = (state = {}, action) => {
    if(action.type === 'GET_FEED') {
        console.log(action.payload);
        return action.payload;
    }

    return state;
}