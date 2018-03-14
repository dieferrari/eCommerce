import { combineReducers } from 'redux';
import loadingReducer from './loading-reducer';
import singleProductReducer from './single-product-reducer';
import userReducer from './user-reducer';
import productsReducer from './products-reducer';
import categoryReducer from './category-reducer';
import userOrdersReducer from './user-order-reducer'
import singleCategoryReducer from './single-category-reducer';
import {reducer as reducerForm} from 'redux-form'
import ordersReducer from './orders-reducer';
import allUsersReducer from './allUsers-reducer'
import flagReducer from './flag-reducer';
export default combineReducers ({
  loading: loadingReducer,
  singleProduct: singleProductReducer,
  products: productsReducer,
  category: categoryReducer,
  singleCategory: singleCategoryReducer,
  form: reducerForm,
  userOrders: userOrdersReducer,
  allUsers:allUsersReducer,
  user: userReducer,
  orders:ordersReducer,
  flag : flagReducer
});