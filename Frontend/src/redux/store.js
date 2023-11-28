import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as notesReducer } from "./notesReducer/reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    authReducer,
    notesReducer
})

const persistConfig = {
    key: 'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)