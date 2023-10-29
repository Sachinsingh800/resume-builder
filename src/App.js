import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Page/Home/Home';
import FirstSection from './Sections/FirstSection/FirstSection';
import Footer from './Component/Footer/Footer';
import SecondSection from './Sections/SecondSection/SecondSection';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <FirstSection/>
      <SecondSection/>
      <Footer/>
    </div>
  );
}

export default App;
