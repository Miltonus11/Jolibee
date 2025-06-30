import { NavBar } from "./components/NavBar"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home/Home'
import { Menu } from "./pages/Menu/Menu"
import { Location } from "./pages/Locations/Locations"
import { Rewards } from "./pages/Rewards/Rewards"
import { Franchising } from "./pages/Franchising/Franchising"
import { JollyMerch } from "./pages/JollyMerchShop/JollyMerch"
import { Layout } from "./layouts/Layout"
import {Cart} from './pages/Cart/Cart'
function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/MenuPage" element={<Menu />}/>
          <Route path="/LocationPage" element={<Location />}/>
          <Route path="/RewardsPage" element={<Rewards />}/>
          <Route path="/FranchisingPage" element={<Franchising />}/>
          <Route path="/JollyMerch" element={<JollyMerch />}/>
          <Route path="/Cart" element={<Cart />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
