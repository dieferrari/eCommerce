import { combineReducers } from 'redux';
import loadingReducer from './loading-reducer';
import singleProductReducer from './single-product-reducer';
import userReducer from './user-reducer';
import productsReducer from './products-reducer';
import categoryReducer from './category-reducer';
import userOrdersReducer from './user-order-reducer'

export default combineReducers ({
  loading: loadingReducer,
  singleProduct: singleProductReducer,
  user: userReducer,
  products: productsReducer,
  category: categoryReducer,
  userOrders: userOrdersReducer,
});