import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from './pages/NotFound';
import { GithubProvder } from "./context/github/GithubContext";


function App() {
  return (
    <GithubProvder>
      <Router>
        <div className="flex flex-col justiyfy-between h-screen">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </GithubProvder>
  );
}

export default App;
