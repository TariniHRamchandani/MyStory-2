import firebase from 'firebase'
require ('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
   
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
