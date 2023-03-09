import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
      return (
            <div className="App">
                  <Header />
                  <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='contact' element={<ContactPage />} />
                        <Route path='menu' element={<MenuPage />} />
                  </Routes>
                  <Footer />
            </div>
      );
}

export default App;
