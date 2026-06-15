import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// অথেন্টিকেশন এবং ডাটাবেজের জন্য এগুলো যোগ করুন
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiGF88bzoFJ1tMLtafF4fLiHUDE1BWgro",
  authDomain: "edcetera-dbbe5.firebaseapp.com",
  projectId: "edcetera-dbbe5",
  storageBucket: "edcetera-dbbe5.firebasestorage.app",
  messagingSenderId: "231193945955",
  appId: "1:231193945955:web:5bed80c6b2ff5f50b39556",
  measurementId: "G-V62E4NQHQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// এগুলো এক্সপোর্ট করুন যাতে অন্য ফাইল থেকে ব্যবহার করা যায়
export const auth = getAuth(app);
export const db = getFirestore(app);