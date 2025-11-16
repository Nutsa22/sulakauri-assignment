import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductInfo from './components/ProductInfo';
import ProductData from './components/ProductData';
import Button from '@mui/material/Button';
import { Form } from './Form';
import Cart from './components/CartContainer';
import About from './components/About';
import BurgerMenuComponent from './components/BurgerMenu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <a href="/products" target="_blank">CLICK HERE</a>
          <Link to="/products" target="_blank">CLICK HERE WITH Link</Link>
          <Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link>
          
        </nav>
        <Routes>
          <Route path='/' element={<ProductData />} />
          <Route path='/burger' element={<BurgerMenuComponent />} />
          <Route path='/products' element={<ProductInfo />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/auth' element={<Form />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
        <Button variant="contained" color='success' sx={{background: 'purple'}}>Contained</Button>
      </div>
      {/* <Form /> */}

      {/* <PriceList /> */}
    </BrowserRouter>
  );
}

export default App;
