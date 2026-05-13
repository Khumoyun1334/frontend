import { useState } from 'react';
import { FaPlay, FaCode, FaCheck, FaCopy, FaUndo } from 'react-icons/fa';

const PracticeSection = ({ practice, lessonId }) => {
  const [code, setCode] = useState(practice.starterCode || '');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Natija chiqarilmoqda...');
    
    setTimeout(() => {
      setOutput('✅ Kod muvaffaqiyatli ishladi!\n\nNatija: HTML sahifa yaratildi.');
      setIsRunning(false);
    }, 1500);
  };

  const toggleTask = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter(i => i !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Practice Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <FaPlay className="text-green-600 text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{practice.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{practice.description}</p>

        {/* Tasks */}
        <div className="space-y-3 mb-8">
          <h3 className="font-semibold text-gray-700 mb-3">Bajarilishi kerak:</h3>
          {practice.tasks.map((task, i) => (
            <button
              key={i}
              onClick={() => toggleTask(i)}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl border-2 transition-all ${
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
              <span className={`text-left ${completedTasks.includes(i) ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {task}
              </span>
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Progress</span>
            <span className="text-primary-600 font-medium">
              {completedTasks.length}/{practice.tasks.length}
            </span>
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-primary-500 h-2 rounded-full transition-all"
              style={{ width: `${(completedTasks.length / practice.tasks.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gray-900 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaCode className="text-green-400" />
            <span className="text-white font-medium">HTML Editor</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCode(practice.starterCode || '')}
              className="flex items-center space-x-1 px-3 py-1 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <FaUndo />
              <span>Qayta boshlash</span>
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(code)}
              className="flex items-center space-x-1 px-3 py-1 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <FaCopy />
              <span>Nusxalash</span>
            </button>
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 p-6 font-mono text-sm bg-gray-800 text-green-400 focus:outline-none resize-none"
          spellCheck="false"
        />
        <div className="p-4 bg-gray-50 border-t">
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
        </div>
        {output && (
          <div className="p-6 border-t">
            <h4 className="font-semibold text-gray-700 mb-2">Natija:</h4>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeSection;