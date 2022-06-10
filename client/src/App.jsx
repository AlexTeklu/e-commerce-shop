import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      
       <Routes>
         <Route path='/' element ={<Home/>} />
         <Route path="/login" element={<Login  />} />
         <Route path="/register" element={<Register />} />
         <Route path="/products/:category" element={<ProductList />} />
         <Route path="/product/:id" element={<SingleProduct />} />
         <Route path="/cart" element={<Cart />} />
        
    

       </Routes>
    </div>
  
   

  )
}

export default App
