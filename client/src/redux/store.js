import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { TodoReducer } from './features/Todo';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
    TodoReducer
    // add another reducers bro!!!
  })
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
