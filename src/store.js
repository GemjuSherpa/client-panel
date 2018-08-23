import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

//Reducers
import notifyReducer from './reducers/notifyReducer'


const firebaseConfig = {
    apiKey: "AIzaSyDfrO12CkFVj74FvYs439O1OsPQRA_GCkQ",
    authDomain: "clientpanel-c9fe0.firebaseapp.com",
    databaseURL: "https://clientpanel-c9fe0.firebaseio.com",
    projectId: "clientpanel-c9fe0",
    storageBucket: "clientpanel-c9fe0.appspot.com",
    messagingSenderId: "456821136566"
};

//React-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    userFirestoreForProfile: true  //Firebase for profile instead of Realtime DB.
}

//initialize firebase instance
firebase.initializeApp(firebaseConfig);

//init firestore
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

//Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore)

//Root Reducer
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer
})

//create initial state
const initialState = {}

//create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;