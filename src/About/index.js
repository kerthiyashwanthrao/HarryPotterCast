import "./index.css"

import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2  className="aboutHeading" >About the Wizarding World</h2>
        <p className="aboutPara" >
          Welcome to the enchanting world of Harry Potter! Immerse yourself in a universe
          filled with magic, adventure, and unforgettable characters. J.K. Rowling's
          wizarding world has captivated millions around the globe, inviting us to join
          young wizards and witches on their remarkable journey.
        </p>
        <p className="aboutPara" >
          From the iconic Hogwarts School of Witchcraft and Wizardry to the magical creatures,
          spells, and mysteries that define this realm, there's a magical story waiting to
          be explored around every corner.
        </p>
        <p className="aboutPara" >
          Join us as we delve into the spellbinding tales that have become a cherished part
          of modern literature and cinematic history.
        </p>
      </div>
      <div className="author-info">
        <h3 className="aboutHeading" >About J.K. Rowling</h3>
        <p className="aboutPara" >
          J.K. Rowling is the brilliant mind behind the Harry Potter series. Her imagination
          and creativity have brought to life a universe that has enchanted generations.
        </p>
        <p className="aboutPara" >
          Through her books, she has transported us to a world where magic is real and
          friendship is the most powerful force of all. Learn more about the author who
          inspired a magical phenomenon.
        </p>
      </div>
    </section>
  );
};

export default About;
