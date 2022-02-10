import React from "react";
import "./about.scss";
import about from "../../img/about.jpeg";
import award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a__left">
        <div className="a__card a__card--bg"></div>
        <div className="a__card">
          <img src={about} alt="" className="a__img" />
        </div>
      </div>
      <div className="a__right">
        <h1 className="a__title">About Me</h1>
        <p className="a__sub">I build things for the web.</p>
        <p className="a__desc">
          Hello! My name is Raghava and I enjoy creating things that live on the
          internet. My interest in web development started back in 2018 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <div className="a__award">
          <img src={award} alt="" className="a__award-img" />
          <div className="a__award-texts">
            <div className="a__award-title">
              Best Design and Developer award
            </div>
            <div className="a__award-desc">
              I won the best designer & developer award in college in the year
              of 2020{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
