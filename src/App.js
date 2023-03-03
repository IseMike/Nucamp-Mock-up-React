import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuItemsDirectoryPage from './pages/MenuItemsDirectoryPage';

function App() {
      return (
            <div className="App">
                  <Header/>
                  <MenuItemsDirectoryPage />
                  <Footer />
            </div>
      );
}

export default App;
