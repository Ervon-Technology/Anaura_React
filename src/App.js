
import './App.css';
import About from './Components/About/About';
import Brands from './Components/brands/Brands';
import Home from './Components/Home/Home';
import MyNavbar from './Components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TouchSlider from './Components/pra/Pra';
import Footer from './Components/footer/Footer';
import Fashion from './Components/fashion/Fashion';

function App() {
  return (
    <div className="App">
    <MyNavbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/brands" element={<Brands/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/fashion" element={<Fashion/>} />
        {/* <Route path="/touch" element={<TouchSlider/>} /> */}
             
          
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
