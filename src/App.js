import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import KemampuanKpr from "./pages/KemampuanKpr";
import KprTakeOver from "./pages/KprTakeOver";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<KemampuanKpr />} />
        <Route path="/kpr-takeover" element={<KprTakeOver />} />
      </Routes>
    </>
  );
};

export default App;
