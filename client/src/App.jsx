import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Surprise from './pages/Surprise';
import Nopages from './pages/Nopages';
import Layout from './components/Layout/layout';

function App() {
  return (
    <BrowserRouter>
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
              <Explore />
            </Layout>
          }
        />
        <Route
          path="/surprise"
          element={
            <Layout title="ChefAI | Surprise">
              <Surprise />
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
