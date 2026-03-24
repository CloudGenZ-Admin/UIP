import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../api/apiService';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await apiService.login(credentials);
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin/stories');
    } catch (err) {
      setError('Invalid Username or Password');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-10 rounded-[2rem] shadow-2xl w-[400px]">
        <h2 className="text-3xl font-black mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">Admin Access</h2>
        <p className="text-center text-slate-500 text-sm mb-8">Login to manage community data</p>
        
        {error && <div className="bg-red-50 text-red-500 p-3 rounded-xl text-sm mb-4 text-center font-bold">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="text" placeholder="Username" required onChange={e => setCredentials({...credentials, username: e.target.value})} className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#A855F7] font-bold" />
          <input type="password" placeholder="Password" required onChange={e => setCredentials({...credentials, password: e.target.value})} className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#A855F7] font-bold" />
          <button type="submit" className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white p-4 rounded-2xl font-black text-lg hover:shadow-lg transition-all hover:-translate-y-1">Login</button>
        </form>
      </div>
    </div>
  );
}