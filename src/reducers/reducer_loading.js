// This state will be an array of component names. If the component name exists
// in the array, that component will be in "loading state" i.e. a spinner with 
// everything disabled.
export const isLoading = (state = [], action) => {
    if(action.type === 'LOADING') {
        return action.payload;
    }

    return state;
}