import React from "react";
import { useRoutes } from "react-router-dom";
import Headers from "./Components/Header";
import Header from './Components/Header/header';
import AllRoute from "./Components/Routes/allRoutes";

function App() {
  return (
    <div>
      <Headers />
      <AllRoute />


    </div>
  );
}

export default App;
