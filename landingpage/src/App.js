
import React from 'react';
import 'tachyons';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutSection from './components/AboutSection/AboutSection';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection/>
    </div>
  );
}

export default App;
