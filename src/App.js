import React from "react";
import Layout from "./core/layoutapp";
import { Route, Routes } from "react-router-dom";
import Home from "./core/home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
    </Layout>
  );
};

export default App;
