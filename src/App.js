import './App.css';
import About from './Components/About/About';
import Brands from './Components/brands/Brands';
import Home from './Components/Home/Home';
import MyNavbar from './Components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer/Footer';
import Fashion from './Components/fashion/Fashion';
import Acheivement from './Components/Achivments/Acheivement';
import Ocean from './Components/Ocean/Ocean';

// import AnauraHome from './Components/AnauraHome/AnauraHome';
import PageNotFound from './Components/PageNotFound/Page';
import Contact from './Components/contactUs/Contact';
import About2 from './Pages/About/About';
import Fashion2 from './Pages/fashion/Fashion';
import Sustainability from './Pages/Sustainability/Sustainability';
import AnauraHome from './Pages/anauraHome/anauraHome';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/brands" element={<Brands/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/achivement" element={<Acheivement/>} />
        <Route path="/ocean" element={<Ocean/>} />
        {/* <Route path="/home" element={<AnauraHome/>}/> */}
        <Route path="/contact" element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>} />
        {/* <Route path="/contact-us" element={<Conatct/>}/> */}
        <Route path="/about2" element={<About2/>} />
        <Route path="/fashion2" element={<Fashion2/>} />
        <Route path="/Sustainability" element={<Sustainability/>} />
        <Route path="/anaura-home" element={<AnauraHome/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
