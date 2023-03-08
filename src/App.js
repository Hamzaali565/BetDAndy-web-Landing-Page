import logo from './logo.svg';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import TextIcon from './components/TextIcon';
import Header from './screens/Header/Header';
import Banner from './screens/Banner/Banner';
import Tab from './screens/Tabs/Tab';
// import Header from './screens/Header/Header';

function App() {
  return (
    <div>
      {/* <div style={{ backgroundColor: "#004965", flex: "0.9" }}>
        <SideBar />
      </div>
      <div style={{ backgroundColor: "pink", flex: "4" }}>
        <Feed />
      </div> */}
      {/* <TextIcon /> */}
      <Header />
      <Banner />
      <Tab />
    </div>
  );
}

export default App;
