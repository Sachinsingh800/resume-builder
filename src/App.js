import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Page/Home/Home';
import FirstSection from './Sections/FirstSection/FirstSection';
import Footer from './Component/Footer/Footer';
import SecondSection from './Sections/SecondSection/SecondSection';
import CustomCursor from './Component/CustomCursor/CustomCursor';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <CustomCursor />
      <FirstSection/>
      <SecondSection/>
      <Footer/>
    </div>
  );
}

export default App;
