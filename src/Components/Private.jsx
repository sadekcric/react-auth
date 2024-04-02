import { useContext } from "react";
import { AuthContext } from "./AllPages/CommonFile";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Private = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    {
      return children;
    }
  }
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default Private;

Private.propTypes = {
  children: PropTypes.node,
};
