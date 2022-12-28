import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA01f6bm5setdhQF3nvqyWkDzP0J9443HQ",
  authDomain: "multimart-e2c89.firebaseapp.com",
  projectId: "multimart-e2c89",
  storageBucket: "multimart-e2c89.appspot.com",
  messagingSenderId: "500676777272",
  appId: "1:500676777272:web:c94b9e87102dbf82b6ddcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
