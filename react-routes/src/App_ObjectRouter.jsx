import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import './styles/App.css';

const testRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    }
])

function App() {
  return (
    <div>
        <RouterProvider router={testRouter} />
    </div>
  );
}

export default App;
