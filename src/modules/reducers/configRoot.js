import { combineReducers, createStore } from 'redux';
import {chooseReducer} from './chooseReducer';
import { userNameReducer } from './getNameReducer';

const rootReducer = combineReducers({
    chooseReducer,
    userNameReducer,
})

export const store = createStore(
        rootReducer, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );