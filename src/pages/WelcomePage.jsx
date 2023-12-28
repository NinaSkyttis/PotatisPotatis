/* eslint-disable max-len */
import React from 'react';
import '../scss/_welcome_page.scss';

const Welcomepage = () => {
  return (
    <>
      <div className="centerDiv">
        <section className="elevatorPitch">
        Revolutionize your cooking experience—effortlessly
        save, organize, and share your favorite recipes
        for a smoother, more enjoyable culinary journey
        tailored to you.
        </section>
      </div>

      <div className="centerDiv">
        <section className="pickOfDay">
          <img src="../img/homepage-img.jpg" alt="image" />
        </section>
      </div>
    </>
  );
};

export default Welcomepage;
