// ServicesSection.js
import React from 'react';
import './Services.css'; // Import the CSS file

const Services = () => {
  return (
    <section className="services-container pa4">
      <h2 className="f2 fw6 tc mb4">Our Services</h2>
      <div className="flex flex-wrap justify-around">
        <div className="w-30-l ph4 mb4">
          <article className="service-card bg-white br3 pa3 pa4-ns ba b--black-10">
            <h2 className="f4 black mv0">Service 1</h2>
            <p className="f6 black-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
        </div>
        <div className="w-30-l ph4 mb4">
          <article className="service-card bg-white br3 pa3 pa4-ns ba b--black-10">
            <h2 className="f4 black mv0">Service 2</h2>
            <p className="f6 black-60">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
        </div>
        <div className="w-30-l ph4 mb4">
          <article className="service-card bg-white br3 pa3 pa4-ns ba b--black-10">
            <h2 className="f4 black mv0">Service 3</h2>
            <p className="f6 black-60">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
