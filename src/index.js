import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'firebase/auth';



const store = createStore(rootReducer, { displayStateReducer: { display: 'NEIGHBOR_LIST', selectedNeighbor: null }});

const rrfProps = {
  firebase,
  config: {
        userProfile: "users",
        useFirestoreForProfile: true,
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
