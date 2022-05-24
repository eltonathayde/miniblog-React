
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"


const firebaseConfig = {
  apiKey: "AIzaSyAKUfkW2SlYGtID5CUeD9_rIXYmK2miqOE",
  authDomain: "miniblog-ac79d.firebaseapp.com",
  projectId: "miniblog-ac79d",
  storageBucket: "miniblog-ac79d.appspot.com",
  messagingSenderId: "1060329107833",
  appId: "1:1060329107833:web:f79574cea9d76560787fa8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};