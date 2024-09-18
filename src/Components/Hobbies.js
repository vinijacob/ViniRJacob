import React from 'react';
import styles from '../Components/Hobbies.module.css';

export default function Hobbies() {
  return (
    <div className={styles.hobbieContainer}>
      <h2>My hobbies are:</h2>
      <aside className={styles.aside}>
        <article className={styles.article}>
          <h5>Writing</h5>
          <p>I love to Write for movies and television. It sometimes calms me down, and helps me think.</p>
        </article>

        <article className={styles.article}>
          <h5>Reading</h5>
          <p>Reading can be a challenge for me, suffering from ADHD. But even then I try my best to read. I love reading screnplays from movies.</p>
        </article>

        <article className={styles.article}>
          <h5>Watching Movies</h5>
          <p>Watching movies is the best and most relaxing time I have in my day. Movies keep me enterteined, and I love it. I try to watch a new movcie per day.</p>
        </article>

        <article className={styles.article}>
          <h5>Spending time with my friends</h5>
          <p>There is nothing better than just having quality time with your friends and family. I love to hang out with my friends as much as I can. It's always a fun time.</p>
        </article>
      </aside>
    </div>
  );
}
