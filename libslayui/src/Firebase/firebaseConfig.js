import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7BzIBIEvWRqHAsO4nfYUrlMCvbqXTVwA",
    authDomain: "libslay-96105.firebaseapp.com",
    projectId: "libslay-96105",
    storageBucket: "libslay-96105.appspot.com",
    messagingSenderId: "103428111427",
    appId: "1:103428111427:web:6ce72013d40f4be083e8f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Khởi tạo Firebase Storage
const storage = getStorage(app);

export { storage };
