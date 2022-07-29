import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";
import Get from "./pages/Get";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/get" element={<Get />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
