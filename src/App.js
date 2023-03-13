import logo from './logo.svg';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import TextIcon from './components/TextIcon';
import Header from './screens/Header/Header';
import Banner from './screens/Banner/Banner';
import Tab from './screens/Tabs/Tab';
import Tab1 from './screens/Tabs/Tab1/Tab1';
import MyGame from './components/new game component/MyGame';
import FourCards from './components/four Cards/FourCards';
import Newgames from './screens/New Games/Newgames';
import Banner1 from './components/Banner1/Banner1';
import Banner01 from './screens/Banner1/Banner01';
import DescriptionComp from './components/Description/DescriptionComp';
import MerginDescription from './components/Description/MerginDescription';
import Description from './screens/Description/Description';
import BottomBarComponent from './components/BottomBarComponent/BottomBarComponent';
import Footer from './screens/Footer/Footer';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [language, setLanguages] = useState('');
  // console.log(language);
  // useEffect(() => {
  //   console.log(language);
  // }, [])

  // let data = document.querySelector('#header').innerHTML
  // console.log(data);
  // useEffect(() => {
  //   let text = document.getElementById("CR").innerText;
  //   console.log(text);
  //   const response = axios
  //     .post(
  //       "https://translation.googleapis.com/language/translate/v2",
  //       {},
  //       {
  //         params: {
  //           q: `${text}`,
  //           target: language,
  //           key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setConvertedText(response.data.data.translations[0].translatedText);
  //       console.log("====================================");
  //       console.log(response.data.data.translations[0].translatedText);
  //       console.log("====================================");
  //     })
  //     .catch((err) => {
  //       console.log("rest api error", err);
  //     });
  // }, [language]);
  return (
    <div className='mainDiv'>
      <Header />
      <Banner />
      <Tab />
      <Newgames />
      <Banner01 />
      <Description />
      <Footer />
      {/* <FourCards /> */}
      {/* <BottomBarComponent /> */}
    </div>
  );
}

export default App;
