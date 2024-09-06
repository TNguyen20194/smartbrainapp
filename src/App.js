// eslint-disable-next-line
import React, { Component} from 'react';
import Navigation from "./Components/Navigations/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import ParticlesBg from "particles-bg";
import './App.css';


const particlesOptions = {
  type: "cobweb",
  bg: true,
  num: 200,
  color: "#ffffff"
};

function App() {
  return (
    <div className="App">
      <ParticlesBg {...particlesOptions}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
