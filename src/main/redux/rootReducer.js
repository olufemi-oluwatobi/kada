import {combineReducers} from 'redux';
import productData from '../../features/products/reducer';

const reducers = {productData};

const rootReducers = combineReducers(reducers);
export default rootReducers;
