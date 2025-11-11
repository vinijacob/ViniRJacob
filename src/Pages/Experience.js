import React from 'react';
import style from './Experience.module.css';

import pythonIcon from '../Assets/Icons/python.png';
import wwwLogo from '../Assets/Icons/world-wide-web.png';
import reactLogo from '../Assets/Icons/atom.png';
import ccLogo from '../Assets/Icons/graduation-hat.png';
import dotnetLogo from '../Assets/Icons/NET core.png';
import journeyIcon from '../Assets/Icons/walk.png';
import csharpLogo from '../Assets/Icons/c-sharp.png';
import pygameLogo from '../Assets/Icons/pygame icon.png';



export default function Experience() {
  return (
    <div className={style.timeline}>
      {/* Journey Start */}
      <div className={`${style.container} ${style.leftContainer}`}>
        <img src={journeyIcon} alt="Journey Icon" />
        <div className={`${style.textBox} ${style.leftTextBox}`}>
          <h2>The Journey Begins</h2>
          <small>2020</small>
          <p>During the pandemic, I decided to make productive use of my free time by exploring the world of programming. What started as curiosity quickly grew into a deep passion for technology and software development.</p>
        </div>
      </div>

      {/* Python Development */}
      <div className={`${style.container} ${style.rightContainer}`}>
        <img src={pythonIcon} alt="Python Logo" />
        <div className={`${style.textBox} ${style.rightTextBox}`}>
          <h2>Python Development</h2>
          <small>2020 – Today</small>
          <p>My journey truly took off with Python, a language that captivated me with its simplicity and power. Since then, I’ve developed several small projects and continue learning to enhance my coding and problem-solving skills.</p>
        </div>
      </div>

      {/* Web Development */}
      <div className={`${style.container} ${style.leftContainer}`}>
        <img src={wwwLogo} alt="Web Development Icon" />
        <div className={`${style.textBox} ${style.leftTextBox}`}>
          <h2>Web Development</h2>
          <small>2021</small>
          <p>After gaining solid experience in Python, I was inspired to expand my skills into web technologies. I began learning HTML, CSS, and JavaScript, which opened the door to creating interactive and dynamic web applications.</p>
        </div>
      </div>

      {/* React.JS */}
      <div className={`${style.container} ${style.rightContainer}`}>
        <img src={reactLogo} alt="React.JS Logo" />
        <div className={`${style.textBox} ${style.rightTextBox}`}>
          <h2>React.JS</h2>
          <small>2021 – Today</small>
          <p>I discovered React.js as a modern and efficient way to build user interfaces. Since then, I’ve been developing personal projects and continuously improving my front-end development skills using React’s component-based approach.</p>
        </div>
      </div>

      {/* C# Programming */}
      <div className={`${style.container} ${style.leftContainer}`}>
        <img src={csharpLogo} alt="C# Logo" />
        <div className={`${style.textBox} ${style.leftTextBox}`}>
          <h2>C# Development</h2>
          <small>2021 – Today</small>
          <p>In 2021, I started learning C#, which became one of my main programming languages. It strengthened my understanding of object-oriented programming and later led me to explore the .NET ecosystem in depth.</p>
        </div>
      </div>

      {/* Computer Science Degree */}
      <div className={`${style.container} ${style.rightContainer}`}>
        <img src={ccLogo} alt="Computer Science Icon" />
        <div className={`${style.textBox} ${style.rightTextBox}`}>
          <h2>Computer Science Degree</h2>
          <small>2022 – 2027</small>
          <p>In 2022, I began my bachelor’s degree in Computer Science at UNINORTE. The program has provided me with a strong foundation in algorithms, data structures, software engineering, and teamwork.</p>
        </div>
      </div>

      {/* Valencia College */}
      <div className={`${style.container} ${style.leftContainer}`}>
        <img src={ccLogo} alt="Valencia College Logo" />
        <div className={`${style.textBox} ${style.leftTextBox}`}>
          <h2>Valencia College – Programming and Analysis</h2>
          <small>2023 – 2024</small>
          <p>I attended the Programming and Analysis program at Valencia College (Orlando, FL), where I deepened my understanding of software development principles, system analysis, and database management. Although I did not complete the program, the experience strengthened my logical thinking, algorithmic reasoning, and ability to design efficient software solutions.</p>
        </div>
      </div>

      {/* ASP.NET Core */}
      <div className={`${style.container} ${style.rightContainer}`}>
        <img src={dotnetLogo} alt="ASP.NET Core Logo" />
        <div className={`${style.textBox} ${style.rightTextBox}`}>
          <h2>ASP.NET Core Development</h2>
          <small>2023 – Today</small>
          <p>Building upon my C# knowledge, I started learning ASP.NET Core to create scalable and high-performance web applications. I’ve been developing full-stack projects using Visual Studio and exploring modern web frameworks.</p>
        </div>
      </div>

      {/* Pygame */}
      <div className={`${style.container} ${style.leftContainer}`}>
        <img src={pygameLogo} alt="Pygame Logo" />
        <div className={`${style.textBox} ${style.leftTextBox}`}>
          <h2>Game Development with Pygame</h2>
          <small>2024 – 2025</small>
          <p>I began exploring game development with Pygame, combining my passion for coding and creativity. Through this, I learned about game loops, event handling, and graphics programming while building fun and interactive 2D games.</p>
        </div>
      </div>
    </div>
  );
}
