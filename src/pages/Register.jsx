import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', password: '', adminCode: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const ADMIN_SECRET = 'admin123';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.firstName.trim() || !form.lastName.trim()) { setError('Ism va familiya kiriting'); return; }
    if (!form.phone.trim()) { setError('Telefon raqam kiriting'); return; }
    if (!form.password || form.password.length < 4) { setError('Parol kamida 4 ta belgi'); return; }

    let role = 'student';
    if (form.adminCode.trim() === ADMIN_SECRET) role = 'admin';

    setLoading(true);
    setTimeout(() => {
      const userData = {
        id: Date.now(), firstName: form.firstName.trim(), lastName: form.lastName.trim(),
        phone: form.phone.trim(), password: form.password, role,
        registeredAt: new Date().toISOString(), completedLessons: [], testResults: [],
      };
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.find(u => u.phone === userData.phone)) { 
        setError('Bu telefon allaqachon ro\'yxatdan o\'tgan'); 
        setLoading(false); 
        return; 
      }
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(userData));
      onRegister(userData);
      navigate(role === 'admin' ? '/admin' : '/lessons');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <FaUser className="text-white text-xl" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">Ro'yxatdan o'tish</h1>
          <p className="text-sm text-gray-500 mt-1">Darslarni boshlash uchun</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          {error && <div className="bg-red-50 text-red-600 text-xs p-3 rounded-xl">{error}</div>}
          
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">Ism</label>
            <input type="text" placeholder="Ismingiz" value={form.firstName} 
              onChange={(e) => setForm({...form, firstName: e.target.value})}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">Familiya</label>
            <input type="text" placeholder="Familiyangiz" value={form.lastName} 
              onChange={(e) => setForm({...form, lastName: e.target.value})}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">Telefon raqam</label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input type="tel" placeholder="998900000000" value={form.phone} 
                onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">Parol</label>
            <div className="relative">
              <input type={showPass ? 'text' : 'password'} placeholder="Kamida 4 ta belgi" value={form.password} 
                onChange={(e) => setForm({...form, password: e.target.value})}
                className="w-full p-3 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
          </div>

          {/* Admin kodi (ixtiyoriy) */}
          <details className="text-xs text-gray-400">
            <summary className="cursor-pointer">👑 Admin sifatida ro'yxatdan o'tish</summary>
            <div className="mt-2">
              <input type="password" placeholder="Admin maxfiy kodi" value={form.adminCode} 
                onChange={(e) => setForm({...form, adminCode: e.target.value})}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
          </details>

          <button type="submit" disabled={loading} 
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm active:scale-95 transition-transform disabled:opacity-60">
            {loading ? 'Ro\'yxatdan o\'tilmoqda...' : 'Ro\'yxatdan o\'tish'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Ro'yxatdan o'tganmisiz? <Link to="/login" className="text-blue-600 font-semibold">Kirish</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;