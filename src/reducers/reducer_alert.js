export const alertMsg = (state = '', action) => {
    if(action.type === 'ALERT_MSG') {
        return action.payload;
    }

    return state;
}