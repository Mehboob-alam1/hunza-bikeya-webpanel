import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Passengers from "./pages/Passengers/Passengers";
import Drivers from "./pages/Drivers/Drivers";
import OfferBanner from "./pages/OfferBanner/OfferBanner";
import Home from "./pages/Home/Home";
import Login from "./auth/Login/Login";
import Register from "./auth/register/Register";


function App() {
  return (
    <div>
      <Routes>  
        <Route path="/" exact element={<Home/>}>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/passengers" exact element={<Passengers />} />
          <Route path="/drivers" exact element={<Drivers />} />
          <Route path="/offer-banner" exact element={<OfferBanner />} />
        </Route>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>}/>

      </Routes>
    </div>
  );
}

export default App;
