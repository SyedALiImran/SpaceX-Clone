//router Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styling
import "./App.css";

//Component Imports
import Header from './components/header'
import Footer from './components/footer'
//Pages Imports
import Home from "./pages/Home";
import Falcon from './pages/falcon9'
import FalconHeavy from './pages/falconHeavy'
import Dragon from './pages/dragon'
import Starship from './pages/starship'
import HumanSpaceFlight from './pages/humanSpaceLight'
import Rideshare from './pages/rideShare'
import Starlink from './pages/starlink'

function App() {
  return (
    <>
      <Router>
       <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/falcon9" element={<Falcon />} />
          <Route path="/falconheavy" element={<FalconHeavy />} />
          <Route path="/dragon" element={<Dragon />} />
          <Route path="/starship" element={<Starship />} />
          <Route path="/humanspaceflight" element={<HumanSpaceFlight />} />
          <Route path="/rideshare" element={<Rideshare />} />
          <Route path="/starlink" element={<Starlink />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
