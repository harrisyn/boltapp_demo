import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Stories from './pages/Stories';
import Team from './pages/Team';
import News from './pages/News';
import Contact from './pages/Contact';
import Donate from './pages/Donate'; // Import the Donate component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} /> {/* Add the Donate route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;