
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/Product/Product';
import Notfound from './pages/Notfound/Notfound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/*" element={<Notfound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
