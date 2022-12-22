import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAzOKKoSqkmaHVTQzZzHQsxdDko0eP0vH4",
  authDomain: "atulkrishna-216d2.firebaseapp.com",
  projectId: "atulkrishna-216d2",
  storageBucket: "atulkrishna-216d2.appspot.com",
  messagingSenderId: "192044543736",
  appId: "1:192044543736:web:09f3722d1e921eec11150d",
  measurementId: "G-JM87PBNERZ"
};

  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app)

 