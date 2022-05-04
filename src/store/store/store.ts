import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {getDataByNameReducer} from "../getDataByName/getDataByNameReducer";
import {appReducer} from "../appReducer/appReducer";


const rootReducer = combineReducers({
    userData: getDataByNameReducer,
    appData: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store;