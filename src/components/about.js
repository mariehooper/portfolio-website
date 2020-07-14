import React from "react"
import heroImg from "../images/marie.jpg"
import styles from "../styles/about.module.scss"

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.sectionHeader}>About</h2>
      <div className={styles.flex}>
        <div>
          <p>
            Hi! I am a software engineer who is passionate about building things
            for the web. I recently joined the engineering team at{" "}
            <a
              href="https://www.skyspecs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SkySpecs
            </a>{" "}
            where I work on a variety of web applications that support the
            mission to make wind energy more attainable for the world through
            the automation of wind farms.
          </p>
          <p>
            When I am not glued to a MacBook screen, you can find me biking,
            hiking, playing rec sports, or watching college football.
          </p>
          <p>Below is some tech I've been using recently:</p>
          <ul>
            <li>JavaScript (ES2015+)</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>Apollo</li>
            <li>Vue.js</li>
            <li>(S)CSS, Styled Components, Emotion</li>
          </ul>
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={heroImg} alt="" />
        </div>
      </div>
    </section>
  )
}
