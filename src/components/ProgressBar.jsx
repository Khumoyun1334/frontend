import { useState, useEffect } from 'react';
import { 
  FaTrophy, FaStar, FaFire, FaCalendarCheck, 
  FaChartLine, FaMedal, FaRocket 
} from 'react-icons/fa';
import { lessons } from '../data/lessonsData';

const ProgressBar = ({ user, showDetails = true }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const completedCount = user?.completedLessons?.length || 0;
  const totalLessons = lessons.length;
  const percentage = Math.round((completedCount / totalLessons) * 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  useEffect(() => {
    if (percentage === 100) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [percentage]);

  const getLevelInfo = () => {
    if (percentage === 0) return { level: 'Boshlovchi', color: 'text-gray-500', icon: FaRocket, bgColor: 'bg-gray-100' };
    if (percentage < 25) return { level: 'Boshlovchi', color: 'text-blue-500', icon: FaRocket, bgColor: 'bg-blue-100' };
    if (percentage < 50) return { level: 'O\'rganuvchi', color: 'text-green-500', icon: FaChartLine, bgColor: 'bg-green-100' };
    if (percentage < 75) return { level: 'Ishonchli', color: 'text-yellow-500', icon: FaStar, bgColor: 'bg-yellow-100' };
    if (percentage < 100) return { level: 'Mutaxassis', color: 'text-orange-500', icon: FaFire, bgColor: 'bg-orange-100' };
    return { level: 'Guru', color: 'text-purple-500', icon: FaTrophy, bgColor: 'bg-purple-100' };
  };

  const levelInfo = getLevelInfo();
  const LevelIcon = levelInfo.icon;

  const getMotivationalMessage = () => {
    if (percentage === 0) return "O'rganishni boshlang! 🚀";
    if (percentage < 25) return "Yaxshi boshladiz! Davom eting! 💪";
    if (percentage < 50) return "Ajoyib rivojlanish! 🔥";
    if (percentage < 75) return "Yarim yo'ldasiz! Kuchli davom! ⭐";
    if (percentage < 100) return "Guru bo'lishga oz qoldi! 🏆";
    return "Tabriklaymiz! Siz Guru bo'ldingiz! 🎉👑";
  };

  const getNextMilestone = () => {
    const milestones = [25, 50, 75, 100];
    const next = milestones.find(m => m > percentage);
    if (!next) return null;
    const lessonsNeeded = Math.ceil((next / 100) * totalLessons) - completedCount;
    return { target: next, lessonsNeeded };
  };

  const nextMilestone = getNextMilestone();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                fontSize: `${16 + Math.random() * 20}px`,
              }}
            >
              {['🎉', '🎊', '⭐', '🏆', '👑'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Level Badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-14 h-14 ${levelInfo.bgColor} rounded-2xl flex items-center justify-center`}>
            <LevelIcon className={`text-2xl ${levelInfo.color}`} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Sizning darajangiz</h3>
            <p className={`font-semibold ${levelInfo.color}`}>{levelInfo.level}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-800">{percentage}%</div>
          <div className="text-xs text-gray-500">
            {completedCount}/{totalLessons} dars
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative mb-6">
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 h-4 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${animatedProgress}%` }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
          </div>
        </div>
        
        {/* Milestone Markers */}
        <div className="absolute top-0 left-0 right-0 h-4">
          {[25, 50, 75].map(milestone => (
            <div
              key={milestone}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${milestone}%` }}
            >
              <div className={`w-1 h-6 -mt-1 ${percentage >= milestone ? 'bg-white' : 'bg-gray-400'}`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Labels */}
      <div className="flex justify-between text-xs text-gray-400 mb-6">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>

      {/* Motivational Message */}
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-4 mb-4">
        <p className="text-center font-medium text-gray-700">
          {getMotivationalMessage()}
        </p>
      </div>

      {/* Details */}
      {showDetails && (
        <div className="space-y-3">
          {/* Next Milestone */}
          {nextMilestone && (
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-2">
                <FaMedal className="text-yellow-500" />
                <span className="text-sm text-gray-600">Keyingi daraja:</span>
              </div>
              <span className="font-semibold text-primary-600">
                {nextMilestone.lessonsNeeded} ta dars qoldi
              </span>
            </div>
          )}

          {/* Streak */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-2">
              <FaFire className="text-orange-500" />
              <span className="text-sm text-gray-600">Faollik:</span>
            </div>
            <span className="font-semibold text-orange-500">
              {completedCount > 0 ? '🔥 Davom etyapti' : 'Bugun boshlang'}
            </span>
          </div>

          {/* Last Activity */}
          {user?.testResults?.length > 0 && (
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-2">
                <FaCalendarCheck className="text-green-500" />
                <span className="text-sm text-gray-600">Oxirgi test:</span>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(user.testResults[user.testResults.length - 1].date).toLocaleDateString('uz-UZ')}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Mini Progress Circles */}
      {showDetails && (
        <div className="mt-6 grid grid-cols-4 gap-3">
          {lessons.slice(0, 4).map((lesson) => {
            const isCompleted = user?.completedLessons?.includes(lesson.id);
            return (
              <div key={lesson.id} className="text-center">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-1 ${
                  isCompleted ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {isCompleted ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <span className="text-gray-400 text-xs font-bold">{lesson.id}</span>
                  )}
                </div>
                <span className="text-xs text-gray-400 truncate block">{lesson.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;