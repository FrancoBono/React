import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbqlv5QH0qp58ytw4vkuBiHnNV1BLKg7I",
    authDomain: "reactjs-francobono.firebaseapp.com",
    projectId: "reactjs-francobono",
    storageBucket: "reactjs-francobono.appspot.com",
    messagingSenderId: "980122113904",
    appId: "1:980122113904:web:ce2918cf0ab6d9f89961b5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);