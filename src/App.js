import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Page/Home/Home';
import FirstSection from './Sections/FirstSection/FirstSection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <FirstSection/>
    </div>
  );
}

export default App;
