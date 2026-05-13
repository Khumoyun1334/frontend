import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaPhone, FaEye, FaEyeSlash, FaSignInAlt, FaUserShield } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // CTRL + ALT + SHIFT bosilganda admin mode yoqiladi
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.shiftKey) {
        e.preventDefault();
        setIsAdminMode(true);
        setError('');
        setPhone('');
        setPassword('');
      }
      // ESC bosilsa admin mode o'chadi
      if (e.key === 'Escape' && isAdminMode) {
        setIsAdminMode(false);
        setError('');
        setPhone('');
        setPassword('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdminMode]);

  const handleSubmit = (e) => {
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
      const user = users.find(u => u.phone === phone.trim() && u.password === password);

      if (user) {
        // Admin mode da faqat adminlar kira oladi
        if (isAdminMode && user.role !== 'admin') {
          setError('Bu admin akkaunt emas!');
          setLoading(false);
          return;
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        onLogin(user);
        
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/lessons');
        }
      } else {
        setError('Telefon raqam yoki parol noto\'g\'ri');
      }
      setLoading(false);
    }, 600);
  };

  // Admin mode uchun maxfiy tugmalar kombinatsiyasi
  const handleSecretTap = () => {
    // Mobil uchun: logo ga 5 marta ketma-ket bosish
    if (!isAdminMode) {
      setIsAdminMode(true);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-8 transition-colors duration-500 ${
      isAdminMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="w-full max-w-sm">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div 
            onClick={handleSecretTap}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all cursor-pointer ${
              isAdminMode 
                ? 'bg-gradient-to-r from-red-600 to-red-800 animate-pulse' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600'
            }`}
          >
            {isAdminMode ? (
              <FaUserShield className="text-white text-2xl" />
            ) : (
              <FaSignInAlt className="text-white text-2xl" />
            )}
          </div>
          
          <h1 className={`text-xl font-bold transition-colors ${
            isAdminMode ? 'text-red-400' : 'text-gray-800'
          }`}>
            {isAdminMode ? '🔒 Admin Kirish' : 'Kirish'}
          </h1>
          
          <p className={`text-sm mt-1 transition-colors ${
            isAdminMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {isAdminMode 
              ? 'Maxfiy admin panelga kirish' 
              : 'O\'z akkountingizga kiring'
            }
          </p>

          {/* Admin mode indikatori */}
          {isAdminMode && (
            <div className="mt-3 inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-red-400 font-mono">ADMIN MODE ACTIVE</span>
              <span className="text-xs text-gray-500">| ESC chiqish</span>
            </div>
          )}
        </div>

        {/* Admin bilgilash */}
        {!isAdminMode && (
          <div className="text-center mb-4">
            <p className="text-xs text-gray-300 select-none">
              • • •
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className={`rounded-2xl p-5 shadow-sm space-y-4 transition-colors ${
          isAdminMode 
            ? 'bg-gray-800 border border-red-500/30 shadow-red-500/10' 
            : 'bg-white'
        }`}>
          {error && (
            <div className={`text-sm p-3 rounded-xl ${
              isAdminMode 
                ? 'bg-red-900/50 border border-red-500/50 text-red-300' 
                : 'bg-red-50 border border-red-200 text-red-600'
            }`}>
              ⚠️ {error}
            </div>
          )}

          {/* Telefon */}
          <div>
            <label className={`text-xs font-semibold mb-1.5 block transition-colors ${
              isAdminMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Telefon raqam
            </label>
            <div className="relative">
              <FaPhone className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${
                isAdminMode ? 'text-gray-600' : 'text-gray-400'
              }`} size={14} />
              <input
                type="tel"
                placeholder="+998 90 123 45 67"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setError(''); }}
                className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                  isAdminMode 
                    ? 'bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-600 focus:ring-red-500 focus:border-red-500' 
                    : 'bg-gray-50 border border-gray-200 text-gray-800 focus:ring-blue-500 focus:border-transparent'
                }`}
              />
            </div>
          </div>

          {/* Parol */}
          <div>
            <label className={`text-xs font-semibold mb-1.5 block transition-colors ${
              isAdminMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Parol
            </label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Parolingizni kiriting"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                className={`w-full py-3 pl-4 pr-12 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                  isAdminMode 
                    ? 'bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-600 focus:ring-red-500 focus:border-red-500' 
                    : 'bg-gray-50 border border-gray-200 text-gray-800 focus:ring-blue-500 focus:border-transparent'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className={`absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors ${
                  isAdminMode ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-xl font-bold text-sm active:scale-95 transition-all disabled:opacity-60 ${
              isAdminMode 
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                {isAdminMode ? 'Tekshirilmoqda...' : 'Kirmoqda...'}
              </span>
            ) : (
              isAdminMode ? '🔒 Admin sifatida kirish' : 'Kirish'
            )}
          </button>
        </form>

        {/* Footer links */}
        {!isAdminMode && (
          <p className="text-center text-sm text-gray-500 mt-5">
            Ro'yxatdan o'tmaganmisiz?{' '}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              Ro'yxatdan o'tish
            </Link>
          </p>
        )}

        {isAdminMode && (
          <div className="text-center mt-5 space-y-1">
            <p className="text-xs text-gray-600">ESC tugmasi bilan admin mode dan chiqish</p>
            <p className="text-xs text-gray-700">Yoki yana Ctrl+Alt+Shift bosing</p>
          </div>
        )}

        {/* Maxfiy ko'rsatma (faqat bilganlar uchun) */}
        <div className="mt-6 text-center select-none opacity-0 hover:opacity-100 transition-opacity duration-1000">
          <p className="text-[10px] text-gray-300">
            Ctrl + Alt + Shift = Admin Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;