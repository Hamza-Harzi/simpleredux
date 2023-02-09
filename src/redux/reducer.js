const initState = [];
const Reducer = (state = initState, action) => {
    if ("Add") {
        return [...state, action.user];
    } else {
        return state;
    }
};

export default Reducer;