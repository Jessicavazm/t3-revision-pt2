import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import './styles/App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* Routes are declared within this component */}
      <BrowserRouter>
      {/** Declare individual route components here*/}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
