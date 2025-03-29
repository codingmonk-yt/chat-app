// make our code cleaner and easy to understand
import { configureStore } from '@reduxjs/toolkit'; // Note the corrected import path
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux'; // manage the state of the app
import { persistStore, persistReducer } from 'redux-persist'; // data is not loss after tab close on browser
import { rootPersistConfig, rootReducer } from './rootReducer';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer), // get configs from user
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }), //writing and reading
});

const persistor = persistStore(store); // we pass our orginal store to this and this will give us modified store

const { dispatch } = store;

console.log('store', store);

const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export { store, persistor, dispatch, useSelector, useDispatch };
