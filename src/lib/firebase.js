import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyD6tGKS_MSngbbjZoG4EUmolVq6HmhH6sE",
  authDomain: "chatapp-e7d37.firebaseapp.com",
  projectId: "chatapp-e7d37",
  storageBucket: "chatapp-e7d37.appspot.com",
  messagingSenderId: "973640876416",
  appId: "1:973640876416:web:1cf5adcfccc4866c5e4165"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} 

// export const auth = getAuth(app)
// export const db = getFirestore(app)