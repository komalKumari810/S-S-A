import './App.css';
import Navbar from './components/Navbar';
import News from './components/news/News';
import About from './components/about/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path='/' element={<h1>Home component</h1>} />
           <Route path='/elearning' element={<h1>Elearning component</h1>} />
           <Route path='/courses' element={<h1>Courses component</h1>} />
           <Route path='/news' element={<News />} />
           <Route path='/about' element={<About />} />
           <Route path='/signup' element={<h1>Signup component</h1>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
