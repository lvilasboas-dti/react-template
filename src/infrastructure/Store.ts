import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import { adminSlice } from '../features/admin/Admin.slice';

const getPersistConfig = (key: string) => ({ key, storage });

const reducers = combineReducers({
    admin: persistReducer<ReturnType<typeof adminSlice.getInitialState>>(getPersistConfig(adminSlice.name), adminSlice.reducer),
});

export const store = configureStore({ reducer: reducers, devTools: true, middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }) });

export const makeStore = () => store;
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
