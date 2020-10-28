const SET = 'SET';
const CLEAR = 'CLEAR';

const set = data => ({
    type: SET,
    data
});

const clear = () => ({ type: CLEAR }); 

const defaultState = {
    present: false,
    data: {}
}

function storeReducer(state = defaultState, action) {
    switch(action.type) {
        case SET:
            return {
                present: true,
                data: action.data
            }
        case CLEAR:
            return defaultState;
        default:
            return state;
    }
}

export { set, clear, storeReducer };
