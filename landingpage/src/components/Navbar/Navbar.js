
import React from 'react';

const Navbar = () => (
  <nav className="bg-gradient white">
    <div className="pa3 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" title="Home" className="link dim white dib mr3">
          <img
            src="https://picsum.photos/200/50?random=1"
            alt="Logo"
            className="br-100 h2 w2 dib ba b--white pa1"
          />
        </a>
        <a className="link dim white bg-navy ph3 pv2 mh2 br2 fw6" href="/" title="Home">
          Home
        </a>
        <a className="link dim white bg-navy ph3 pv2 mh2 br2 fw6" href="/about" title="About">
          About
        </a>
        <a className="link dim white bg-navy ph3 pv2 mh2 br2 fw6" href="/services" title="Services">
          Services
        </a>
        <a className="link dim white bg-navy ph3 pv2 mh2 br2 fw6" href="/contact" title="Contact">
          Contact
        </a>
      </div> 
    </div>
  </nav>
);

export default Navbar;
