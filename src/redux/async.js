const REQUEST = 'REQUEST';
const RESPONSE = 'RESPONSE';
const ERROR = 'ERROR';

const requestAction = (name) => ({ 
    type: REQUEST,
    name 
});
const responseAction = (name, data) => ({
  type: RESPONSE,
  name,
  data
});
const errorAction = (name, error) => ({
  type: ERROR,
  name,
  error
});

const defaultState = {
  status: 'idle',
  data: null,
  error: ''
};

const asyncAction = (promise, name='') => (...args) => function(dispatch) {
    dispatch(requestAction(name));
    promise(...args).then(data => {
        dispatch(responseAction(name, data));
    }).catch(error => {
        dispatch(errorAction(name, error));
    });
};

const asyncReducer = (name = '') => (function (state=defaultState, action) {
    if(action.name != name) return state;
    switch(action.type) {
        case REQUEST:
        return {
            status: 'pending',
            data: null,
            error: ''
        };
        case RESPONSE:
        return {
            status: 'success',
            data: action.data,
            error: ''
        };
        case ERROR:
        return {
            status: 'error',
            data: null,
            error: action.error
        };
        default:
        return state;
    }
});

export { asyncAction, asyncReducer };