// import logo from '../logo.svg';
import '../stylesheets/App.css';
// import function_name from path_to_file
import Header from  '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';

function App() {
  return (
    <div class='App'>
        <Header />
        <FoodList /> 
        <Footer />
    </div>
  );
}

export default App;
