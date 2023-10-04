import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { ShopReducer } from './features/shop';
import { LikeReducer } from './features/like';
import UserSlice from './features/user';


const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
    // add another reducers bro!!!
    ShopReducer,
    LikeReducer,
    User:UserSlice.reducer
  
  })
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
