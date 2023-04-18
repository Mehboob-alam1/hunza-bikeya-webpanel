import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Passengers from "./pages/Passengers";
import Drivers from "./pages/Drivers";
import OfferBanner from "./pages/OfferBanner";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/passengers" element={<Passengers />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/offer-banner" element={<OfferBanner />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
