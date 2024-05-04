import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Surprise from './pages/Surprise';
import Nopages from './pages/Nopages';
import Layout from './components/Layout/layout';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import Auth from './components/Authentication/auth';
import { supabase } from './components/Authentication/supabaseClient';

function App() {
  const [session, setSession] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <BrowserRouter>
      <Toaster position={isMobile ? 'bottom-center' : 'top-right'} />{' '}
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="ChefAI | Home">
              <Home />
            </Layout>
          }
        />
        <Route
          path="/explore"
          element={
            <Layout title="ChefAI | Explore">
              {!session ? <Auth /> : <Explore session={session} />}
            </Layout>
          }
        />
        <Route
          path="/surprise"
          element={
            <Layout title="ChefAI | Surprise">
              {!session ? <Auth /> : <Surprise session={session} />}
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout title="ChefAI | 404:Page Not Found">
              <Nopages />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
