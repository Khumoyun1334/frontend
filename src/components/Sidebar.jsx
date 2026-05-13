import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaBook, FaLaptopCode, FaGraduationCap,
  FaTimes, FaLock, FaCheckCircle, FaPlay,
  FaStar, FaChartLine, FaUser, FaSignOutAlt
} from 'react-icons/fa';
import { lessons } from '../data/lessonsData';

const Sidebar = ({ user, isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLessonStatus = (lessonId) => {
    if (!user) return 'locked';
    if (user.completedLessons?.includes(lessonId)) return 'completed';
    if (lessonId === 1 || user.completedLessons?.includes(lessonId - 1)) return 'available';
    return 'locked';
  };

  const completedCount = user?.completedLessons?.length || 0;
  const progressPercent = Math.round((completedCount / lessons.length) * 100);

  // AGAR SIDEBAR OCHIQ BO'LSA KO'RINADI, YOPIQ BO'LSA KO'RINMAYDI
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay - MOBILE uchun */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <aside className="fixed top-0 left-0 h-full z-50 w-64 bg-white shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 rounded-lg">
              <FaGraduationCap className="text-white text-lg" />
            </div>
            <span className="font-bold text-gray-800 text-sm">WebDarslik</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* User info */}
        {user && (
          <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaUser className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{user.firstName} {user.lastName}</p>
                <p className="text-xs text-white/70 truncate">{user.phone}</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-full h-2 mb-1">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-white/70">{completedCount}/{lessons.length} dars</p>
          </div>
        )}

        {/* Navigation */}
        <nav className="p-3 space-y-1">
          {[
            { path: '/', icon: FaHome, label: 'Bosh sahifa' },
            { path: '/lessons', icon: FaBook, label: 'Barcha darslar' },
            { path: '/practice/1', icon: FaLaptopCode, label: 'Amaliyot' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <link.icon size={18} />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Darslar ro'yxati */}
        <div className="flex-1 overflow-y-auto border-t border-gray-100">
          <div className="p-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">
              Darslar ro'yxati
            </h3>
            <div className="space-y-1">
              {lessons.map((lesson) => {
                const status = getLessonStatus(lesson.id);
                const isCurrentLesson = location.pathname === `/lessons/${lesson.id}`;
                const isLocked = status === 'locked';
                const isCompleted = status === 'completed';

                return (
                  <Link
                    key={lesson.id}
                    to={isLocked ? '#' : `/lessons/${lesson.id}`}
                    onClick={(e) => {
                      if (isLocked) e.preventDefault();
                      else onClose();
                    }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                      isCurrentLesson
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : isLocked
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      isCompleted ? 'bg-green-100 text-green-700' :
                      isLocked ? 'bg-gray-100 text-gray-300' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {isCompleted ? <FaCheckCircle size={14} /> :
                       isLocked ? <FaLock size={12} /> :
                       lesson.id}
                    </span>
                    <span className={`text-sm truncate ${isLocked ? 'text-gray-300' : 'text-gray-700'}`}>
                      {lesson.title}
                    </span>
                    {isCompleted && <FaCheckCircle size={12} className="text-green-500 ml-auto" />}
                    {!isCompleted && !isLocked && <FaPlay size={10} className="text-blue-500 ml-auto" />}
                    {isLocked && <FaLock size={10} className="text-gray-300 ml-auto" />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        {user ? (
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span className="flex items-center gap-1"><FaStar className="text-yellow-500" size={10} /> {user.testResults?.length || 0} test</span>
              <span className="flex items-center gap-1"><FaChartLine className="text-green-500" size={10} /> {progressPercent}%</span>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium"
            >
              <FaSignOutAlt className="inline mr-2" size={14} />
              Chiqish
            </button>
          </div>
        ) : (
          <div className="p-4 border-t border-gray-100">
            <Link
              to="/register"
              onClick={onClose}
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-semibold text-sm"
            >
              Ro'yxatdan o'tish
            </Link>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;