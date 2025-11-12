import React from "react";

// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import Global from "./styles/Global";

import { Outlet } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      
        <Global />
        <Outlet />
      
    </>
  );
}

export default App;
