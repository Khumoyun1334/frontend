import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft, FaArrowRight, FaLock, FaCheckCircle,
  FaLightbulb, FaPlay, FaFilePdf, FaClock, FaStar,
  FaCheck
} from 'react-icons/fa';
import { lessons } from '../data/lessonsData';

const LessonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [tab, setTab] = useState('theory'); // theory | test | practice
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const completedSet = new Set(user?.completedLessons || []);

  useEffect(() => {
    const found = lessons.find(l => l.id === parseInt(id));
    setLesson(found);
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setTab('theory');
  }, [id]);

  if (!lesson) return null;

  const isLocked = lesson.id !== 1 && !completedSet.has(lesson.id - 1);
  const isCompleted = completedSet.has(lesson.id);
  const currentIndex = lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const handleAnswer = (qId, optIdx) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const checkAnswers = () => {
    let correct = 0;
    lesson.content.questions.forEach(q => {
      if (answers[q.id] === q.correct) correct++;
    });
    setScore(correct);
    setShowResults(true);

    // Agar 60%+ to'g'ri bo'lsa - dars yakunlangan hisoblanadi
    const total = lesson.content.questions.length;
    const percent = Math.round((correct / total) * 100);

    if (percent >= 60) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIdx = users.findIndex(u => u.id === user?.id);
      if (userIdx !== -1) {
        if (!users[userIdx].completedLessons) users[userIdx].completedLessons = [];
        if (!users[userIdx].completedLessons.includes(lesson.id)) {
          users[userIdx].completedLessons.push(lesson.id);
        }
        if (!users[userIdx].testResults) users[userIdx].testResults = [];
        users[userIdx].testResults.push({
          lessonId: lesson.id,
          score: correct,
          total,
          date: new Date().toISOString()
        });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(users[userIdx]));
      }
    }
  };

  if (isLocked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-5">
            <FaLock className="text-gray-400 text-3xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Dars yopiq</h2>
          <p className="text-gray-500 text-sm mb-6">
            Bu darsni ochish uchun avval <span className="font-semibold text-blue-600">{prevLesson?.title}</span> darsidagi testdan 60%+ o'tishingiz kerak.
          </p>
          <Link
            to={`/lessons/${lesson.id - 1}`}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform"
          >
            <FaArrowLeft size={14} />
            Oldingi darsga o'tish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-4">
          <Link to="/lessons" className="p-2 -ml-2 rounded-xl active:bg-gray-200">
            <FaArrowLeft size={18} className="text-gray-600" />
          </Link>
          <div className="flex-1">
            <p className="text-xs text-gray-400">Dars {lesson.id}/16</p>
            <h1 className="text-lg font-bold text-gray-800">{lesson.title}</h1>
          </div>
          {isCompleted && (
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <FaCheckCircle size={12} />
              Yakunlangan
            </span>
          )}
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-5">
          {[
            { key: 'theory', label: 'Nazariya', icon: FaLightbulb },
            { key: 'test', label: 'Test', icon: FaCheckCircle },
            { key: 'practice', label: 'Amaliyot', icon: FaPlay },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                tab === t.key
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              <t.icon size={14} />
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>

        {/* === NAZARIYA === */}
        {tab === 'theory' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">{lesson.content.intro}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">O'rganiladigan mavzular:</h3>
              <div className="space-y-2">
                {lesson.content.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === TEST === */}
        {tab === 'test' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-sm text-gray-500 mb-4">
                Kamida 60% ({(Math.ceil(lesson.content.questions.length * 0.6))}/{lesson.content.questions.length}) to'g'ri javob bersangiz, keyingi dars ochiladi.
              </p>

              {lesson.content.questions.map((q, i) => (
                <div
                  key={q.id}
                  className={`mb-4 p-4 rounded-xl ${
                    showResults
                      ? answers[q.id] === q.correct
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-red-50 border border-red-200'
                      : 'bg-gray-50'
                  }`}
                >
                  <p className="font-semibold text-sm text-gray-800 mb-3">
                    {i + 1}. {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, j) => (
                      <button
                        key={j}
                        onClick={() => handleAnswer(q.id, j)}
                        disabled={showResults}
                        className={`w-full text-left p-3 rounded-lg text-sm border transition-all ${
                          showResults
                            ? j === q.correct
                              ? 'bg-green-100 border-green-400 text-green-800'
                              : answers[q.id] === j
                              ? 'bg-red-100 border-red-400 text-red-800'
                              : 'bg-white border-gray-200 text-gray-500'
                            : answers[q.id] === j
                            ? 'bg-blue-50 border-blue-400 text-blue-700'
                            : 'bg-white border-gray-200 text-gray-700 active:bg-gray-50'
                        }`}
                      >
                        <span className="font-bold mr-2">{['A', 'B', 'C', 'D'][j]}.</span>
                        {opt}
                        {showResults && j === q.correct && (
                          <FaCheck className="inline ml-2 text-green-600" size={12} />
                        )}
                      </button>
                    ))}
                  </div>
                  {showResults && (
                    <p className={`text-xs mt-3 p-2 rounded-lg ${
                      answers[q.id] === q.correct
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {q.explanation}
                    </p>
                  )}
                </div>
              ))}

              {!showResults ? (
                <button
                  onClick={checkAnswers}
                  disabled={Object.keys(answers).length !== lesson.content.questions.length}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                    Object.keys(answers).length === lesson.content.questions.length
                      ? 'bg-blue-600 text-white active:scale-95'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {Object.keys(answers).length === lesson.content.questions.length
                    ? 'Javoblarni tekshirish'
                    : `${Object.keys(answers).length}/${lesson.content.questions.length} javob berilgan`}
                </button>
              ) : (
                <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-bold mb-2">
                    <span className={score >= lesson.content.questions.length * 0.6 ? 'text-green-600' : 'text-red-600'}>
                      {Math.round((score / lesson.content.questions.length) * 100)}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    {score} / {lesson.content.questions.length} to'g'ri
                  </p>

                  {score >= lesson.content.questions.length * 0.6 ? (
                    <div className="space-y-3">
                      <p className="text-green-600 font-semibold text-sm">✅ Test topshirildi! Keyingi dars ochildi.</p>
                      {nextLesson && (
                        <Link
                          to={`/lessons/${nextLesson.id}`}
                          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform"
                        >
                          Keyingi dars
                          <FaArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-red-600 font-semibold text-sm">❌ 60% dan kam. Qayta urinib ko'ring.</p>
                      <button
                        onClick={() => { setShowResults(false); setAnswers({}); }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform"
                      >
                        Qayta urinish
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* === AMALIYOT === */}
        {tab === 'practice' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">{lesson.content.practice?.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{lesson.content.practice?.description}</p>

              <div className="space-y-2 mb-4">
                {lesson.content.practice?.tasks?.map((task, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 font-bold">{i + 1}.</span>
                    <span>{task}</span>
                  </div>
                ))}
              </div>

              {/* Kod editor */}
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-gray-800 flex items-center justify-between">
                  <span className="text-gray-400 text-xs">HTML Editor</span>
                  <span className="text-green-400 text-xs">index.html</span>
                </div>
                <textarea
                  defaultValue={lesson.content.practice?.starterCode}
                  className="w-full h-40 p-4 bg-gray-900 text-green-400 text-xs font-mono focus:outline-none resize-none"
                  spellCheck={false}
                />
                <div className="p-3 bg-gray-800">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-semibold active:scale-95 transition-transform flex items-center gap-2">
                    <FaPlay size={10} />
                    Ishga tushirish
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pastki navigatsiya */}
        <div className="flex justify-between mt-6 mb-8">
          {prevLesson ? (
            <Link
              to={`/lessons/${prevLesson.id}`}
              className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-3 rounded-xl shadow-sm active:scale-95 transition-transform"
            >
              <FaArrowLeft size={14} />
              <span className="hidden sm:inline">{prevLesson.title}</span>
              <span className="sm:hidden">Oldingi</span>
            </Link>
          ) : <div></div>}

          {nextLesson && (
            <Link
              to={`/lessons/${nextLesson.id}`}
              className={`flex items-center gap-2 text-sm px-4 py-3 rounded-xl shadow-sm active:scale-95 transition-transform ${
                completedSet.has(lesson.id)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-400 pointer-events-none'
              }`}
              onClick={(e) => !completedSet.has(lesson.id) && e.preventDefault()}
            >
              <span className="hidden sm:inline">{nextLesson.title}</span>
              <span className="sm:hidden">Keyingi</span>
              {!completedSet.has(lesson.id) && <FaLock size={12} />}
              {completedSet.has(lesson.id) && <FaArrowRight size={14} />}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;