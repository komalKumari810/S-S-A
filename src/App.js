import './App.css';
import Nav from './components/Nav';
//import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/news/News';
import About from './components/about/About';

const App = () => {

  return (
    <div className="App"> 
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<h1>Home Comp</h1>} />
          <Route path="/elearning" element={<h1>Elearning comp</h1>} />
          <Route path="/courses" element={<h1>Courses comp</h1>} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
