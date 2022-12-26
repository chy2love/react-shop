import React from 'react';
import { themeState } from './components/Store';
import { useRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FasionPage from './pages/FasionPage';
import AccessoriesPage from './pages/AccessoriesPage';
import DigitalPage from './pages/DigitalPage';
import NavigationBar from './components/NavigationBar';
import 'normalize.css';
import PageNotFound from './pages/PageNotFound';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import fakeApi from './components/fakeApi';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/fashion" element={<FasionPage Api={fakeApi} />}></Route>
        <Route
          path="/accessories"
          element={<AccessoriesPage Api={fakeApi} />}></Route>
        <Route path="/digital" element={<DigitalPage Api={fakeApi} />}></Route>
        <Route path="product/:id" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
