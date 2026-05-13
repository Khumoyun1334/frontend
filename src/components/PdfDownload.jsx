import { useState } from 'react';
import { FaTimes, FaFilePdf, FaDownload, FaSpinner } from 'react-icons/fa';

const PdfDownload = ({ lesson, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloaded(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="text-center">
          <div className="bg-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaFilePdf className="text-red-500 text-4xl" />
          </div>
          
          {!downloaded ? (
            <>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                PDF yuklab olish
              </h3>
              <p className="text-gray-500 mb-2">
                {lesson.title} - {lesson.subtitle}
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Fayl hajmi: ~2.5 MB
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">{lesson.pdfFile}</span>
                  <span className="text-gray-400">PDF</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full w-0"></div>
                </div>
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                {isDownloading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Yuklanmoqda...</span>
                  </>
                ) : (
                  <>
                    <FaDownload />
                    <span>Yuklab olish</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 mt-4">
                PDF faylni yuklab olgandan so'ng, uni qurilmangizda saqlashingiz mumkin.
              </p>
            </>
          ) : (
            <div className="py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Yuklandi!</h3>
              <p className="text-gray-500">PDF fayl muvaffaqiyatli yuklandi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfDownload;