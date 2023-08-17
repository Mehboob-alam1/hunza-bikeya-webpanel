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
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Error from "./pages/Error";
import PrivateRoutes from "./components/PrivateComponent";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="flex">
      <SkeletonTheme>
        <Routes element={PrivateRoutes}>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" exact element={<Home />}>
              <Route path="/dashboard/" exact element={<Dashboard />} />
              <Route
                path="/dashboard/passengers"
                exact
                element={<Passengers />}
              />
              <Route path="/dashboard/drivers" exact element={<Drivers />} />
              <Route
                path="/dashboard/offer-banner"
                exact
                element={<OfferBanner />}
              />
              <Route path="/dashboard/settings" exact element={<Settings />} />
            </Route>
          </Route>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" exact element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </SkeletonTheme>
    </div>
  );
}

export default App;
