import './App.css';
import AdsSection from './Components/Display Ads section/AdsSection';
import Header from './Components/Header Bar/Header';
import SearchBar from './Components/Search Bar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />            {/* navbar for the webpage name  */}
      <SearchBar />         {/* search box*/}
      <AdsSection />        {/* display area where all the searched results will be shown */}
    </div>
  );
}

export default App;
