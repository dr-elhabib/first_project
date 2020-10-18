import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBOxqGg9-25PZj_qwg-OeXGe6FADhW9AmQ",
    authDomain: "vusjs-tutorail.firebaseapp.com",
    databaseURL: "https://vusjs-tutorail.firebaseio.com",
    projectId: "vusjs-tutorail",
    storageBucket: "vusjs-tutorail.appspot.com",
    messagingSenderId: "67826762845",
    appId: "1:67826762845:web:861dcebc015f00227d39b4"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
