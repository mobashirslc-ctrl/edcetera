// src/AuthModal.js
import { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function AuthModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async (isLogin) => {
    try {
      if (isLogin) await signInWithEmailAndPassword(auth, email, password);
      else await createUserWithEmailAndPassword(auth, email, password);
      onClose(); // সফল হলে মডাল বন্ধ হবে
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <input className="border p-2 w-full mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2 w-full mb-4" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => handleAuth(true)} className="bg-primary text-white w-full py-2 mb-2">Login</button>
        <button onClick={() => handleAuth(false)} className="text-primary w-full">Sign Up</button>
      </div>
    </div>
  );
}