import { useState } from 'react';
import { FaUserShield, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const AdminLogin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) { setError('Nom kiriting'); return; }
    if (!password) { setError('Parol kiriting'); return; }

    setLoading(true);

    setTimeout(() => {
      if (name.trim() === 'Admin' && password === 'admin123') {
        const adminUser = {
          id: 1,
          firstName: 'Admin',
          lastName: '',
          phone: '',
          password: 'admin123',
          role: 'admin',
          registeredAt: new Date().toISOString(),
        };

        let users = JSON.parse(localStorage.getItem('users') || '[]');
        const adminIndex = users.findIndex(u => u.role === 'admin');
        if (adminIndex >= 0) {
          users[adminIndex] = adminUser;
        } else {
          users.push(adminUser);
        }
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(adminUser));

        // To'g'ridan-to'g'ri admin panelga o'tish
        window.location.replace('/admin');
      } else {
        setError('Noto\'g\'ri nom yoki parol');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl flex items-center justify-center mx-auto mb-5">
              <FaUserShield className="text-white text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
            <p className="text-gray-400 text-sm mt-2">Maxfiy kirish</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 text-sm p-4 rounded-2xl text-center">
                {error}
              </div>
            )}

            <div>
              <label className="text-sm font-semibold text-gray-300 mb-2 block">Admin nomi</label>
              <input
                type="text"
                placeholder="Admin"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(''); }}
                className="w-full px-5 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-base focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-300 mb-2 block">Parol</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  className="w-full pl-12 pr-14 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-base focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-lg"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? '⏳ Kutilmoqda...' : '🔓 Kirish'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Nom: <span className="text-gray-300 font-semibold">Admin</span> | Parol: <span className="text-gray-300 font-semibold">admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;