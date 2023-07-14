import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Passengers from "./pages/Passengers/Passengers";
import Drivers from "./pages/Drivers/Drivers";
import OfferBanner from "./pages/OfferBanner";
import Home from "./pages/Home";
import Login from "./auth/Login/Login";
import Register from "./auth/register/Register";
import PassengerModel from "./pages/Passengers/PassengerModel";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <div className="flex">
        <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/passengers" element={<Passengers />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/offer-banner" element={<OfferBanner />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
