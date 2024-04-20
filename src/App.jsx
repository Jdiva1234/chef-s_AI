import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Surprise from "./pages/Surprise";
import Nopages from "./pages/Nopages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="*" element={<Nopages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
