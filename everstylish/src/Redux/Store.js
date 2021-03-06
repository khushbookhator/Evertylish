import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './Cart/Reducer';
import { productReducer } from './Products/Reducer';

const rootReducer = combineReducers({
    data:productReducer,
    cart: cartReducer
})
export const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);