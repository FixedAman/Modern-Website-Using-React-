import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Blogs,
  Features,
  Header,
  Footer,
  WhatGPT3,
  Possibilty,
} from "./containers";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
