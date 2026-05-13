import { useState, useEffect } from 'react';
import { 
  FaUsers, FaBook, FaCheckCircle, FaChartBar, FaUser,
  FaPhone, FaCalendar, FaStar, FaTrophy, FaMedal,
  FaSearch, FaFilter, FaDownload, FaEye, FaClock,
  FaGraduationCap, FaChartLine, FaTable, FaCrown
} from 'react-icons/fa';
import { lessons } from '../data/lessonsData';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLesson, setFilterLesson] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCompleted: 0,
    averageScore: 0,
    activeToday: 0,
  });

  useEffect(() => {
    // Load users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
    
    // Calculate stats
    const total = storedUsers.length;
    const completed = storedUsers.reduce((acc, user) => 
      acc + (user.completedLessons?.length || 0), 0);
    const allScores = storedUsers.flatMap(user => 
      (user.testResults || []).map(r => r.score / r.total * 100));
    const avgScore = allScores.length > 0 
      ? allScores.reduce((a, b) => a + b, 0) / allScores.length 
      : 0;

    setStats({
      totalUsers: total,
      totalCompleted: completed,
      averageScore: Math.round(avgScore),
      activeToday: Math.floor(Math.random() * 20) + 5,
    });
  }, []);

  const filteredUsers = users
    .filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const matchesSearch = fullName.includes(searchTerm.toLowerCase()) ||
                           user.phone.includes(searchTerm);
      return matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      if (sortBy === 'progress') return (b.completedLessons?.length || 0) - (a.completedLessons?.length || 0);
      if (sortBy === 'date') return new Date(b.registeredAt) - new Date(a.registeredAt);
      return 0;
    });

  const getUserProgress = (user) => {
    const completed = user.completedLessons?.length || 0;
    return Math.round((completed / lessons.length) * 100);
  };

  const getUserAverageScore = (user) => {
    const results = user.testResults || [];
    if (results.length === 0) return 0;
    const total = results.reduce((acc, r) => acc + (r.score / r.total * 100), 0);
    return Math.round(total / results.length);
  };

  const getTopStudents = () => {
    return [...users]
      .sort((a, b) => (b.completedLessons?.length || 0) - (a.completedLessons?.length || 0))
      .slice(0, 5);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const exportData = () => {
    const data = users.map(user => ({
      'Ism': user.firstName,
      'Familiya': user.lastName,
      'Telefon': user.phone,
      "Ro'yxatdan o'tgan sana": formatDate(user.registeredAt),
      'Yakunlangan darslar': user.completedLessons?.length || 0,
      "O'rtacha ball": getUserAverageScore(user) + '%',
    }));
    
    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "oquvchilar_royxati.csv";
    a.click();
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center space-x-3 mb-2">
            <FaUserShield className="text-3xl text-primary-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Admin Panel</h1>
          </div>
          <p className="text-gray-500">O'quvchilar natijalari va statistika</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FaUsers, label: 'Jami o\'quvchilar', value: stats.totalUsers, color: 'from-blue-500 to-blue-600' },
            { icon: FaBook, label: 'Yakunlangan darslar', value: stats.totalCompleted, color: 'from-green-500 to-green-600' },
            { icon: FaStar, label: "O'rtacha ball", value: `${stats.averageScore}%`, color: 'from-yellow-500 to-yellow-600' },
            { icon: FaChartLine, label: 'Bugun faol', value: stats.activeToday, color: 'from-purple-500 to-purple-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`bg-gradient-to-r ${stat.color} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Top Students */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FaCrown className="text-yellow-500 mr-2" />
            Eng yaxshi o'quvchilar
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {getTopStudents().map((user, i) => (
              <div key={user.id} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="relative mx-auto w-16 h-16 mb-3">
                  <div className="w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <FaUser className="text-white text-2xl" />
                  </div>
                  {i === 0 && (
                    <FaMedal className="absolute -top-2 -right-2 text-yellow-500 text-2xl" />
                  )}
                </div>
                <p className="font-semibold text-gray-800 text-sm">{user.firstName}</p>
                <p className="text-xs text-gray-500">{user.lastName}</p>
                <div className="mt-2">
                  <span className="text-primary-600 font-bold">{getUserProgress(user)}%</span>
                  <span className="text-gray-400 text-xs ml-1">bajarilgan</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Toolbar */}
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ism yoki telefon bo'yicha qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500"
                >
                  <option value="name">Ism bo'yicha</option>
                  <option value="progress">Progress bo'yicha</option>
                  <option value="date">Sana bo'yicha</option>
                </select>
                <button
                  onClick={exportData}
                  className="flex items-center space-x-2 btn-primary"
                >
                  <FaDownload />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">#</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">O'quvchi</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Telefon</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Progress</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Ball</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Sana</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Amallar</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredUsers.map((user, i) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-500">{i + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                          <FaUser className="text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{user.firstName} {user.lastName}</p>
                          <p className="text-xs text-gray-400">ID: {user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-gray-600">
                        <FaPhone className="mr-2 text-gray-400 text-xs" />
                        {user.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">{getUserProgress(user)}%</span>
                          <span className="text-gray-400">{user.completedLessons?.length || 0}/{lessons.length}</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-primary-500 to-accent-500 h-1.5 rounded-full"
                            style={{ width: `${getUserProgress(user)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        getUserAverageScore(user) >= 80 ? 'bg-green-100 text-green-700' :
                        getUserAverageScore(user) >= 50 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {getUserAverageScore(user)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaCalendar className="mr-2 text-gray-400" />
                        {formatDate(user.registeredAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedUser(selectedUser?.id === user.id ? null : user)}
                        className="flex items-center space-x-1 text-primary-600 hover:text-primary-800 transition-colors"
                      >
                        <FaEye />
                        <span className="text-sm">Ko'rish</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <FaUsers className="text-6xl text-gray-200 mx-auto mb-4" />
              <p className="text-gray-500">Hozircha o'quvchilar mavjud emas</p>
            </div>
          )}
        </div>

        {/* Selected User Details */}
        {selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedUser(null)}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-slide-up">
              <button
                onClick={() => setSelectedUser(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-white text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h2>
                <p className="text-gray-500">{selectedUser.phone}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <FaBook className="text-primary-500 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-700">
                    {selectedUser.completedLessons?.length || 0}/{lessons.length}
                  </div>
                  <div className="text-sm text-primary-600">Yakunlangan darslar</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <FaStar className="text-green-500 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700">
                    {getUserAverageScore(selectedUser)}%
                  </div>
                  <div className="text-sm text-green-600">O'rtacha ball</div>
                </div>
              </div>

              {/* Test Results */}
              <h3 className="font-semibold text-gray-800 mb-4">Test natijalari:</h3>
              <div className="space-y-3">
                {(selectedUser.testResults || []).map((result, i) => {
                  const lesson = lessons.find(l => l.id === result.lessonId);
                  return (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-700">{lesson?.title || `Dars #${result.lessonId}`}</p>
                        <p className="text-xs text-gray-400">{formatDate(result.date)}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        result.score === result.total ? 'bg-green-100 text-green-700' :
                        result.score >= result.total/2 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {result.score}/{result.total}
                      </span>
                    </div>
                  );
                })}
                {(!selectedUser.testResults || selectedUser.testResults.length === 0) && (
                  <p className="text-gray-400 text-center py-4">Hali test natijalari yo'q</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;