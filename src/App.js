import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './Pages/Component/navbar/Navbar';
import PageNotFound from './Pages/PageNotFound/Page';
import Contact from './Pages/contactUs/Contact';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Fashion from './Pages/fashion/Fashion';
import Acheivement from './Pages/Achivments/Acheivement';
import Sustainability from './Pages/Sustainability/Sustainability';
import Brands from './Pages/brands/Brands';
import AnauraHome from './Pages/anauraHome/anauraHome';
import HowItsMade from './Pages/HowItsMade/HowItsMade';
import OurStory from './Pages/ourStory/ourStory';
import Footer from './Pages/Component/footer/Footer';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/anaura-for-brands" element={<Brands/>} />
        <Route path="/achivement" element={<Acheivement/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/how-its-made" element={<HowItsMade/>} />
        <Route path="/Sustainability" element={<Sustainability/>} />
        <Route path="/anaura-fashion" element={<Fashion/>} />
        <Route path="/anaura-home" element={<AnauraHome/>} />
        <Route path="/our-story" element={<OurStory/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
