import React from 'react';
import ReactDOM from 'react-dom';
// redux
import {createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/reducers'
import sagaWatcher from './sagas/getDataSaga'

// router
import { BrowserRouter  } from 'react-router-dom'

// dev
import { BaseLayout } from './BaseLayout'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk,sagaMiddleware), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter  >
      <BaseLayout/>
    </BrowserRouter >
  </Provider>,
  document.getElementById('root')
)

// saga run 
sagaMiddleware.run(sagaWatcher)