import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Projects from './Projects';
import Technology from './Technology';

import "../assets/styles/main.scss"

export default function App (){

  return(
    <div>
      <Header />
      <Welcome />
      <Technology />
      <Projects />
    </div>
  );
}