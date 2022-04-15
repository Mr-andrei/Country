import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducerGetCountryByRegion} from "../reducers/reducerGetCountryByRegion";

const rootReducer = combineReducers({
    countries: reducerGetCountryByRegion,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store;