import { Outlet, Navigate } from "react-router-dom";
import { useBikeya } from "../context/Context";

const PrivateRoutes = () => {
  let { user } = useBikeya();
    return user? <Outlet/>:  <Navigate to="/"/>
  }

  export default PrivateRoutes

