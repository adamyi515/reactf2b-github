import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from './pages/NotFound';
import User from './pages/User';

import { GithubProvder } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubProvder>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justiyfy-between h-screen">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route  path='/user/:login' element={<User />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvder>
  );
}

export default App;
