import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import Practice from './pages/Practice';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin'; // YANGI
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogin = (userData) => setUser(userData);
  const handleRegister = (userData) => setUser(userData);
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {/* Auth pages */}
        <Route path="/register" element={user ? <Navigate to="/lessons" /> : <Register onRegister={handleRegister} />} />
        <Route path="/login" element={user ? <Navigate to="/lessons" /> : <Login onLogin={handleLogin} />} />
        
        {/* Admin login - alohida */}
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Practice */}
        <Route path="/practice/:lessonId" element={<Practice />} />
        
        {/* Main pages */}
        <Route path="*" element={
          <Layout user={user} onLogout={handleLogout}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lessons/:id" element={<LessonDetail />} />
              <Route path="/admin" element={user?.role === 'admin' ? <Admin /> : <Navigate to="/admin-login" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);