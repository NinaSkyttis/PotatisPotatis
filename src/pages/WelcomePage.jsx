/* eslint-disable max-len */
import React from 'react';
import homepageImg from '../img/homepage-img.jpg';
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
      <section className="TwoCol">
        <div className="leftDiv">
          <section>
            <h2>Pick of the day</h2>
            <p>Protein packed lunch boxes ready to go in 15 min</p>
            <button className="borderButton">View Recipe</button>
          </section>
        </div>
        <div className="rightDiv">
          <section className="pickOfDay">
            <img src={homepageImg} alt="image" />
          </section>
        </div>
      </section>
      <section className="instructions">
        <div>
          <h3>Search and save any recipe you want</h3>
        </div>
        <div>
          <h3>Customize your cookbook as you would if wrote your own</h3>
        </div>
        <div>
          <h3>Share recipes and collections with friends and family</h3>
        </div>
      </section>
    </>
  );
};

export default Welcomepage;
