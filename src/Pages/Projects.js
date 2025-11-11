import React from 'react';
import style from './Projects.module.css'

export default function Projects() {
  return (
    <div>
        <div className={style.container}>
        <ul id={style.cards}>
            <li className={style.card} id={style.card1}>
                <div className={style.cardBody}>
                    <h2>This portfolio.</h2>
                    <p>This portfolio was meticulously crafted using the React library, a powerful and flexible JavaScript framework for building user interfaces. React is particularly well-suited for developing single-page applications, where you can manage complex state and render dynamic content efficiently.</p>
                </div>
            </li>
            <li className={style.card} id={style.card2}>
                <a
                href='https://github.com/vinijacob/pokedex'
                target='_blank'
                className={style.cardBody}>
                    <h2>A Pokedex!</h2>
                    <p>In the game of Pokemón, a Pokedex is what keeps tracks of the little creatures known as Pokemón. It was really fun creating it and learning a lot from it, emplementing the pokeAPI with vanilla HTMl, CSS & JavaScript.</p>
                </a>
            </li>
            <li className={style.card} id={style.card3}>
                <a
                href='https://github.com/vinijacob/A.pets'
                target='_blank' 
                className={style.cardBody}>
                    <h2>A.Pets – Pet Adoption App</h2>
                    <p>A.Pets is a prototype social network application for adopting and donating pets, developed by a team of college colleagues. The app connects users with each other and with animal welfare organizations, combining social interaction features with a focus on responsible pet adoption. It isn't finished.</p>
                </a>
            </li>
            {/* BEWARE WHEN ADDING NEW CARDS */}
        </ul>
    </div>
    </div>
  )
}
