
import React from 'react';

const AboutSection = () => {
  const getRandomImage = () => {
    const width = 400; 
    const height = 300; // Set a fixed height for the image
    return `https://picsum.photos/${width}/${height}?random=3`;
  };

  return (
    <section className="pa4">
      <article className="center mw7 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="flex">
          <img
            src={getRandomImage()}
            alt="Random"
            className="w-40 br3 h5 pa1"
          />
          <div className="ph3">
            <h2 className="f4 black mv0">About Our College</h2>
            <p className="f6 black-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, nunc vitae tincidunt accumsan, arcu nisl ultrices libero, non vestibulum turpis elit sit amet odio.</p>
            <p className="f6 black-60">Duis eget tristique est. Suspendisse potenti. Ut pulvinar, ligula vel euismod ultrices, turpis sapien pharetra tortor, nec feugiat est quam in ligula.</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
