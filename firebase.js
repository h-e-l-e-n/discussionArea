// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUr6Zr7O67Aritip1Ptem8TpIGI9qeeY8",
  authDomain: "my-first-project-d56a6.firebaseapp.com",
  projectId: "my-first-project-d56a6",
  storageBucket: "my-first-project-d56a6.firebasestorage.app",
  messagingSenderId: "717859967578",
  appId: "1:717859967578:web:811690d7c2b48169fd3e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
// export default app;