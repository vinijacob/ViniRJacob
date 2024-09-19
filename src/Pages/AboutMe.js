import React from 'react';
import style from './AboutMe.module.css';

import CarrouselSlider from '../Components/CarrouselSlider';

import img1 from '../Assets/photos/ViniStaring.JPG';
import img2 from '../Assets/photos/IMG_6344.jpg';
import img3 from '../Assets/photos/VeganVini.JPG';

import memoji from '../Assets/Icons/IMG_9226.png';

export default function AboutMe() {
    const slides = [
        { url: img1, title: 'Photo taken in November 2022' },
        { url: img2, title: 'Photo taken in May 2023' },
        { url: img3, title: 'Photo taken in April 2023' },
    ];

    return (
        <div className={style.bigContainer}>
            <div className={style.infoContainer}>
                <div className={style.sliderContainer}>
                    <CarrouselSlider slides={slides} />
                </div>
                <div className={style.aboutMeText}>
                    <div className={style.memojiContainer}>
                        <img src={memoji} className={style.memojiImage} alt="memoji" />
                    </div>
                    <div className={style.aboutMeContent}>
                        <div className={style.greetBox}>
                            <h2>Hello</h2>
                            <h1 className={style.hand}>👋🏼</h1>
                        </div>
                        <h1>I'm <span>Vini R Jacob</span></h1>
                        <p>A 20-year-old software developer with 
                            a passion for coding and a keen interest in
                            building innovative solutions.
                            I'm currently based in Manaus, Brasil,
                            where I was born. I'm pursuing a degree in
                            'Computer Science' at Uninorte College.
                            Strong foundation in web development,
                            problem-solving, and teamwork.</p>
                        <a href=''
                        // target='_blank'
                        className={style.pdf}><button className={style.button}>CV</button></a>
                    </div>
                </div>
            </div>
            {/* <Hobbies /> */}
        </div>
    );
}
