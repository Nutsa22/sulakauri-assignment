import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Footer } from './components/Footer.js';
import BurgerMenu  from './components/BurgerMenu.js';
import PriceList from './components/PriceList.js';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import ProductArticle from './components/ProductAricle.js';
import Authors from './components/Authors.js';


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/ავტორები" element={<Authors/>}/>



    
</Routes>
</BrowserRouter>
  );
}

export default App;
