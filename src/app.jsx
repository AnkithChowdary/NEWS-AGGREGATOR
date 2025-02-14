import React, { useState, useEffect } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import AboutUs from './components/About';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Z0LCGkw4uuhdACCaXz5otEI-y4cGc18",
  authDomain: "news-aggregator-857d4.firebaseapp.com",
  projectId: "news-aggregator-857d4",
  storageBucket: "news-aggregator-857d4.firebasestorage.app",
  messagingSenderId: "147846674630",
  appId: "1:147846674630:web:e0480cf298027a053d7fc7",
  measurementId: "G-LVVLPDZ5J9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('en');
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      alert('Please enter a search term!');
      return;
    }

    setLoading(true);

    try {
      const apiUrl = `https://newsdata.io/api/1/news?apikey=pub_6652658fe3bb5097c9d174bd4d1cc10d2fad4&q=${searchTerm}&language=${language}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch news!');
      }

      const data = await response.json();

      const formattedNews = data.results.map((item) => ({
        title: item.title,
        description: item.description,
        link: item.link,
        pubDate: item.pubDate,
        image_url: item.image_url || 'https://via.placeholder.com/150',
        source: item.source_id,
      }));

      setNewsData(formattedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={
            <div className="bg-white p-4 rounded shadow-md max-w-4xl mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter search term"
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="font-semibold mr-2">Select Language:</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border p-2 rounded"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="te">Telugu</option>
                </select>
              </div>
              <button
                onClick={handleSearch}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Search News
              </button>
              {loading ? (
                <p className="text-center mt-6 text-gray-500">Fetching news...</p>
              ) : (
                <News data={newsData} />
              )}
            </div>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login auth={auth} />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <div>Your protected content here.</div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
