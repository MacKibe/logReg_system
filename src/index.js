// import intializeApp function from firebase.app sub-package.
// Must intialize the the firebase app beofore using any firebase services getAuthFunction.
import { intializeApp } from ('firebase/app');
// importing firease auth service.
import { getAuth, onAuthStateChanges } from ('firebase/auth');
// importing the firestore service
import { getFirestore, collection } from ('firebase/firestore');
// Creating firebase app
const firebaseApp = intializeApp({
    apiKey: "AIzaSyB-w2Q2bX9m6sZLq_fiIfOU9dybVofM-G8",
    authDomain: "keen-optics-238614.firebaseapp.com",
    projectId: "keen-optics-238614",
    storageBucket: "keen-optics-238614.appspot.com",
    messagingSenderId: "167468057562",
    appId: "1:167468057562:web:7b6455c8b8ba483ed836e3",
    measurementId: "G-VBRGZCTZ0N"    
});

// create variables for getAuthfunctions
const auth = getAuth(firebaseApp);
const db = getAuth(firebaseApp);
const todoCol = collection(db, 'todos');


//  Monitoring Auth state

// onAuthStateChanges function call back if a user is logged in
onAuthStateChanges(auth, user => {
    if( user != null ) {
        console.log("logged In!");
    } else {
        console.log("No user!");
    }
});