import React from 'react';
import style from './ContactMe.module.css';

import InstagramIcon from '../Assets/logos/instagram.png';
import EmailIcon from '../Assets/logos/email.png';
import LinkedInIcon from '../Assets/logos/linkedin.png';
import GitHubIcon from '../Assets/logos/github-logo.png';

export default function ContactMe() {
  return (
    <div className={style.contactContainer}>
      <h1 className={style.heading}>Contact Me</h1>
      <div className={style.contactItem}>
        <a href="https://instagram.com/v.r_jacob" target="_blank" rel="noopener noreferrer" className={style.link}>
          <img src={InstagramIcon} alt="Instagram" className={style.contactIcon} />
          <span>@v.r_jacob</span>
        </a>
      </div>
      <div className={style.contactItem}>
        <a href="mailto:vini_jacob@hotmail.com" className={style.link}>
          <img src={EmailIcon} alt="Email" className={style.contactIcon} />
          <span>vini_jacob@hotmail.com</span>
        </a>
      </div>
      <div className={style.contactItem}>
        <a href="https://linkedin.com/in/vinícius-ramos-jacob" target="_blank" rel="noopener noreferrer" className={style.link}>
          <img src={LinkedInIcon} alt="LinkedIn" className={style.contactIcon} />
          <span>/in/vinícius-ramos-jacob</span>
        </a>
      </div>
      <div className={style.contactItem}>
        <a href="https://github.com/vinijacob" target="_blank" rel="noopener noreferrer" className={style.link}>
          <img src={GitHubIcon} alt="GitHub" className={style.contactIcon} />
          <span>@vinijacob</span>
        </a>
      </div>
    </div>
  );
}
