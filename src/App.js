import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage'

function App() {
      return (
            <div className="App">
                  <Header />
                  <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='contact' element={<ContactPage />} />
                        <Route path='menu' element={<MenuPage />} />
                        <Route path='cart' element={<CartPage />} />
                  </Routes>
                  <Footer />
            </div>
      );
}

export default App;
