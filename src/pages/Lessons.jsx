import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, FaClock, FaStar, FaChevronRight, FaBookOpen,
  FaHtml5, FaFont, FaImage, FaTable, FaCode, FaCss3Alt,
  FaBox, FaDesktop, FaArrowsAlt, FaTh, FaMagic, FaClone,
  FaMobileAlt, FaFilm, FaBootstrap, FaLock, FaCheckCircle
} from 'react-icons/fa';
import { lessons } from '../data/lessonsData';

const iconMap = {
  FaHtml5, FaFont, FaImage, FaTable, FaCode, FaCss3Alt,
  FaBox, FaDesktop, FaArrowsAlt, FaTh, FaMagic, FaClone,
  FaMobileAlt, FaFilm, FaBootstrap
};

const Lessons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  // Qulf tizimi
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const completedSet = new Set(user?.completedLessons || []);

  const getLessonStatus = (lessonId) => {
    if (!user) return 'locked';
    if (completedSet.has(lessonId)) return 'completed';
    if (lessonId === 1 || completedSet.has(lessonId - 1)) return 'open';
    return 'locked';
  };

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === 'all' || lesson.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="text-2xl" /> : <FaBookOpen className="text-2xl" />;
  };

  const completedCount = completedSet.size;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Barcha <span className="gradient-text">Darslar</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            HTML va CSS bo'yicha 16 ta to'liq dars. Har bir dars nazariy va amaliy qismlardan iborat.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Dars qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'Oson', "O'rta", 'Qiyin'].map((diff) => (
              <button
                key={diff}
                onClick={() => setFilterDifficulty(diff)}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  filterDifficulty === diff
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {diff === 'all' ? 'Barchasi' : diff}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Sizning progressingiz</h3>
              <p className="text-gray-500 text-sm">{completedCount} / {lessons.length} dars yakunlangan</p>
              {!user && (
                <Link to="/register" className="text-blue-600 text-sm font-semibold mt-1 inline-block">
                  Darslarni boshlash uchun ro'yxatdan o'ting
                </Link>
              )}
            </div>
            <div className="w-32 h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray={`${(completedCount / lessons.length) * 100}, 100`}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-800">{Math.round((completedCount/lessons.length)*100)}%</span>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount/lessons.length)*100}%` }}
            ></div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLessons.map((lesson, index) => {
            const status = getLessonStatus(lesson.id);
            const isLocked = status === 'locked';
            const isCompleted = status === 'completed';

            return (
              <Link
                key={lesson.id}
                to={isLocked ? '#' : `/lessons/${lesson.id}`}
                onClick={(e) => isLocked && e.preventDefault()}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover group animate-slide-up relative ${
                  isLocked ? 'opacity-60' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Lock overlay */}
                {isLocked && (
                  <div className="absolute inset-0 z-20 bg-gray-100/50 flex items-center justify-center">
                    <FaLock className="text-gray-400 text-4xl" />
                  </div>
                )}

                {/* Completed badge */}
                {isCompleted && (
                  <div className="absolute top-3 right-3 z-20 bg-green-500 text-white rounded-full p-1.5 shadow-lg">
                    <FaCheckCircle className="text-sm" />
                  </div>
                )}

                {/* Card Header */}
                <div className={`bg-gradient-to-r ${lesson.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/90 text-4xl font-bold">0{lesson.id}</span>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        {getIcon(lesson.icon)}
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{lesson.title}</h3>
                    <p className="text-white/70 text-sm">{lesson.subtitle}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <FaClock className="text-primary-400" />
                      <span>{lesson.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lesson.difficulty === 'Oson' 
                        ? 'bg-green-100 text-green-700' 
                        : lesson.difficulty === "O'rta"
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {lesson.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    {isLocked ? (
                      <span className="text-gray-400">Dars yopiq</span>
                    ) : isCompleted ? (
                      <span className="text-green-600">Yakunlangan</span>
                    ) : (
                      <>
                        <span>Darsni boshlash</span>
                        <FaChevronRight className="ml-1 text-sm group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredLessons.length === 0 && (
          <div className="text-center py-20">
            <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Dars topilmadi</h3>
            <p className="text-gray-400">Boshqa kalit so'z bilan qidirib ko'ring</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;