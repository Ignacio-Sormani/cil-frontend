import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth/reducers';
import product from './product/reducers';

const rootReducer = combineReducers({
  auth,
  product
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  blacklist: ['product']
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
