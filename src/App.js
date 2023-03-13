import Header from './screens/Header/Header';
import Banner from './screens/Banner/Banner';
import Tab from './screens/Tabs/Tab';
import Newgames from './screens/New Games/Newgames';
import Banner01 from './screens/Banner1/Banner01';
import Description from './screens/Description/Description';
import Footer from './screens/Footer/Footer';
import './App.css'

function App() {

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
