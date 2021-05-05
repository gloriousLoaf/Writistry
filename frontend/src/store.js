/* STORE */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import {
  blogListReducer,
  blogCreateReducer,
  blogUpdateReducer,
} from './reducers/blogReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  blogList: blogListReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
