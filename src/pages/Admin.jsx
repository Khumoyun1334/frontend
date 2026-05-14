import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUsers, FaBook, FaStar, FaTrophy, 
  FaUser, FaPhone, FaCalendar, FaSearch,
  FaUserShield, FaSignOutAlt, FaArrowLeft,
  FaCheckCircle, FaClock, FaChartLine
} from 'react-icons/fa';
import { lessons } from '../data/lessonsData';

const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/admin-login');
      return;
    }
    loadUsers();
  }, [navigate]);

  const loadUsers = () => {
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const students = allUsers.filter(u => u.role === 'student');
    setUsers(students);
  };

 const handleLogout = () => {
  localStorage.removeItem('currentUser');
  navigate('/');
  window.location.reload(); // Sahifani yangilash
};



  const getCompleted = (user) => user?.completedLessons?.length || 0;

  const getAvgScore = (user) => {
    const results = user?.testResults || [];
    if (results.length === 0) return 0;
    const sum = results.reduce((acc, r) => acc + (r.score / r.total) * 100, 0);
    return Math.round(sum / results.length);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('uz-UZ');
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const phone = user.phone || '';
    return fullName.includes(search.toLowerCase()) || phone.includes(search);
  });

  const totalCompleted = users.reduce((acc, u) => acc + getCompleted(u), 0);
  const avgAll = users.length > 0 ? Math.round(users.reduce((acc, u) => acc + getAvgScore(u), 0) / users.length) : 0;
  const maxScore = users.length > 0 ? Math.max(...users.map(u => getAvgScore(u))) : 0;

  const getLevel = (user) => {
    const p = getAvgScore(user);
    if (p >= 90) return { text: 'A\'lo', color: 'text-green-600 bg-green-100' };
    if (p >= 70) return { text: 'Yaxshi', color: 'text-blue-600 bg-blue-100' };
    if (p >= 50) return { text: 'O\'rta', color: 'text-yellow-600 bg-yellow-100' };
    if (p > 0) return { text: 'Past', color: 'text-red-600 bg-red-100' };
    return { text: 'Yangi', color: 'text-gray-600 bg-gray-100' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* ===== HEADER ===== */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-3xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="p-2 rounded-xl hover:bg-gray-100">
              <FaArrowLeft className="text-gray-500" />
            </button>
            <FaUserShield className="text-red-500 text-2xl" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
              <p className="text-sm text-gray-500">O'quvchilar boshqaruvi</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-600">
            <FaSignOutAlt /> Chiqish
          </button>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: FaUsers, label: 'Jami o\'quvchilar', value: users.length, color: 'bg-blue-500' },
            { icon: FaBook, label: 'Yakunlangan darslar', value: totalCompleted, color: 'bg-green-500' },
            { icon: FaChartLine, label: 'O\'rtacha ball', value: avgAll + '%', color: 'bg-purple-500' },
            { icon: FaTrophy, label: 'Eng yuqori ball', value: maxScore + '%', color: 'bg-yellow-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon className="text-white text-lg" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ===== SEARCH ===== */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Ism yoki telefon raqam..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ===== USERS TABLE ===== */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">#</th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">O'quvchi</th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">Telefon</th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">Darslar</th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">Ball</th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">Daraja</th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">Sana</th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-gray-500">Batafsil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user, i) => {
                  const level = getLevel(user);
                  return (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-5 py-4 text-sm text-gray-500">{i + 1}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {user.firstName?.[0]}{user.lastName?.[0]}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{user.firstName} {user.lastName}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-500">
                        <FaPhone className="inline mr-1 text-gray-300" size={10} />
                        {user.phone || '—'}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 rounded-full h-2 w-24">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${(getCompleted(user) / 16) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">{getCompleted(user)}/16</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm font-bold text-gray-700">{getAvgScore(user)}%</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${level.color}`}>
                          {level.text}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-400">
                        <FaCalendar className="inline mr-1" size={10} />
                        {formatDate(user.registeredAt)}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button
                          onClick={() => setSelectedUser(selectedUser?.id === user.id ? null : user)}
                          className="text-blue-600 text-sm font-semibold hover:underline"
                        >
                          {selectedUser?.id === user.id ? 'Yopish' : 'Ko\'rish'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <FaUsers className="text-5xl mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">Hozircha o'quvchilar yo'q</p>
              <p className="text-sm mt-1">Ro'yxatdan o'tgan o'quvchilar shu yerda ko'rinadi</p>
            </div>
          )}
        </div>

        {/* ===== SELECTED USER MODAL ===== */}
        {selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedUser(null)}></div>
            <div className="relative bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-2xl">
                    {selectedUser.firstName?.[0]}{selectedUser.lastName?.[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{selectedUser.firstName} {selectedUser.lastName}</h3>
                <p className="text-gray-500 text-sm">{selectedUser.phone || 'Telefon kiritilmagan'}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <FaBook className="text-blue-500 mx-auto mb-1 text-xl" />
                  <div className="text-2xl font-bold text-blue-700">{getCompleted(selectedUser)}/16</div>
                  <div className="text-xs text-blue-500">Yakunlangan</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <FaStar className="text-green-500 mx-auto mb-1 text-xl" />
                  <div className="text-2xl font-bold text-green-700">{getAvgScore(selectedUser)}%</div>
                  <div className="text-xs text-green-500">O'rtacha ball</div>
                </div>
              </div>

              {selectedUser.testResults?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Test natijalari:</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {selectedUser.testResults.map((r, i) => {
                      const lesson = lessons.find(l => l.id === r.lessonId);
                      return (
                        <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl text-sm">
                          <span className="text-gray-600">{lesson?.title || `Dars #${r.lessonId}`}</span>
                          <span className="font-bold text-gray-800">{r.score}/{r.total}</span>
                          <span className="text-xs text-gray-400">{formatDate(r.date)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedUser(null)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                Yopish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;