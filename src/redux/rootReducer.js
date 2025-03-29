// going to take all of the slices thst we creating and combining all the reducers
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import appReducer from './slices/app';
import authReducer from './slices/auth';

// slices

// define some root configurations showing data in our redux store

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',

  // whitelist :[], // we can define the all of the states if you want to perisists
  // blacklist :[] // we can define the name of the reducer that we dont want to persists
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});
export { rootPersistConfig, rootReducer };
