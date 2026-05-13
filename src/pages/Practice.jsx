import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaPlay, FaCode, FaCheck, FaCopy, FaUndo, FaSave,
  FaDownload, FaShare, FaEye, FaEyeSlash, FaLightbulb,
  FaExclamationTriangle, FaCheckCircle, FaArrowLeft,
  FaArrowRight, FaClock, FaStar, FaTrophy, FaRedo,
  FaChevronRight, FaList, FaTimes, FaExpand, FaCompress,
  FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import { lessons, getLessonById } from '../data/lessonsData';
import ProgressBar from '../components/ProgressBar';

const Practice = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  
  const [lesson, setLesson] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showPreview, setShowPreview] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [savedCodes, setSavedCodes] = useState([]);
  const [showSavedCodes, setShowSavedCodes] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [errors, setErrors] = useState([]);
  const [activeTab, setActiveTab] = useState('html'); // html | css | js
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [fontSize, setFontSize] = useState(14);

  const hints = [
    'HTML teglarini to\'g\'ri yopishni unutmang',
    'Atributlarni qo\'shtirnoq ichida yozing',
    'Kodingizni tekshirib ko\'ring',
    'Oddiy kodlardan boshlang',
  ];

  useEffect(() => {
    const found = getLessonById(lessonId);
    if (found) {
      setLesson(found);
      setCode(found.content?.practice?.starterCode || '');
      setCompletedTasks([]);
      setOutput('');
      setTimeSpent(0);
      setScore(0);
      setShowCompletion(false);
      setErrors([]);
      setIsTimerRunning(true);
    }
  }, [lessonId]);

  // Timer
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRun = () => {
    setIsRunning(true);
    setErrors([]);
    
    // Simulate running code
    setTimeout(() => {
      let hasErrors = false;
      const newErrors = [];
      
      // Basic validation
      if (activeTab === 'html') {
        if (!code.includes('<!DOCTYPE html>')) {
          newErrors.push('DOCTYPE deklaratsiyasi yo\'q');
          hasErrors = true;
        }
        if (!code.includes('<html')) {
          newErrors.push('<html> tegi topilmadi');
          hasErrors = true;
        }
        if (!code.includes('<body')) {
          newErrors.push('<body> tegi topilmadi');
          hasErrors = true;
        }
        
        const openTags = (code.match(/<\w+/g) || []).length;
        const closeTags = (code.match(/<\/\w+/g) || []).length;
        if (openTags !== closeTags) {
          newErrors.push(`Teglar soni mos kelmaydi: ${openTags} ochilgan, ${closeTags} yopilgan`);
          hasErrors = true;
        }
      }

      if (hasErrors) {
        setErrors(newErrors);
        setOutput('❌ Kodda xatoliklar bor:\n\n' + newErrors.join('\n'));
      } else {
        setOutput('✅ Kod muvaffaqiyatli ishladi!\n\nSizning HTML sahifangiz tayyorlandi.');
        
        // Auto-complete tasks
        const autoCompleted = [];
        if (code.includes('<h1>') || code.includes('<h1 ')) autoCompleted.push(0);
        if (code.includes('<p>')) autoCompleted.push(1);
        if (code.includes('<br>') || code.includes('<br/>') || code.includes('<br />')) autoCompleted.push(2);
        if (code.includes('<strong>') || code.includes('<b>')) autoCompleted.push(3);
        
        const newCompleted = [...new Set([...completedTasks, ...autoCompleted])];
        setCompletedTasks(newCompleted);
        
        // Calculate score
        const newScore = Math.round((newCompleted.length / (lesson?.content?.practice?.tasks?.length || 4)) * 100);
        setScore(newScore);
        
        // Check completion
        if (newCompleted.length === (lesson?.content?.practice?.tasks?.length || 4)) {
          setShowCompletion(true);
          setIsTimerRunning(false);
          
          // Save to localStorage
          const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
          if (currentUser.id) {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
              if (!users[userIndex].completedPractices) users[userIndex].completedPractices = [];
              if (!users[userIndex].completedPractices.includes(parseInt(lessonId))) {
                users[userIndex].completedPractices.push(parseInt(lessonId));
              }
              if (!users[userIndex].completedLessons) users[userIndex].completedLessons = [];
              if (!users[userIndex].completedLessons.includes(parseInt(lessonId))) {
                users[userIndex].completedLessons.push(parseInt(lessonId));
              }
              localStorage.setItem('users', JSON.stringify(users));
              localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
            }
          }
        }
      }
      setIsRunning(false);
    }, 1000);
  };

  const toggleTask = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter(i => i !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  const saveCode = () => {
    const newSaved = {
      id: Date.now(),
      lessonId: parseInt(lessonId),
      code,
      cssCode,
      jsCode,
      activeTab,
      date: new Date().toLocaleString('uz-UZ'),
    };
    const updated = [newSaved, ...savedCodes].slice(0, 10);
    setSavedCodes(updated);
    localStorage.setItem('savedCodes', JSON.stringify(updated));
  };

  const loadSavedCode = (saved) => {
    setCode(saved.code);
    setCssCode(saved.cssCode || '');
    setJsCode(saved.jsCode || '');
    setActiveTab(saved.activeTab || 'html');
    setShowSavedCodes(false);
  };

  const deleteSavedCode = (id) => {
    const updated = savedCodes.filter(s => s.id !== id);
    setSavedCodes(updated);
    localStorage.setItem('savedCodes', JSON.stringify(updated));
  };

  const downloadCode = () => {
    const fullCode = `
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amaliyot - ${lesson?.title || ''}</title>
    <style>
${cssCode}
    </style>
</head>
<body>
${code}
    <script>
${jsCode}
    </script>
</body>
</html>`;
    
    const blob = new Blob([fullCode], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `practice-lesson-${lessonId}.html`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const shareCode = () => {
    const fullCode = code + '\n' + cssCode + '\n' + jsCode;
    navigator.clipboard.writeText(fullCode);
    alert('Kod nusxalandi!');
  };

  const getCurrentLessonIndex = () => {
    return lessons.findIndex(l => l.id === parseInt(lessonId));
  };

  const goToNextPractice = () => {
    const currentIndex = getCurrentLessonIndex();
    if (currentIndex < lessons.length - 1) {
      navigate(`/practice/${lessons[currentIndex + 1].id}`);
    }
  };

  const goToPrevPractice = () => {
    const currentIndex = getCurrentLessonIndex();
    if (currentIndex > 0) {
      navigate(`/practice/${lessons[currentIndex - 1].id}`);
    }
  };

  const getEditorContent = () => {
    switch (activeTab) {
      case 'html': return code;
      case 'css': return cssCode;
      case 'js': return jsCode;
      default: return code;
    }
  };

  const setEditorContent = (value) => {
    switch (activeTab) {
      case 'html': setCode(value); break;
      case 'css': setCssCode(value); break;
      case 'js': setJsCode(value); break;
    }
  };

  const tabs = [
    { id: 'html', label: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { id: 'css', label: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { id: 'js', label: 'JS', icon: FaJs, color: 'text-yellow-500' },
  ];

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FaExclamationTriangle className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Amaliyot topilmadi</h2>
          <Link to="/lessons" className="btn-primary inline-flex items-center">
            <FaArrowLeft className="mr-2" /> Darslarga qaytish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      <div className={`${isFullscreen ? 'h-full' : 'max-w-7xl mx-auto px-4'}`}>
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Link
                to={`/lessons/${lessonId}`}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <FaArrowLeft className="text-gray-600" />
              </Link>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  {lesson.content?.practice?.title || 'Amaliyot'}
                </h1>
                <p className="text-sm text-gray-500">
                  {lesson.title} - Dars #{lesson.id}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Timer */}
              <div className="flex items-center space-x-1 text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                <FaClock className="text-sm" />
                <span className="font-mono text-sm">{formatTime(timeSpent)}</span>
              </div>

              {/* Progress */}
              <div className="flex items-center space-x-1 text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                <FaCheckCircle className={`text-sm ${completedTasks.length === (lesson.content?.practice?.tasks?.length || 0) ? 'text-green-500' : ''}`} />
                <span className="text-sm">{completedTasks.length}/{lesson.content?.practice?.tasks?.length || 0}</span>
              </div>

              {/* Score */}
              <div className="flex items-center space-x-1 text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                <FaStar className="text-yellow-500 text-sm" />
                <span className="text-sm font-bold">{score}%</span>
              </div>

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isFullscreen ? <FaCompress className="text-gray-600" /> : <FaExpand className="text-gray-600" />}
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Left Panel - Instructions & Tasks */}
          <div className="lg:col-span-1 space-y-4">
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <FaLightbulb className="text-yellow-500 mr-2" />
                Topshiriq
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lesson.content?.practice?.description}
              </p>
            </div>

            {/* Tasks */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <FaList className="text-primary-500 mr-2" />
                Bajarilishi kerak
              </h3>
              <div className="space-y-2">
                {lesson.content?.practice?.tasks?.map((task, i) => (
                  <button
                    key={i}
                    onClick={() => toggleTask(i)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl border-2 transition-all text-left ${
                      completedTasks.includes(i)
                        ? 'bg-green-50 border-green-400'
                        : 'bg-white border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      completedTasks.includes(i)
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300'
                    }`}>
                      {completedTasks.includes(i) && <FaCheck className="text-white text-xs" />}
                    </div>
                    <span className={`text-sm ${completedTasks.includes(i) ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {task}
                    </span>
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-primary-600 font-medium">
                    {Math.round((completedTasks.length / (lesson.content?.practice?.tasks?.length || 1)) * 100)}%
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-primary-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(completedTasks.length / (lesson.content?.practice?.tasks?.length || 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Hints */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <button
                onClick={() => {
                  setShowHint(!showHint);
                  setCurrentHint(0);
                }}
                className="flex items-center justify-between w-full"
              >
                <h3 className="font-semibold text-gray-800 flex items-center">
                  <FaLightbulb className="text-yellow-500 mr-2" />
                  Maslahatlar
                </h3>
                <FaChevronRight className={`text-gray-400 transition-transform ${showHint ? 'rotate-90' : ''}`} />
              </button>
              
              {showHint && (
                <div className="mt-4 space-y-3 animate-fade-in">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-yellow-800">{hints[currentHint]}</p>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentHint(Math.max(0, currentHint - 1))}
                      disabled={currentHint === 0}
                      className="text-sm text-primary-600 hover:text-primary-700 disabled:text-gray-400"
                    >
                      ← Oldingi
                    </button>
                    <span className="text-sm text-gray-400">{currentHint + 1}/{hints.length}</span>
                    <button
                      onClick={() => setCurrentHint(Math.min(hints.length - 1, currentHint + 1))}
                      disabled={currentHint === hints.length - 1}
                      className="text-sm text-primary-600 hover:text-primary-700 disabled:text-gray-400"
                    >
                      Keyingi →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Saved Codes */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <button
                onClick={() => setShowSavedCodes(!showSavedCodes)}
                className="flex items-center justify-between w-full"
              >
                <h3 className="font-semibold text-gray-800 flex items-center">
                  <FaSave className="text-blue-500 mr-2" />
                  Saqlangan kodlar
                </h3>
                <span className="text-sm text-gray-400">{savedCodes.length} ta</span>
              </button>

              {showSavedCodes && (
                <div className="mt-4 space-y-2 max-h-48 overflow-y-auto animate-fade-in">
                  {savedCodes.length > 0 ? (
                    savedCodes.map((saved) => (
                      <div key={saved.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-700 truncate">
                            Dars #{saved.lessonId}
                          </p>
                          <p className="text-xs text-gray-400">{saved.date}</p>
                        </div>
                        <div className="flex space-x-1 ml-2">
                          <button
                            onClick={() => loadSavedCode(saved)}
                            className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50"
                          >
                            <FaDownload className="text-sm" />
                          </button>
                          <button
                            onClick={() => deleteSavedCode(saved.id)}
                            className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"
                          >
                            <FaTimes className="text-sm" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 text-center py-4">
                      Hozircha saqlangan kodlar yo'q
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Editor & Preview */}
          <div className="lg:col-span-2 space-y-4">
            {/* Code Editor */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Editor Header */}
              <div className="bg-gray-900 px-4 py-2 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-1">
                  {/* Tabs */}
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
                        activeTab === tab.id
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <tab.icon className={tab.color} />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-1">
                  {/* Font Size Controls */}
                  <button
                    onClick={() => setFontSize(Math.max(10, fontSize - 2))}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800 text-sm"
                  >
                    A-
                  </button>
                  <span className="text-gray-400 text-xs">{fontSize}px</span>
                  <button
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800 text-sm"
                  >
                    A+
                  </button>

                  <div className="w-px h-5 bg-gray-700 mx-2"></div>

                  {/* Actions */}
                  <button
                    onClick={() => setEditorContent(lesson.content?.practice?.starterCode || '')}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800"
                    title="Qayta boshlash"
                  >
                    <FaRedo className="text-sm" />
                  </button>
                  <button
                    onClick={() => navigator.clipboard.writeText(getEditorContent())}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800"
                    title="Nusxalash"
                  >
                    <FaCopy className="text-sm" />
                  </button>
                  <button
                    onClick={saveCode}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800"
                    title="Saqlash"
                  >
                    <FaSave className="text-sm" />
                  </button>
                  <button
                    onClick={downloadCode}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800"
                    title="Yuklab olish"
                  >
                    <FaDownload className="text-sm" />
                  </button>
                  <button
                    onClick={shareCode}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800"
                    title="Ulashish"
                  >
                    <FaShare className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Editor */}
              <textarea
                value={getEditorContent()}
                onChange={(e) => setEditorContent(e.target.value)}
                className="w-full h-64 md:h-80 p-4 font-mono bg-gray-800 text-green-400 focus:outline-none resize-none"
                style={{ fontSize: `${fontSize}px`, lineHeight: '1.6' }}
                spellCheck="false"
                placeholder={`// ${activeTab.toUpperCase()} kodingizni shu yerga yozing...`}
              />

              {/* Error Display */}
              {errors.length > 0 && (
                <div className="bg-red-50 border-t border-red-200 p-4">
                  <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center">
                    <FaExclamationTriangle className="mr-2" />
                    Xatoliklar:
                  </h4>
                  <ul className="space-y-1">
                    {errors.map((error, i) => (
                      <li key={i} className="text-sm text-red-600 flex items-start space-x-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Run Button */}
              <div className="p-4 bg-gray-50 border-t flex items-center justify-between">
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="btn-primary flex items-center space-x-2"
                >
                  {isRunning ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Ishlayapti...</span>
                    </>
                  ) : (
                    <>
                      <FaPlay />
                      <span>Kodni ishga tushirish</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {showPreview ? <FaEyeSlash /> : <FaEye />}
                  <span>{showPreview ? 'Natijani yashirish' : 'Natijani ko\'rsatish'}</span>
                </button>
              </div>
            </div>

            {/* Preview / Output */}
            {showPreview && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
                <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-700 flex items-center">
                    <FaEye className="mr-2 text-gray-500" />
                    Natija
                  </h3>
                  {output && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      output.startsWith('✅') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {output.startsWith('✅') ? 'Muvaffaqiyatli' : 'Xatolik'}
                    </span>
                  )}
                </div>
                <div className="p-4 min-h-[200px]">
                  {output ? (
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                      {output}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <FaCode className="text-4xl mx-auto mb-3" />
                        <p>Kodni ishga tushirish uchun yuqoridagi tugmani bosing</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={goToPrevPractice}
            disabled={getCurrentLessonIndex() === 0}
            className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
          >
            <FaArrowLeft />
            <div>
              <span className="text-xs text-gray-500">Oldingi amaliyot</span>
              <p className="font-medium text-gray-800 text-sm">
                {getCurrentLessonIndex() > 0 ? lessons[getCurrentLessonIndex() - 1]?.title : '—'}
              </p>
            </div>
          </button>

          <button
            onClick={goToNextPractice}
            disabled={getCurrentLessonIndex() === lessons.length - 1}
            className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
          >
            <div className="text-right">
              <span className="text-xs text-gray-500">Keyingi amaliyot</span>
              <p className="font-medium text-gray-800 text-sm">
                {getCurrentLessonIndex() < lessons.length - 1 ? lessons[getCurrentLessonIndex() + 1]?.title : '—'}
              </p>
            </div>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center animate-slide-up">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaTrophy className="text-white text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Tabriklaymiz! 🎉
            </h2>
            <p className="text-gray-600 mb-2">
              Siz barcha topshiriqlarni muvaffaqiyatli bajardingiz!
            </p>
            <div className="flex items-center justify-center space-x-4 my-6">
              <div className="text-center">
                <FaStar className="text-yellow-500 text-2xl mx-auto mb-1" />
                <p className="text-2xl font-bold text-gray-800">{score}%</p>
                <p className="text-xs text-gray-500">Ball</p>
              </div>
              <div className="text-center">
                <FaClock className="text-blue-500 text-2xl mx-auto mb-1" />
                <p className="text-2xl font-bold text-gray-800">{formatTime(timeSpent)}</p>
                <p className="text-xs text-gray-500">Vaqt</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                to={`/lessons/${lessonId}`}
                className="btn-primary"
                onClick={() => setShowCompletion(false)}
              >
                Darsga qaytish
              </Link>
              <button
                onClick={() => {
                  setShowCompletion(false);
                  goToNextPractice();
                }}
                className="btn-outline"
              >
                Keyingi amaliyot
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Practice;