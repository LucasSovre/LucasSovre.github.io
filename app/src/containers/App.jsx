import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Projects from './Projects';

import "../assets/styles/main.scss"

export default function App (){

  return(
    <div>
      <Header />
      <Welcome />
      <Projects />
    </div>
  );
}