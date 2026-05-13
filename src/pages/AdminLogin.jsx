import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserShield, FaPhone, FaLock, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!phone.trim()) {
      setError('Telefon raqam kiriting');
      return;
    }
    if (!password) {
      setError('Parol kiriting');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      const admin = users.find(u => 
        u.phone === phone.trim() && 
        u.password === password && 
        u.role === 'admin'
      );

      if (admin) {
        localStorage.setItem('currentUser', JSON.stringify(admin));
        navigate('/admin');
      } else {
        setError('Telefon yoki parol noto\'g\'ri, yoki admin emas');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Orqaga */}
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 text-sm">
          <FaArrowLeft className="mr-2" size={14} />
          Bosh sahifaga qaytish
        </Link>

        <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-700">
          {/* Icon */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaUserShield className="text-white text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-white">Admin Panel</h2>
            <p className="text-sm text-gray-400 mt-1">Maxfiy kirish</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-900/50 border border-red-500/50 text-red-300 text-sm p-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Telefon */}
            <div>
              <label className="text-xs font-semibold text-gray-400 mb-1.5 block">Telefon raqam</label>
              <div className="relative">
                <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                <input
                  type="tel"
                  placeholder="998900000000"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setError(''); }}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                  autoFocus
                />
              </div>
            </div>

            {/* Parol */}
            <div>
              <label className="text-xs font-semibold text-gray-400 mb-1.5 block">Parol</label>
              <div className="relative">
                <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Admin paroli"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  className="w-full pl-10 pr-12 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold text-sm active:scale-95 transition-all disabled:opacity-60"
            >
              {loading ? 'Tekshirilmoqda...' : 'Kirish'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;