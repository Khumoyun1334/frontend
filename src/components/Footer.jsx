import { FaGraduationCap, FaTelegram, FaYoutube, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaGraduationCap className="text-3xl text-primary-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                WebDarslik
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              HTML va CSS bo'yicha to'liq o'quv platforma. 16 ta dars, amaliy mashqlar va testlar bilan bilimingizni mustahkamlang.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">Tezkor havolalar</h3>
            <ul className="space-y-2">
              {['Barcha darslar', 'Amaliyot', 'Testlar', 'PDF yuklash'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">Ijtimoiy tarmoqlar</h3>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: FaTelegram, color: 'hover:text-blue-400', link: '#' },
                { icon: FaYoutube, color: 'hover:text-red-400', link: '#' },
                { icon: FaInstagram, color: 'hover:text-pink-400', link: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center ${social.color} transition-all hover:scale-110`}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} WebDarslik. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 flex items-center justify-center space-x-1">
            <span>Yaratilgan</span>
            <FaHeart className="text-red-500 mx-1" />
            <span>bilan o'quvchilar uchun</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;