
"use client";
import React, { useState } from 'react';
import { supabase } from '@/src/supabaseClient';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async (e) => {
  e.preventDefault();
  const { user, error } = await supabase.auth.signIn({ email, password });
  if (error) console.error('Error logging in:', error.message);
  else console.log('Logged in user:', user);
};

return (
  <form onSubmit={handleLogin}>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    <button type="submit">Login</button>
  </form>
);
}
export default Login;