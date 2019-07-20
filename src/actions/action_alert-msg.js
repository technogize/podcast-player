export const setAlertMsg = (message) => {
    return {
        type: 'ALERT_MSG',
        payload: message
    }
}