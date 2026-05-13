import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaClock, FaStar, FaCheckCircle, FaLock, FaPlay,
  FaFilePdf, FaBookOpen, FaChevronRight, FaHeart,
  FaShare, FaBookmark, FaEye, FaGraduationCap
} from 'react-icons/fa';

const LessonCard = ({ 
  lesson, 
  user, 
  variant = 'grid', // grid | list | featured
  showActions = true,
  onFavorite,
  isFavorited = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const isCompleted = user?.completedLessons?.includes(lesson.id);
  const isAvailable = isCompleted || 
    !lesson.id || 
    lesson.id === 1 || 
    user?.completedLessons?.includes(lesson.id - 1);
  const isLocked = !isAvailable;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Oson': return 'bg-green-100 text-green-700 border-green-200';
      case "O'rta": return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Qiyin': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getLessonIcon = (iconName) => {
    // Default icon mapping would go here
    return <FaBookOpen className="text-2xl" />;
  };

  // Featured Card Variant
  if (variant === 'featured') {
    return (
      <div 
        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden card-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Header */}
        <div className={`bg-gradient-to-r ${lesson.color} p-8 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/80 text-6xl font-bold">0{lesson.id}</span>
              <div className="flex space-x-2">
                {isCompleted && (
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <FaCheckCircle className="mr-1" /> Yakunlangan
                  </span>
                )}
                {isLocked && (
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <FaLock className="mr-1" /> Yopiq
                  </span>
                )}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{lesson.title}</h2>
            <p className="text-white/70 text-lg">{lesson.subtitle}</p>
            
            <div className="flex items-center space-x-4 mt-4 text-white/80 text-sm">
              <span className="flex items-center">
                <FaClock className="mr-1" /> {lesson.duration}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs border ${
                lesson.difficulty === 'Oson' ? 'bg-green-400/20 border-green-300' :
                lesson.difficulty === "O'rta" ? 'bg-yellow-400/20 border-yellow-300' :
                'bg-red-400/20 border-red-300'
              }`}>
                {lesson.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center space-x-2 text-gray-500 mb-4">
            <FaGraduationCap className="text-primary-500" />
            <span className="text-sm">{lesson.content?.topics?.length || 0} ta mavzu</span>
            <span className="mx-2">•</span>
            <FaStar className="text-yellow-500" />
            <span className="text-sm">{lesson.content?.questions?.length || 0} ta savol</span>
          </div>

          <div className="space-y-2 mb-6">
            {lesson.content?.topics?.slice(0, 3).map((topic, i) => (
              <div key={i} className="flex items-center space-x-2 text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                <span className="text-sm">{topic}</span>
              </div>
            ))}
            {lesson.content?.topics?.length > 3 && (
              <p className="text-sm text-gray-400 pl-4">
                +{lesson.content.topics.length - 3} ta ko'proq
              </p>
            )}
          </div>

          <div className="flex space-x-3">
            {!isLocked ? (
              <Link
                to={`/lessons/${lesson.id}`}
                className="flex-1 btn-primary flex items-center justify-center space-x-2"
              >
                <FaPlay />
                <span>{isCompleted ? 'Qayta ko\'rish' : 'Boshlash'}</span>
              </Link>
            ) : (
              <button
                disabled
                className="flex-1 bg-gray-300 text-gray-500 py-3 rounded-xl flex items-center justify-center space-x-2 cursor-not-allowed"
              >
                <FaLock />
                <span>Avval oldingi darsni yakunlang</span>
              </button>
            )}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-3 rounded-xl border-2 transition-all ${
                isBookmarked 
                  ? 'border-primary-500 text-primary-500 bg-primary-50' 
                  : 'border-gray-200 text-gray-400 hover:border-primary-300'
              }`}
            >
              <FaBookmark />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // List Card Variant
  if (variant === 'list') {
    return (
      <div 
        className={`bg-white rounded-2xl shadow-lg p-4 flex items-center space-x-4 card-hover ${
          isLocked ? 'opacity-60' : ''
        }`}
      >
        {/* Number Badge */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isCompleted ? 'bg-green-100' :
          isAvailable ? 'bg-primary-100' :
          'bg-gray-100'
        }`}>
          {isCompleted ? (
            <FaCheckCircle className="text-green-500 text-xl" />
          ) : isLocked ? (
            <FaLock className="text-gray-400 text-lg" />
          ) : (
            <span className="text-primary-600 font-bold">{lesson.id}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 truncate">{lesson.title}</h3>
          <p className="text-sm text-gray-500 truncate">{lesson.subtitle}</p>
          <div className="flex items-center space-x-3 mt-1">
            <span className="text-xs text-gray-400 flex items-center">
              <FaClock className="mr-1" /> {lesson.duration}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(lesson.difficulty)}`}>
              {lesson.difficulty}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {showActions && (
            <>
              <button
                onClick={() => onFavorite?.(lesson.id)}
                className={`p-2 rounded-lg transition-colors ${
                  isFavorited 
                    ? 'text-red-500 bg-red-50' 
                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <FaHeart className={isFavorited ? 'animate-pulse' : ''} />
              </button>
              <button className="p-2 rounded-lg text-gray-400 hover:text-primary-500 hover:bg-primary-50 transition-colors">
                <FaShare />
              </button>
            </>
          )}
          {!isLocked ? (
            <Link
              to={`/lessons/${lesson.id}`}
              className="btn-primary text-sm px-4 py-2 flex items-center space-x-1"
            >
              <span>{isCompleted ? 'Ko\'rish' : 'Boshlash'}</span>
              <FaChevronRight className="text-xs" />
            </Link>
          ) : (
            <span className="text-sm text-gray-400 flex items-center">
              <FaLock className="mr-1" /> Yopiq
            </span>
          )}
        </div>
      </div>
    );
  }

  // Grid Card Variant (Default)
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover group ${
        isLocked ? 'opacity-70' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-r ${lesson.color} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/80 text-3xl font-bold">0{lesson.id}</span>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              {getLessonIcon(lesson.icon)}
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="flex space-x-2 mb-3">
            {isCompleted && (
              <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs flex items-center">
                <FaCheckCircle className="mr-1" /> Yakunlangan
              </span>
            )}
            {isLocked && (
              <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs flex items-center">
                <FaLock className="mr-1" /> Yopiq
              </span>
            )}
          </div>

          <h3 className="text-white font-bold text-lg mb-1">{lesson.title}</h3>
          <p className="text-white/70 text-sm">{lesson.subtitle}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <FaClock className="text-primary-400" />
            <span>{lesson.duration}</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(lesson.difficulty)}`}>
            {lesson.difficulty}
          </span>
        </div>

        {/* Topics Preview */}
        <div className="space-y-1.5 mb-4">
          {lesson.content?.topics?.slice(0, 2).map((topic, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-primary-400 rounded-full flex-shrink-0"></div>
              <span className="text-xs text-gray-500 truncate">{topic}</span>
            </div>
          ))}
          {lesson.content?.topics?.length > 2 && (
            <p className="text-xs text-primary-500 pl-3">
              +{lesson.content.topics.length - 2} ta mavzu
            </p>
          )}
        </div>

        {/* Progress Indicator */}
        {isCompleted && (
          <div className="mb-4">
            <div className="bg-green-100 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          {!isLocked ? (
            <Link
              to={`/lessons/${lesson.id}`}
              className="flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              <span>{isCompleted ? 'Qayta ko\'rish' : 'Darsni boshlash'}</span>
              <FaChevronRight className={`text-xs transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
            </Link>
          ) : (
            <span className="flex items-center space-x-2 text-gray-400">
              <FaLock className="text-xs" />
              <span>Avval oldingi darsni yakunlang</span>
            </span>
          )}

          {/* Quick Actions */}
          <div className="flex items-center space-x-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsBookmarked(!isBookmarked);
              }}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked 
                  ? 'text-primary-500 bg-primary-50' 
                  : 'text-gray-400 hover:text-primary-500 hover:bg-primary-50'
              }`}
            >
              <FaBookmark className="text-sm" />
            </button>
            {showActions && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onFavorite?.(lesson.id);
                }}
                className={`p-2 rounded-lg transition-colors ${
                  isFavorited 
                    ? 'text-red-500 bg-red-50' 
                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <FaHeart className={`text-sm ${isFavorited ? 'animate-pulse' : ''}`} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${
        isHovered && !isLocked ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="text-center text-white">
          <FaEye className="text-4xl mx-auto mb-2" />
          <p className="font-semibold">Darsni ko'rish</p>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;