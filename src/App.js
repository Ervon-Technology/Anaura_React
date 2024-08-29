
import './App.css';
import About from './Components/About/About';
import Brands from './Components/brands/Brands';
import Home from './Components/Home/Home';
import MyNavbar from './Components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TouchSlider from './Components/pra/Pra';
import Footer from './Components/footer/Footer';
import Fashion from './Components/fashion/Fashion';
import CreativeDesignSection from './Components/demo/Demo';
// import TextScroller from './Components/stpl/TextScroll';
// import CardSection from './Components/stpl/card/card';
import Acheivement from './Components/Achivments/Acheivement';
import Ocean from './Components/Ocean/Ocean';
import Wow from './Components/wow_factor/Wow';

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
        <Route path="/achivement" element={<Acheivement/>} />
        <Route path="/ocean" element={<Ocean/>} />
        <Route path="/wow" element={<Wow/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
