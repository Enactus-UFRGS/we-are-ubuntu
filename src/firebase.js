import firebase from 'firebase'

export const init = () => {
  var config = {
    apiKey: "AIzaSyDxPROu8bvzviTmoJoYTpTD7NhzXUeGZZU",
    authDomain: "we-are-ubuntu.firebaseapp.com",
    databaseURL: "https://we-are-ubuntu.firebaseio.com",
    projectId: "we-are-ubuntu",
    storageBucket: "we-are-ubuntu.appspot.com",
    messagingSenderId: "833208348593"
  };

  firebase.initializeApp(config);
}
