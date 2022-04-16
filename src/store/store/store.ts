import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducerGetCountry} from "../reducers/reducerGetCountry";

const rootReducer = combineReducers({
    countries: reducerGetCountry,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store;