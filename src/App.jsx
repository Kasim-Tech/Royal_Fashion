import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbaar from './Components/Hadder/Navbaar';
import Home from './Components/Pages/Home';
import Collections from './Components/Pages/Collection';
import Brands from './Components/Pages/Brand';
import New from './Components/Pages/New';
import AboutUs from './Components/Pages/About';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <Router> {/* This is the BrowserRouter */}
      <div>
        <Navbaar />

        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/new" element={<New />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
