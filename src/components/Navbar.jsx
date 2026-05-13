import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaGraduationCap, FaHome, FaBook, FaLaptopCode,
  FaUser, FaSignOutAlt, FaBars, FaTimes,
  FaUserShield, FaBell, FaSearch, FaStar
} from 'react-icons/fa';

const Navbar = ({ user, onLogout, onMenuToggle }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const completedCount = user?.completedLessons?.length || 0;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* === LEFT === */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Hamburger - HAMMA REJIMDA ISHLAYDI */}
              <button
                onClick={onMenuToggle}
                className="p-2 -ml-1 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Menyuni ochish/yopish"
              >
                <FaBars size={20} />
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <FaGraduationCap className="text-white text-lg md:text-xl" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-base md:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    KHumoyun Frontend
                  </span>
                </div>
              </Link>
            </div>

            {/* === CENTER (desktop) === */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { path: '/', icon: FaHome, label: 'Bosh sahifa' },
                { path: '/lessons', icon: FaBook, label: 'Darslar' },
                { path: '/practice/1', icon: FaLaptopCode, label: 'Amaliyot' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <link.icon size={16} />
                  <span>{link.label}</span>
                </Link>
              ))}
              {user?.role === 'admin' && (
                <Link
                  to="/admin"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive('/admin')
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  <FaUserShield size={16} />
                  <span>Admin</span>
                </Link>
              )}
            </div>

            {/* === RIGHT === */}
            <div className="flex items-center gap-1 md:gap-2">
              {/* Desktop search */}
              <button className="hidden md:flex p-2.5 rounded-xl text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition-all">
                <FaSearch size={18} />
              </button>

              {/* Desktop notifications */}
              {user && (
                <div className="relative hidden md:block">
                  <button
                    onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
                    className="relative p-2.5 rounded-xl text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition-all"
                  >
                    <FaBell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  {notifOpen && (
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border p-4 z-50">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Bildirishnomalar</p>
                      <div className="bg-blue-50 p-3 rounded-xl">
                        <p className="text-sm text-blue-700">1-darsga xush kelibsiz! 🎉</p>
                        <p className="text-xs text-blue-400 mt-1">Hozirgina</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Desktop profile */}
              {user ? (
                <div className="relative hidden md:block">
                  <button
                    onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-gray-50 transition-all border border-gray-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <FaUser className="text-white text-xs" />
                    </div>
                    <div className="hidden lg:block text-left">
                      <p className="text-sm font-medium text-gray-700 leading-tight">{user.firstName}</p>
                      <p className="text-xs text-gray-400 leading-tight">{completedCount}/16</p>
                    </div>
                  </button>
                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border overflow-hidden z-50">
                      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <p className="font-bold">{user.firstName} {user.lastName}</p>
                        <p className="text-xs text-white/70">{user.phone}</p>
                        <div className="mt-2 bg-white/20 rounded-full h-1.5">
                          <div className="bg-white h-1.5 rounded-full" style={{ width: `${(completedCount/16)*100}%` }}></div>
                        </div>
                      </div>
                      <div className="p-2">
                        <Link to="/lessons" className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-50">
                          <FaBook size={16} /> Mening darslarim
                        </Link>
                        <button
                          onClick={() => { onLogout(); setProfileOpen(false); }}
                          className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm text-red-600 hover:bg-red-50"
                        >
                          <FaSignOutAlt size={16} /> Chiqish
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link to="/login" className="px-4 py-2 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all">
                    Kirish
                  </Link>
                  <Link to="/register" className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all">
                    Ro'yxatdan o'tish
                  </Link>
                </div>
              )}

              {/* Mobile profile badge */}
              {user && (
                <Link to="/lessons" className="md:hidden bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1.5 rounded-full">
                  {completedCount}/16
                </Link>
              )}
              {!user && (
                <Link to="/register" className="md:hidden bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full active:scale-95 transition-transform">
                  Boshlash
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Overlay for dropdowns */}
        {(profileOpen || notifOpen) && (
          <div className="hidden md:block fixed inset-0 z-20" onClick={() => { setProfileOpen(false); setNotifOpen(false); }}></div>
        )}
      </nav>
      <div className="h-14 md:h-16"></div>
    </>
  );
};

export default Navbar;