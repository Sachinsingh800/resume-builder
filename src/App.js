import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Page/Home/Home';
import FirstSection from './Sections/FirstSection/FirstSection';
import Footer from './Component/Footer/Footer';
import SecondSection from './Sections/SecondSection/SecondSection';
import CustomCursor from './Component/CustomCursor/CustomCursor';
import { useRecoilState } from 'recoil';
import { loadingStatus } from './Recoil';
import CustomLoader from './Component/CustomLoader/CustomLoader';


function App() {
  const [loading, setLoading] = useRecoilState(loadingStatus);
  return (
    <div className="App">
      {loading &&  <CustomLoader />}
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
