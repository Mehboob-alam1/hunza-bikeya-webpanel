import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Passengers from "./pages/Passengers/Passengers";
import Drivers from "./pages/Drivers/Drivers";
import OfferBanner from "./pages/OfferBanner/OfferBanner";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/passengers" element={<Passengers />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/offer-banner" element={<OfferBanner />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
