import { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("লগইন সফল হয়েছে!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="mt-4 text-blue-500 underline">
        {isLogin ? "Need an account? Register" : "Have an account? Login"}
      </button>
    </div>
  );
}