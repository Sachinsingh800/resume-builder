import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Page/Home/Home';
import FirstSection from './Sections/FirstSection/FirstSection';
import SecondSection from './Sections/SecondSection/SecondSection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <FirstSection/>
      <SecondSection/>
    </div>
  );
}

export default App;
