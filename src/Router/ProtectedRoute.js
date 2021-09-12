import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import LoginContext from '../utils/LoginContext';

function ProtectedRoute(props) {
  const {isLoggedIn} = useContext(LoginContext)
  
  return (
    isLoggedIn ? 
    <Route path={props.path} >
      {props.component}
    </Route>
    :
    <Redirect to="/login" />
  );
}

export default ProtectedRoute;