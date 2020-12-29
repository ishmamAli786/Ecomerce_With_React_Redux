import {createStore,combineReducers} from 'redux';
import productReducer from './reducers/productReducer';
import CartReducer from './reducers/CartReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
const root=combineReducers({
    productReducer,
    CartReducer
})


const store = createStore(root, devToolsEnhancer());

export default store;