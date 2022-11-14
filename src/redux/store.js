import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/reducerFilter';
import contactsReducers from './contacts/contactsSlice';
import authReducers from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducers);

export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filter: filterReducer,
        auth: persistedReducer,
    },
    middleware(getDefaultMiddleware){
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    },
});

export const persistor = persistStore(store);

