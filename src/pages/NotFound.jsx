import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center animate-slide-up">
        <div className="relative mx-auto w-32 h-32 mb-8">
          <FaExclamationTriangle className="text-8xl text-yellow-400" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-yellow-600">
            404
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sahifa topilmadi</h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center space-x-2">
            <FaHome />
            <span>Bosh sahifa</span>
          </Link>
          <Link to="/lessons" className="btn-outline flex items-center justify-center space-x-2">
            <FaSearch />
            <span>Darslarni ko'rish</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;