
import './App.css';
import { NavBar } from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

    </BrowserRouter>
    </CartProvider>

  );
}

export default App;
