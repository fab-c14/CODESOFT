
import React from 'react';
import 'tachyons';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutSection from './components/AboutSection/AboutSection';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection/>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
