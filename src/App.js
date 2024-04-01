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
import { useEffect } from 'react';
import { checkAuthentication } from './Api/Api';


function App() {
  const [loading, setLoading] = useRecoilState(loadingStatus);

  useEffect(()=>{
    handleUserAuthenticationCheck()
  },[])

  const handleUserAuthenticationCheck = async () => {
    setLoading(true)
    try {
      const response = await checkAuthentication();

      if (response.status === true) {
          console.log(response,"check authentication")
      } else {
        console.error("Error fetching user profile:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="App">
      {loading &&  <CustomLoader />}
      <NavBar/>
      <Home/>
      <FirstSection/>
      <SecondSection/>
      <Footer/>
    </div>
  );
}

export default App;
