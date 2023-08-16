import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <div className="flex flex-col justiyfy-between h-screen">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
