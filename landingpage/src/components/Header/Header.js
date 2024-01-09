
import React from 'react';
import './Header.css';

const Header = () => {
  const getRandomImage = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return `https://picsum.photos/${width}/${height}?random=2`;
  };

  return (
    <div>
      <header className="vh-100 dt w-100">
        <div className="dtc v-mid cover ph3 ph4-m ph5-l relative bg-center header-container">
          <div className="header-background" style={{ backgroundImage: `url("${getRandomImage()}")` }}></div>
          <h1 className="f2 f-subheadline-l fw6 tc white">Welcome to Our Landing Page Website</h1>
          <p className="f3 fw4 tc white animated-text">Empowering Minds</p>

          <div className="flex justify-center mt4">
            <button className="f6 link dim br2 ba ph3 pv2 mh2 dib white bg-dark-green">
              Change Text
            </button>
            <button className="f6 link dim br2 ba ph3 pv2 mh2 dib white bg-dark-blue">
              Another Action
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
