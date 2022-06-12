import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {Route, Routes, Navigate } from 'react-router-dom';
import Success from './pages/Success';

const App = () => {
    const user = false;
  return (
    <Routes>
    <Route path='/success' element ={<Success/>} />    
    <Route path='/' element ={<Home/>} />   
    <Route path="/products/:category" element={<ProductList />} />
    <Route path="/product/:id" element={<SingleProduct />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={ user ? (<Navigate to ="/login"/>) :(<Login/>) } />
    <Route path="/register" element={ user ? (<Navigate to ="/"/>) :(<Register/>) } />   
    </Routes> 
   

  )
}


export default App
