import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Page/Home/Home';
import FirstSection from './Sections/FirstSection/FirstSection';
import SecondSection from './Sections/FirstSection/SecondSection/SecondSection';
import Footer from './Component/Footer/Footer';

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
