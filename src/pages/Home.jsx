import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaBook, FaLaptopCode, FaFilePdf, FaCheckCircle, 
  FaArrowRight, FaStar, FaUsers, FaClock, FaGraduationCap,
  FaPlay, FaChartLine, FaHeart, FaCode,
  FaUserShield, FaTimes, FaPhone, FaLock, FaEye, FaEyeSlash
} from 'react-icons/fa';
import { lessons } from '../data/lessonsData';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();
  
  // Admin modal state
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPhone, setAdminPhone] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [adminError, setAdminError] = useState('');
  const [adminLoading, setAdminLoading] = useState(false);

  // CTRL + ALT + SHIFT
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.shiftKey) {
        e.preventDefault();
        setShowAdminModal(true);
        setAdminPhone('');
        setAdminPassword('');
        setAdminError('');
      }
      if (e.key === 'Escape' && showAdminModal) {
        setShowAdminModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAdminModal]);

  // Admin login
  const handleAdminLogin = (e) => {
    e.preventDefault();
    setAdminError('');

    if (!adminPhone.trim()) {
      setAdminError('Telefon raqam kiriting');
      return;
    }
    if (!adminPassword) {
      setAdminError('Parol kiriting');
      return;
    }

    setAdminLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      const admin = users.find(u => 
        u.phone === adminPhone.trim() && 
        u.password === adminPassword && 
        u.role === 'admin'
      );

      if (admin) {
        localStorage.setItem('currentUser', JSON.stringify(admin));
        setShowAdminModal(false);
        navigate('/admin');
      } else {
        setAdminError('Telefon yoki parol noto\'g\'ri, yoki admin huquqi yo\'q');
      }
      setAdminLoading(false);
    }, 600);
  };

  const features = [
    { icon: FaBook, title: '16 ta dars', desc: 'HTML va CSS bo\'yicha to\'liq kurs', color: 'from-blue-500 to-blue-600' },
    { icon: FaLaptopCode, title: 'Amaliyot', desc: 'Har bir darsdan keyin amaliy mashqlar', color: 'from-green-500 to-green-600' },
    { icon: FaFilePdf, title: 'PDF materiallar', desc: 'Har bir dars uchun PDF yuklash', color: 'from-purple-500 to-purple-600' },
    { icon: FaCheckCircle, title: 'Testlar', desc: '160 ta test savollari', color: 'from-orange-500 to-orange-600' },
  ];

  const stats = [
    { icon: FaUsers, value: '500+', label: 'O\'quvchilar' },
    { icon: FaBook, value: '16', label: 'Darslar' },
    { icon: FaClock, value: '15+', label: 'Soat dars' },
    { icon: FaStar, value: '4.9', label: 'Reyting' },
  ];

  return (
    <div className="overflow-x-hidden">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700"></div>
          <div className="hidden md:block absolute inset-0 opacity-10" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E")' }}>
          </div>
        </div>

        <div className="relative w-full md:hidden px-5 py-16 text-white">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <FaGraduationCap className="mr-2 text-yellow-300" />
              Bepul o'quv platforma
            </div>
            <h1 className="text-3xl font-extrabold leading-tight mb-3">HTML & CSS</h1>
            <p className="text-5xl font-black text-yellow-300 mb-2">Oson</p>
            <p className="text-xl font-light text-white/80 mb-2">O'rganing</p>
            <p className="text-white/60 text-sm mb-8">16 ta dars • 160 ta test • Amaliy mashqlar</p>
            <div className="space-y-3 max-w-xs mx-auto">
              <Link to="/lessons" className="flex items-center justify-center gap-2 w-full bg-white text-blue-700 py-4 rounded-2xl font-bold text-base active:scale-95 transition-transform shadow-lg shadow-black/20">
                <FaPlay className="text-sm" /> Darslarni boshlash
              </Link>
              <Link to="/register" className="flex items-center justify-center gap-2 w-full border-2 border-white/40 text-white py-4 rounded-2xl font-bold text-base active:scale-95 transition-transform backdrop-blur-sm">
                <FaGraduationCap className="text-sm" /> Ro'yxatdan o'tish
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 hidden md:grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <FaGraduationCap className="text-yellow-300 mr-2 text-lg" />
              <span className="text-white/90 font-medium">Bepul o'quv platforma</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              HTML & CSS ni
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Oson O'rganing</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed">
              16 ta batafsil dars, 160 ta test savoli va amaliy mashqlar bilan veb-dasturlashni noldan o'rganing. Har bir dars uchun PDF materiallar mavjud.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/lessons" className="group inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <FaPlay className="group-hover:scale-110 transition-transform" /> Boshlash
              </Link>
              <Link to="/register" className="group inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-700 hover:border-white hover:-translate-y-1 transition-all duration-300">
                <FaGraduationCap className="group-hover:scale-110 transition-transform" /> Ro'yxatdan o'tish
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/20">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-500 text-xs ml-3 font-mono">index.html</span>
                </div>
                <pre className="text-gray-300 text-sm font-mono leading-relaxed">
                  <code>{`<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Mening saytim</title>
  <link rel="stylesheet" 
        href="style.css">
</head>
<body>
  <h1>👋 Salom Dunyo!</h1>
  <p>Bu mening birinchi 
     veb-sahifam 🎉</p>
  <button class="btn">
    Boshlash
  </button>
</body>
</html>`}</code>
                </pre>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-2 text-white">
                <FaCheckCircle className="text-xl" />
                <span className="font-bold">To'g'ri kod!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f9fafb" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,100L0,100Z"/>
          </svg>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="relative z-10 -mt-10 md:-mt-20 pb-8 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-8 text-center hover:-translate-y-1 md:hover:-translate-y-3 transition-all duration-300 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-xl md:text-3xl text-blue-600" />
                </div>
                <div className="text-2xl md:text-4xl font-black text-gray-800">{stat.value}</div>
                <div className="text-xs md:text-base text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="md:hidden px-4 pb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Nega aynan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">biz?</span>
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 active:scale-95 transition-transform">
              <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-3`}>
                <feature.icon className="text-white text-lg" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hidden md:block py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Nega aynan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">biz?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Platformamiz o'quvchilar uchun eng qulay va samarali o'qish imkoniyatini yaratadi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LESSONS PREVIEW ==================== */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                Barcha <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Darslar</span>
              </h2>
              <p className="text-sm md:text-lg text-gray-500">16 ta dars • 160 ta test • 16 ta amaliy mashq</p>
            </div>
            <Link to="/lessons" className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Barchasini ko'rish <FaArrowRight className="text-sm" />
            </Link>
          </div>

          <div className="md:hidden grid grid-cols-2 gap-3">
            {lessons.slice(0, 6).map((lesson) => (
              <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="bg-white rounded-2xl shadow-sm overflow-hidden active:scale-95 transition-transform border border-gray-100">
                <div className={`bg-gradient-to-r ${lesson.color} p-3`}>
                  <span className="text-white/80 text-lg font-bold">{lesson.id < 10 ? `0${lesson.id}` : lesson.id}</span>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-gray-800 text-sm mb-0.5">{lesson.title}</h3>
                  <p className="text-gray-400 text-xs truncate">{lesson.subtitle}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                    <FaClock className="w-3 h-3" /> <span>{lesson.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
            <Link to="/lessons" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex flex-col items-center justify-center p-6 text-white active:scale-95 transition-transform">
              <FaArrowRight className="text-2xl mb-2" />
              <span className="font-bold text-sm">Barchasi</span>
              <span className="text-xs text-white/70">16 ta dars</span>
            </Link>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessons.slice(0, 8).map((lesson) => (
              <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${lesson.color} p-6 lg:p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <span className="text-white/80 text-4xl lg:text-5xl font-black">{lesson.id < 10 ? `0${lesson.id}` : lesson.id}</span>
                    <h3 className="text-white font-bold text-xl mt-3">{lesson.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{lesson.subtitle}</p>
                  </div>
                </div>
                <div className="p-5 lg:p-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-gray-500"><FaClock className="text-blue-400" size={14} /> {lesson.duration}</span>
                    <span className="flex items-center gap-1 text-gray-500"><FaStar className="text-yellow-400" size={14} /> {lesson.content?.questions?.length || 0} savol</span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Darsni boshlash</span> <FaArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/lessons" className="md:hidden mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-2xl font-bold text-sm active:scale-95 transition-transform">
            Barcha 16 ta darsni ko'rish <FaArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 md:mb-16">
            Qanday <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ishlaydi?</span>
          </h2>
          <div className="md:hidden space-y-4">
            {[
              { step: '01', title: "Ro'yxatdan o'ting", desc: 'Ism, familiya va telefon raqamingiz bilan bepul ro\'yxatdan o\'ting' },
              { step: '02', title: 'Darslarni o\'rganing', desc: '16 ta ketma-ket dars orqali HTML va CSS ni o\'rganing' },
              { step: '03', title: 'Test topshiring', desc: 'Har bir darsdan keyin testni 60%+ ga yeching, keyingi dars ochiladi' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: "Ro'yxatdan o'ting", desc: 'Ism, familiya va telefon raqamingiz bilan bepul ro\'yxatdan o\'ting' },
              { step: '02', title: 'Darslarni o\'rganing', desc: '16 ta ketma-ket dars orqali HTML va CSS ni o\'rganing' },
              { step: '03', title: 'Test va amaliyot', desc: 'Har bir darsdan keyin test va amaliy mashqlarni bajaring' },
            ].map((item, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                  <span className="text-white text-3xl font-black">{item.step}</span>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <FaStar className="text-white text-xs" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 rounded-3xl overflow-hidden">
            <div className="hidden md:block absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10 p-8 md:p-16 text-center text-white">
              <FaChartLine className="text-4xl md:text-7xl mx-auto mb-4 md:mb-8 text-white/80" />
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">O'rganishni bugun boshlang!</h2>
              <p className="text-white/70 md:text-white/80 text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
                Bepul ro'yxatdan o'ting va 16 ta dars, 160 ta test savoli hamda PDF materiallardan foydalaning.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link to="/register" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
                  <FaGraduationCap /> Bepul ro'yxatdan o'tish
                </Link>
                <Link to="/lessons" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 active:scale-95">
                  <FaBook /> Darslarni ko'rish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

      {/* ==================== ADMIN LOGIN MODAL ==================== */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowAdminModal(false)}></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 animate-slide-up">
            <button onClick={() => setShowAdminModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <FaTimes size={18} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaUserShield className="text-white text-2xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Admin Kirish</h2>
              <p className="text-sm text-gray-500 mt-1">Maxfiy admin panelga kirish</p>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              {adminError && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-xl">⚠️ {adminError}</div>
              )}

              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Telefon raqam</label>
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                  <input type="tel" placeholder="998900000000" value={adminPhone}
                    onChange={(e) => { setAdminPhone(e.target.value); setAdminError(''); }}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" autoFocus />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Parol</label>
                <div className="relative">
                  <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                  <input type={showPass ? 'text' : 'password'} placeholder="Admin paroli" value={adminPassword}
                    onChange={(e) => { setAdminPassword(e.target.value); setAdminError(''); }}
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={adminLoading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold text-sm active:scale-95 transition-all disabled:opacity-60">
                {adminLoading ? 'Tekshirilmoqda...' : 'Kirish'}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4">ESC tugmasi bilan yopish</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;