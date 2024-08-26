
import './App.css';
import Brands from './Components/brands/Brands';
import Home from './Components/Home/Home';
import MyNavbar from './Components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <MyNavbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/brands" element={<Brands/>} />
             
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
