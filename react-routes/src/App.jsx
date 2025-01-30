import Navbar from './components/Navbar';
import ProjectLayout from './pages/_templates/ProjectLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TerminalAppProject from './pages/TerminalAppProject';
import HomePage from './pages/HomePage';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* Routes are declared within this component */}
      <BrowserRouter>
        <Navbar />
        {/** Declare individual route components here*/}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/projects' element={<ProjectLayout />} >
            <Route path='terminalApp/' element={<TerminalAppProject />} />
            <Route path='/projects/terminalApp/:versionNumber' element={<TerminalAppProject />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
