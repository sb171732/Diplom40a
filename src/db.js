import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2wH4khdmIWQjT7dY6UFJ0BTjlfpfhDWI",
  authDomain: "vue30app-ded17.firebaseapp.com",
  projectId: "vue30app-ded17",
  storageBucket: "vue30app-ded17.appspot.com",
  messagingSenderId: "545224563690",
  appId: "1:545224563690:web:70d920956d5d13abaf7093",
  measurementId: "G-8MP081C38V"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }