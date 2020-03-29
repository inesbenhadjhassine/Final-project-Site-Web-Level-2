import firebase from'firebase'

var Config = {
    apiKey: "AIzaSyA-1KslrZ22jbW6EWyXkhXXvzOQbD1yFWc",
    authDomain: "my-cookbook-caa9b.firebaseapp.com",
    databaseURL: "https://my-cookbook-caa9b.firebaseio.com",
    projectId: "my-cookbook-caa9b",
    storageBucket: "my-cookbook-caa9b.appspot.com",
    messagingSenderId: "321167849186",
    appId: "1:321167849186:web:c9f752a1435851e3fd50bb",
    measurementId: "G-JKS4MY8S13"
  };

  var fire = firebase.initializeApp(Config);
  export default fire;