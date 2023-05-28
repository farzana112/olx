import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCy1iW-oYM9d7ORuoUGCDumYq_TT4ODoz0",
//     authDomain: "olx-clone-f6f4e.firebaseapp.com",
//     projectId: "olx-clone-f6f4e",
//     storageBucket: "olx-clone-f6f4e.appspot.com",
//     messagingSenderId: "175483268010",
//     appId: "1:175483268010:web:77097366bd4a109765d9d3",
//     measurementId: "G-YY28JBWH8G"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyCjSxHL-9KbZMT6dZcAHjLbxgONCb0hcxg",
    authDomain: "olx-new-2ab01.firebaseapp.com",
    projectId: "olx-new-2ab01",
    storageBucket: "olx-new-2ab01.appspot.com",
    messagingSenderId: "138745900545",
    appId: "1:138745900545:web:9444c3ab750d5f078f9a00",
    measurementId: "G-T8YSGSNYZW"
  };

  export default firebase.initializeApp(firebaseConfig) 