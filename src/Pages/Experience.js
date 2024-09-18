import React from 'react';
import style from './Experience.module.css';

import pythonIcon from '../Assets/Icons/python.png';
import wwwLogo from '../Assets/Icons/world-wide-web.png';
import reactLogo  from '../Assets/Icons/atom.png';
import ccLogo from '../Assets/Icons/graduation-hat.png';
import swiftLogo from '../Assets/Icons/swift.png';
import journeyIcon from '../Assets/Icons/walk.png';

export default function Experience() {
  return (
    <div className={style.timeline}>
      <div className={`${style.container} ${style.leftContainer}`}>
        <img src={journeyIcon} alt="walk"/>
        <div className={`${style.textBox} ${style.leftTextBox}`}>
          <h2>The journey begins!</h2>
          <small>2020</small>
          <p>In 2020, during the pandemic, I was bored from doing nothing all day long, so I begin searching and studying programming languages and computer science as a hobby.</p>
        </div>
      </div>
      <div className={`${style.container} ${style.rightContainer}`}>
        <img src={pythonIcon} alt="Python Logo"/>
        <div className={`${style.textBox} ${style.rightTextBox}`}>
          <h2>Python Development</h2>
          <small>2020 - 2024</small>
          <p>While researching programming languages I discovered and fell in love with python. From then I begin learning as much python as I could, and still study it till today.</p>
        </div>
      </div>

      <div className={`${style.container} ${style.leftContainer}`}>
        <img src={wwwLogo} alt="World Wide Web Logo"/>
        <div className={`${style.textBox} ${style.leftTextBox}`}>
          <h2>Web Development</h2>
          <small>2021</small>
          <p>Ater having learned so much about python development I decided to learn something new, thus I begin my journey to become a Web Developer.</p>
        </div>
      </div>

      <div className={`${style.container} ${style.rightContainer}`}>
        <img src={reactLogo} alt="React.JS Logo"/>
        <div className={`${style.textBox} ${style.rightTextBox}`}>
          <h2>React.JS</h2>
          <small>2021 - 2024</small>
          <p>My React.js journey begin in may 2021 when I decided to learn even more about web development.</p>
        </div>
      </div>

      <div className={`${style.container} ${style.leftContainer}`}>
        <img src={ccLogo} alt="Computer Science Logo"/>
        <div className={`${style.textBox} ${style.leftTextBox}`}>
          <h2>Studying Computer Science</h2>
          <small>2022 - 2026</small>
          <p>I graduated from high school in 2021, and right in 2022 I got into Uninorte College to study computer Science. I still am in college today, anxious to know what the future awaits.</p>
        </div>
      </div>

      <div className={`${style.container} ${style.rightContainer}`}>
        <img src={swiftLogo} alt="Swift Logo"/>
        <div className={`${style.textBox} ${style.rightTextBox}`}>
          <h2>Swift for Apple development</h2>
          <small>2023 - 2024</small>
          <p>I first begin learning about swift after acquiring a macbook pro, one of the best purchases I could have ever buy. Today I am learning and developing projects for Apple using Swift and XCode.</p>
        </div>
      </div>
    </div>
  );
}
